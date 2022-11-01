import * as React from "react";
import styled from "styled-components";

const MenuLayout = styled.div`
  display: flex;
  margin-right: 20px;
  & a {
    /* 정렬 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 사이즈 */
    width: 60px;
    height: 36px;
    padding: 3px 6px 3px 6px;
    /* 색깔 */
    color: var(--black-500);
    background-color: #ffffff;
    /* border: 1px solid #babfc3;
    border-right: 0; */
    border-top: 1px solid var(--black-300);
    border-bottom: 1px solid var(--black-300);
    border-left: 1px solid var(--black-300);
    border-radius: 0;
    cursor: pointer;
    font-size: 12px;

    /* 첫째 자식의 border-radius */
    &:nth-child(1) {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:nth-child(3) {
      width: 70px;
    }
    &:nth-child(4) {
      width: 85px;
    }
    /* 마지막 자식의 border-radius */
    &:nth-last-child(1) {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-right: 1px solid var(--black-300);
    }
    /* hover시 색 변함.*/
    &:hover {
      color: var(--black-600);
      background-color: var(--black-025);
    }

    /* selected 시 색깔 color: var(--black-700), 백 black 075로 바꾸기 */
  }
`;

const FilterBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 36px;

  border-radius: 3px;
  font-size: 12px;
  color: var(--theme-button-filled-color);
  background-color: var(--theme-button-filled-background-color);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: 1px solid var(--theme-button-filled-border-color); /*투명한 테두리 추가*/
  svg {
    margin-right: 3px;
  }
`;

function QuestionFilter(props) {
  return (
    <>
      <MenuLayout>
        <a href="/questions?tab=Newest" className="newest">
          Newest
        </a>
        <a href="/questions?tab=Active" className="active">
          Active
        </a>
        <a href="/questions?tab=Bountied" className="bountied">
          Bountied
        </a>
        <a href="/questions?tab=Unanswered" className="unanswered">
          Unanswered
        </a>
        <a href="/questions?tab=More" className="more">
          More
        </a>
      </MenuLayout>
      <FilterBox>
        <svg
          width={18}
          height={18}
          aria-hidden="true"
          className="svg-icon iconFilter"
          viewBox="0 0 18 18"
          fill="var(--theme-button-filled-color)"
          {...props}
        >
          <path d="M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z" />
        </svg>
        Filter
      </FilterBox>
    </>
  );
}

export default QuestionFilter;
