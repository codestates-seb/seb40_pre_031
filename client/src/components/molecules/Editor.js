import React, { forwardRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const Write = forwardRef(({ onChange }, ref) => {
  return (
    <>
      <Editor
        height="500px"
        onChange={onChange}
        previewStyle="vertical"
        initialEditType="markdown"
        initialValue="질문을 적어주세요"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={ref}
      />
    </>
  );
});
export default Write;
