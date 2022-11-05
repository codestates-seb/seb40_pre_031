import {
  QuestionDetailSubsideBox,
  QuestionDetailVoteBox,
} from '../atoms/QuestionDetailContainer';
import { ArrowDown, ArrowUp } from '../atoms/SvgComponents';
import { useClick } from '../../hooks/useClick';
import { useState } from 'react';

//추천수와 화살표를 담고있는 div 최소 높이가 102px를 유지하기위함
export const QuestionDetailSidebar = ({ vote, voteStatus }) => {
  const [votes, setVotes] = useState(vote);
  const [status, setStatus] = useState(voteStatus); //추천상태
  const [upbind] = useClick('UP', votes, setVotes, status, setStatus);
  const [downbind] = useClick('DOWN', votes, setVotes, status, setStatus);

  return (
    <QuestionDetailSubsideBox>
      <ArrowUp props={upbind}></ArrowUp>
      <QuestionDetailVoteBox>{votes}</QuestionDetailVoteBox>
      <ArrowDown props={downbind}></ArrowDown>
    </QuestionDetailSubsideBox>
  );
};
