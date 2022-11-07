import styled from 'styled-components';
import QuestionSummary from '../molecules/QuestionSummary';
import QuestionSummaryContent from '../molecules/QuestionSummaryContent';
import { TimeCheck } from '../../actions/index';

const QuestionList = ({ question }) => {
  return (
    <QuestionListLayout>
      <QuestionSummary
        votes={question.votes}
        answers={question.answers}
        views={question.views}
        chosen={question.chosenAnswerId}
      />
      <QuestionSummaryContent
        question_id={question.questionId}
        color={question.avatarColor}
        title={question.title}
        content={question.content}
        displayname={question.displayName}
        createdAt={TimeCheck(question.createdAt)}
      />
    </QuestionListLayout>
  );
};

export default QuestionList;

const QuestionListLayout = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--bc-light);
`;
