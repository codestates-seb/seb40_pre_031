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
  const [upbind] = useClick('UP', votes, setVotes, status, setStatus, data);
  const [downbind] = useClick('DOWN', votes, setVotes, status, setStatus, data);
  const userId = useSelector((status) => status.authReducer.userId);
  //data.asnwerId 와 chosenAnswer가 같으면 초록색 체크모양 표시
  //그게아니라면 회색체크모양
  //질문한사람만 채택기능활성화 (questionId === userId)
  const fill =
    data.answerId === data.chosenAnswerId ? 'green' : 'var(--black-050)';
  const onClick = () => {
    if (data.questionId === userId) {
      if (confirm('답변을 채택하시겠습니까?')) {
        questionDetailApi.postChosenAnswer(data.questionId, data.answerId);
        location.reload();
      }
    }
  };
  return (
    <QuestionDetailSubsideBox data={data} userId={userId}>
      <ArrowUp props={upbind}></ArrowUp>
      <QuestionDetailVoteBox>{votes}</QuestionDetailVoteBox>
      <ArrowDown props={downbind}></ArrowDown>
      {/* 답변에만 v표시있어야하므로 data.answerId조건 */}
      {/* 질문한사람만 답변채택 해야하므로 data.questionId === userId */}
      {/* 모든사람은 채택한 답변은 보여야하므로 chosenAnswerId === answerId*/}
      {data.answerId ? (
        data.questionId === userId ? (
          <SVGchosenAnswer onClick={onClick} fill={fill}></SVGchosenAnswer>
        ) : data.chosenAnswerId === data.answerId ? (
          <SVGchosenAnswer fill={fill}></SVGchosenAnswer>
        ) : null
      ) : null}
    </QuestionDetailSubsideBox>
  );
};
