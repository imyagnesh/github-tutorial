import React from "react";
import styled from "styled-components";
// import styles from "./style";
// import "./header.scss";

const Head = styled.header`
  display: flex;
  justify-content: center;
  &:hover {
    background-color: yellow;
  }
`;

const H1 = styled.h1`
  font-size: 24px;
  color: ${(props) => props.color || "blue"};
  margin: 0;
  padding: 0;
`;  

const Header = ({ title }) => {
  return (
    <Head>
      <H1>{title}</H1>
    </Head>
  );
};

export default Header;
