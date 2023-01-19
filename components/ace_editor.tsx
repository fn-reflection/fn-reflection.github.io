/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import { useEffect, useRef, MutableRefObject } from 'react';
import Ace from 'ace-builds';
import { SUPPORTED_LANGUAGES, SupportedLanguage, PLACEHOLDERS } from '../core/ace_editor/supported_languages';
import 'ace-builds/src-noconflict/theme-monokai';
// enable basic and live auto completion
import 'ace-builds/src-noconflict/ext-language_tools';
// import all SUPPORTED_LANGUAGES
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-python';

type Props = {
  editorRef: MutableRefObject<Ace.Ace.Editor | null>,
  language: SupportedLanguage,
  width?: string,
  height?: string,
}

const AceEditor: (args: Props) => JSX.Element = ({
  editorRef,
  language,
  width = '100%',
  height = '100%',
}) => {
  const editorDivRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    editorRef.current = Ace.edit(editorDivRef.current!, {
      enableAutoIndent: true,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      fontSize: 16,
      theme: 'ace/theme/monokai',
    });
  }, []);
  useEffect(() => {
    editorRef.current!.session.setMode(`ace/mode/${language}`);
    // overwrite if only current value is empty or default values of languages.
    if (['', ...Object.values(PLACEHOLDERS)].includes(editorRef.current!.session.getValue())) {
      editorRef.current!.session.setValue(PLACEHOLDERS[language]);
    }
  }, [language]);
  return <div ref={editorDivRef} style={{ width, height }} />;
};

export { AceEditor, SUPPORTED_LANGUAGES };
export type { SupportedLanguage };