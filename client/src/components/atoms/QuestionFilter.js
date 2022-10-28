import * as React from "react";
import styled from "styled-components";

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