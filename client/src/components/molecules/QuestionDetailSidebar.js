import {
  QuestionDetailSubsideBox,
  QuestionDetailVoteBox,
} from '../atoms/QuestionDetailContainer';
import { ArrowDown, ArrowUp } from '../atoms/SvgComponents';

export const QuestionDetailSidebar = () => {
  return (
    <QuestionDetailSubsideBox>
      <ArrowUp fill={'var(--black-200)'}></ArrowUp>
      <QuestionDetailVoteBox>22222</QuestionDetailVoteBox>
      <ArrowDown fill={'var(--orange)'}></ArrowDown>
    </QuestionDetailSubsideBox>
  );
};
