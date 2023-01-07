import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
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
