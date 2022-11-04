import {
  QuestionDetailSubsideBox,
  QuestionDetailVoteBox,
} from '../atoms/QuestionDetailContainer';
import { ArrowDown, ArrowUp } from '../atoms/SvgComponents';
import { useClick } from '../../hooks/useClick';

//추천수와 화살표를 담고있는 div 최소 높이가 102px를 유지하기위함
export const QuestionDetailSidebar = ({ vote }) => {
  //상태 초기값 받아와서 useClick 수정해야함.
  const [upbind] = useClick('var(--black-200)');
  const [downbind] = useClick('var(--orange)');
  // const [votes, setVotes] = useState(vote);
  console.log(vote);
  return (
    <QuestionDetailSubsideBox>
      <ArrowUp props={upbind}></ArrowUp>
      <QuestionDetailVoteBox>2</QuestionDetailVoteBox>
      <ArrowDown props={downbind}></ArrowDown>
    </QuestionDetailSubsideBox>
  );
};
