import React from "react";
import styled from "styled-components";

const MenuLayout = styled.ul`
  display: flex;
  & a {
    /* 정렬 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 사이즈 */
    width: 60px;
    height: 35px;
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
    text-decoration: none; /* a 태그의 밑줄 제거 */
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

const MenuTap = () => {
  // 상태값 selected, isSelected에 따라 background-color 바뀌도록 추가하기
  return (
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
  );
};

export default MenuTap;