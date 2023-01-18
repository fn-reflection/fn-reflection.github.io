import { useState, useRef } from 'react';
import Ace from 'ace-builds';
import dynamic from 'next/dynamic';
import { SUPPORTED_LANGUAGES, SupportedLanguage, OFFICIAL_NAMES } from '../../core/ace_editor/supported_languages';


const AceEditorNoSsr = dynamic(
  async () => {
    return (await import('../../components/ace_editor')).AceEditor;
  },
  { ssr: false }
);

export default function TestAceEditor(): JSX.Element {
  const editorRef = useRef<Ace.Ace.Editor | null>(null);
  const [language, setLanguage] = useState<SupportedLanguage>('python');
  const [submitCode, setSubmitCode] = useState('');
  return (
    <article>
      <h1>Try Ace Editor</h1>
      <div style={{ display: 'flex', padding: '0.5rem', gap: '0.5rem', alignItems: 'center' }}>
        <p>言語を選択</p>
        <select
          value={language}
          onChange={event => { setLanguage(event.target.value as SupportedLanguage); }}
          style={{
            padding: '0.5rem',
          }}
        >
          {SUPPORTED_LANGUAGES.map(lang => <option value={lang} key={lang}>{OFFICIAL_NAMES[lang]}</option>)}
        </select>
      </div>
      <AceEditorNoSsr {...{ editorRef, language, width: '100%', height: '300px' }} />
      <div style={{ display: 'flex', padding: '0.5rem', gap: '2rem' }}>
        <button
          onClick={() => { setSubmitCode(editorRef.current?.session.getValue() || ''); }}
          style={{
            padding: '0.5rem',
          }}
        >
          コードを出力
        </button>
        <textarea value={submitCode} readOnly={true} style={{ height: '5rem', width: '20rem' }} />
      </div>

    </article>
  );
}

