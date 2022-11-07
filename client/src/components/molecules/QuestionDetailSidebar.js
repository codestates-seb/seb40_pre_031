import {
  QuestionDetailSubsideBox,
  QuestionDetailVoteBox,
} from '../atoms/QuestionDetailContainer';
import { ArrowDown, ArrowUp, SVGchosenAnswer } from '../atoms/SvgComponents';
import { useClick } from '../../hooks/useClick';
import { useState } from 'react';
import { questionDetailApi } from '../../api/apis';
import { useSelector } from 'react-redux';
//추천수와 화살표를 담고있는 div 최소 높이가 102px를 유지하기위함
export const QuestionDetailSidebar = ({ vote, voteStatus, data }) => {
  const [votes, setVotes] = useState(vote);
  const [status, setStatus] = useState(voteStatus); //추천상태
  const [upbind] = useClick('up', votes, setVotes, status, setStatus, data);
  const [downbind] = useClick('down', votes, setVotes, status, setStatus, data);
  const userId = useSelector((status) => status.authReducer.userId);
  //data.asnwerId 와 chosenAnswer가 같으면 초록색 체크모양 표시
  //그게아니라면 회색체크모양
  //질문한사람만 채택기능활성화 (questionId === userId)
  console.log(data.chosenAnswerId);
  const fill =
    data.answerId === data.chosenAnswerId ? 'green' : 'var(--black-050)';
  const onClick = () => {
    confirm('답변을 채택하시겠습니까?')
      ? questionDetailApi.postChosenAnswer(data.questionId, data.answerId)
      : null;
  };
  return (
    <QuestionDetailSubsideBox>
      <ArrowUp props={upbind}></ArrowUp>
      <QuestionDetailVoteBox>{votes}</QuestionDetailVoteBox>
      <ArrowDown props={downbind}></ArrowDown>
      {data.answerId && data.questionId === userId ? (
        <SVGchosenAnswer onClick={onClick} fill={fill}></SVGchosenAnswer>
      ) : null}
    </QuestionDetailSubsideBox>
  );
};
