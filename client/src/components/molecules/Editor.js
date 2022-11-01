import React, { forwardRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
// 에디터 불러오기
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
// 에디터 코드작성 부분 컬러 하이라이트 적용 불러오기

const Write = forwardRef(({ onChange }, ref) => {
  return (
    <>
      <Editor
        height="500px"
        onChange={onChange}
        previewStyle="vertical"
        initialEditType="markdown"
        initialValue="My question"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={ref}
      />
    </>
  );
});
export default Write;
