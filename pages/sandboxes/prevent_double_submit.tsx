import { useRef, useState, MouseEvent, RefObject, useEffect } from 'react';
import { Result, Ok, Err } from 'ts-results';

// テスト用にconsole.logを使っているため許可する
/* eslint-disable no-console */

// 例外を発生させないためのResultベースの関数(微妙かもしれない)
const toResult = async <T extends (...args: any[]) => any>(f: T, ...args: Parameters<T>): Promise<Result<Awaited<ReturnType<T>>, Error>> => {
  try {
    return Ok(await f(...args));
  } catch (e) {
    return Err(e as Error);
  }
};

// インタフェースがごちゃつく＋エラーハンドリングの形式とか呼び出し側でコントロールできなくなるので拡張性の保証がない
const ComplexPreventDoubleSubmitButton = ({ content, onClickHandler, onClickErrorHandler }: { content:JSX.Element, onClickHandler: (ev: MouseEvent<HTMLButtonElement>)=>Promise<void>, onClickErrorHandler: (e:Error)=>Promise<void> }) => {
  const [submitting, setSubmitting] = useState(false);
  return <button {...{
    disabled: submitting,
    onClick: async (ev) => {
      if (submitting) { return; }
      setSubmitting(true);
      try {
        await onClickHandler(ev);
      } catch (e) {
        await onClickErrorHandler(e as Error);
      } finally {
        setSubmitting(false);
      }
    }
  }}>
    {content}
  </button>;
};

// buttonのデザインとロジックをどう分離(直交的に表現)するかが課題になるかも
const PreventDoubleSubmitButton = ({ content, onClick }: {
  content: JSX.Element,
  onClick: (ev: MouseEvent<HTMLButtonElement>) => Promise<void> // onClickが例外を送出すると再送できなくなる
}) => {
  const [submitting, setSubmitting] = useState(false);
  return <button {...{
    disabled: submitting,
    onClick: async (ev) => {
      if (submitting) { return; }
      setSubmitting(true);
      await onClick(ev);
      setSubmitting(false);
    }
  }}>
    {content}
  </button>;
};

const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

// 二重送信防止処理を抽出したフック
// fが例外を送出する場合、再送できなくなるので必ずcatchして処理するか、再送できないことをよしとする
const useConcurrencyPrevention = <T extends (...args: any[]) => any>(f: T): [(...args: Parameters<T>)=> Promise<void>, boolean] => {
  const [submitting, setSubmitting] = useState(false);
  const wrapped = async (...args: Parameters<T>) => {
    if (submitting) { console.log("don't start to fetch"); return; }
    setSubmitting(true);
    await f(...args);
    setSubmitting(false);
  };
  return [wrapped, submitting];
};


// 二重送信防止処理を抽出したフック2
const useAutoDisabled = <T extends (...args: any[]) => any>(buttonRef: RefObject<HTMLButtonElement>, f: T):  (...args: Parameters<T>)=> Promise<void> => {
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    buttonRef.current!.disabled = submitting;
  }, [submitting]);
  const wrapped = async (...args: Parameters<T>) => {
    if (submitting) { return; }
    setSubmitting(true);
    await f(...args);
    setSubmitting(false);
  };
  return wrapped;
};


const PreventDoubleSubmit = (): JSX.Element => {
  const button1Ref = useRef<HTMLButtonElement>(null);
  const [button2IsSubmitting, setButton2IsSubmitting] = useState(false);
  const [onSubmit, submitting] = useConcurrencyPrevention(async (ev) => {
    const res = await toResult(fetch, 'https://example.com', { mode: 'no-cors' });
    await sleep(1000); // fetchが抑制されてるかをわかりやすくするためのsleep
    if (res.err) { console.error(res.val.message); }
    console.log(res.val);
    console.log(ev);
  });

  const button2Ref = useRef<HTMLButtonElement>(null);
  const onSubmit2 = useAutoDisabled(button2Ref, async (ev) => {
    const res = await toResult(fetch, 'https://example.com', { mode: 'no-cors' });
    if (res.err) { console.error(res.val.message); }
    console.log(res.val);
    console.log(ev);
  });
  return (
    <div>
      <button ref={button1Ref} {...{
        onClick: async (_ev) => {
          button1Ref.current!.disabled = true;
          try {
            const res = await fetch('https://example.com', { mode: 'no-cors' });
            console.log(res);
          } catch (e) {
            console.log((e as Error).message);
          } finally {
            button1Ref.current!.disabled = false;
          }
        }
      }}>
        disabled imperatively
      </button>
      <button {...{
        disabled: button2IsSubmitting,
        onClick: async (_ev) => {
          if (button2IsSubmitting) { return; }
          setButton2IsSubmitting(true);
          try {
            const res = await fetch('https://example.com', { mode: 'no-cors' });
            console.log(res);
          } catch (e) {
            console.log((e as Error).message);
          } finally {
            setButton2IsSubmitting(false);
          }
        }
      }}>
        disabled via naive useState
      </button>
      <ComplexPreventDoubleSubmitButton {...{
        content: <>complex prevent double submit button</>,
        onClickHandler: async(_ev) => {
          const res = await fetch('https://example.com', { mode: 'no-cors' });
          console.log(res);
        },
        onClickErrorHandler: async (e) => {
          console.log(e.message);
        }
      }} />
      <PreventDoubleSubmitButton {...{
        content: <>prevent double submit button</>,
        onClick: async () => {
          // 例外をあげる可能性のある処理を確実にキャッチしないと再送できなくなるので、Resultベースの実装を試しに入れてみた
          // ちゃんとtry catchするか、再送できないをよしとするならなんでもOK
          const res = await toResult(fetch, 'https://example.com', { mode: 'no-cors' });
          if (res.err) { console.error(res.val.message); }
          console.log(res.val);
        },
      }} />
      <button {...{
        disabled: submitting,
        onClick: (ev)=> onSubmit(ev)
      }}>
        custom hook with useState
      </button>

      <button {...{
        onClick: (ev)=> onSubmit(ev)
      }}>
        custom hook with useState(always clickable)
      </button>

      <button ref={button2Ref} {...{
        onClick: (ev)=> onSubmit2(ev)
      }}>
        custom hook with useRef
      </button>
    </div>
  ); };
export default PreventDoubleSubmit;
