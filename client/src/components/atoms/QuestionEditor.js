import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { forwardRef } from 'react';

//QuestionDetail에서 본문을 나타내는 뷰어
const QuestionEditor = forwardRef(({ content }, ref) => {
  const markdownData = content;

  return (
    <>
      <Editor
        initialValue={markdownData}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={ref}
      />
    </>
  );
});

QuestionEditor.displayName = 'QuestionEditor';
export default QuestionEditor;
