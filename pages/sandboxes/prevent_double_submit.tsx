import { useRef, useState, MouseEvent } from 'react';
import { Result, Ok, Err } from 'ts-results';

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
      setSubmitting(true);
      await onClick(ev);
      setSubmitting(false);
    }
  }}>
    {content}
  </button>;
};

const TestModal = (): JSX.Element => {
  const button1Ref = useRef<HTMLButtonElement>(null);
  const [button2IsSubmitting, setButton2IsSubmitting] = useState(false);
  return (
    <div>
      <button ref={button1Ref} {...{
        onClick: async (_ev) => {
          button1Ref.current!.disabled = true;
          try {
            const res = await fetch('https://example.com', { mode: 'no-cors' });
            console.log(res);
          } catch(e) {
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
    </div>
  ); };
export default TestModal;
