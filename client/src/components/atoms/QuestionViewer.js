import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-clojure.js';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

//QuestionDetail에서 본문을 나타내는 뷰어
const QuestionViewer = ({ data }) => {
  const markdownData =
    '# 제목1\n\n**뷰어 테스트 해보기**\n*이탤릭 문서*\n~~ㅈㅏ바스크립트~~\n\n***\n> 블록테스트\n\n```html\n<h1>Test<h1>\n<div>title</div>\n<p>합참 "북한, 강원 고성 일대서 동해 완충구역에 100여 발 포격"\n출처 : SBS 뉴스 \n원본 링크 :</p>\n\n```\n\n코드 질문합니다 # 제목1\n\n**뷰어 테스트 해보기**\n*이탤릭 문서*\n~~ㅈㅏ바스크립트~~\n\n***\n> 블록테스트\n\n```html\n<h1>Test<h1>\n<div>title</div>\n<p>합참 "북한, 강원 고성 일대서 동해 완충구역에 100여 발 포격"\n출처 : SBS 뉴스 \n원본 링크 :</p>\n\n```\n\n코드 질문합니다';
  // const markdownData = data;

  return (
    <>
      <Viewer
        initialValue={markdownData}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  );
};
export default QuestionViewer;
