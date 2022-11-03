import styled from 'styled-components';
import {
  QuestionDetailsideBox,
  QuestionDetailContentBox,
} from '../atoms/QuestionDetailContainer';
import { QuestionDetailSidebar } from '../molecules/QuestionDetailSidebar';
import { QuestionDetailUserFooter } from '../organism/QuestionDetailUserFooter';
import QuestionViewer from '../atoms/QuestionViewer';

const QuestionDetailBox = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const QuestionDetail = () => {
  return (
    <QuestionDetailBox>
      <QuestionDetailContentBox>
        <QuestionDetailsideBox>
          <QuestionDetailSidebar></QuestionDetailSidebar>
        </QuestionDetailsideBox>
        <QuestionViewer></QuestionViewer>
      </QuestionDetailContentBox>
      <QuestionDetailUserFooter></QuestionDetailUserFooter>
    </QuestionDetailBox>
  );
};
