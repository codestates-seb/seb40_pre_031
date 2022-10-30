import React from 'react';
import styled from "styled-components";
import { SearchInputIcon } from "../atoms/SvgComponents";

const SearchForm = styled.form`
  width: 650px;
  display: flex;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  margin: 10px;
  border: solid 1px #ddd;
  border-radius: 3px;
  :focus-within {
    border-color: #39739d;
    outline: solid 2px rgba(87, 159, 251, 0.3);
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding: 3px;
  }

  input {
    font-size: l4px;
    width: 100%;
    flex-grow: 2;
    height: 30px;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

const HeaderSearch = () => {
    return (
      <SearchForm>
        <div>
          <SearchInputIcon style={{ backgroundColor: "#fffff" }} />
          <input type="text" placeholder="Search..." />
        </div>
      </SearchForm>
    );
};

export default HeaderSearch;