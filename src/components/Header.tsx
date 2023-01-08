import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HEADER_ICON_SIZE = 32;

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <button
        css={{
          backgroundColor: "skyblue",
          border: "none",
          cursor: "pointer",
        }}
      >
        <MdDarkMode size={HEADER_ICON_SIZE} />
      </button> */}
      <h1 css={{ fontSize: "40px" }}>Robin's Resume</h1>
      <button
        css={{
          padding: "8px 10px",
          backgroundColor: "inherit",
          border: "none",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          cursor: "pointer",
          ":hover": {
            background: "rgba(0,0,0,0.05)",
          },
        }}
      >
        <BsFillSunFill size={HEADER_ICON_SIZE} />
      </button>
    </HeaderWrapper>
  );
};

export default Header;
