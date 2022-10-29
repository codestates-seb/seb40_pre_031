import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function Write({ height }) {
  return (
    <>
      <Editor height={height} />
    </>
  );
}
export default Write;
