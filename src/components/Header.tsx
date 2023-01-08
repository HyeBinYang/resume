import React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 css={{ fontSize: "40px" }}>🧑🏻‍💻 Robin's Resume</h1>
    </HeaderWrapper>
  );
};

export default Header;
