import styled from 'styled-components';
import {
  QuestionDetailsideBox,
  QuestionDetailContentBox,
  QuestionDetailSubsideBox,
} from '../atoms/QuestionDetailContainer';
import { QuestionDetailSidebar } from '../molecules/QuestionDetailSidebar';
import { QuestionDetailUserFooter } from '../organism/QuestionDetailUserFooter';
import QuestionViewer from '../atoms/QuestionViewer';

const QuestionDetailBox = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  flex-direction: column;
  border: solid 1px green;
`;

export const QuestionDetail = () => {
  return (
    <QuestionDetailBox>
      <QuestionDetailContentBox>
        <QuestionDetailsideBox>
          <QuestionDetailSubsideBox>
            <QuestionDetailSidebar></QuestionDetailSidebar>
          </QuestionDetailSubsideBox>
        </QuestionDetailsideBox>
        <QuestionViewer></QuestionViewer>
      </QuestionDetailContentBox>
      <QuestionDetailUserFooter></QuestionDetailUserFooter>
    </QuestionDetailBox>
  );
};
