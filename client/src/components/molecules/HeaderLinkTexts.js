import React from 'react';
import styled from 'styled-components';
import HeaderLinkText from '../atoms/HeaderLinkText';

const AboutUrl = "https://stackoverflow.co/";

const ForTeamsUrl = "https://stackoverflow.co/teams/";

const LinkWrapper = styled.div`
    display: flex;
`

const HeaderLinkTexts = () => {
    return (
      <LinkWrapper>
        <HeaderLinkText to={{ AboutUrl }}>About</HeaderLinkText>
        <HeaderLinkText>Products</HeaderLinkText>
        <HeaderLinkText to={{ ForTeamsUrl }}>For Teams</HeaderLinkText>
      </LinkWrapper>
    );
};

export default HeaderLinkTexts;