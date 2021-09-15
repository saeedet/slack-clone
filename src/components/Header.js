import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar src="" />
          <AccessTimeIcon />
        </HeaderLeft>
        <HeaderCenter>
          <SearchIcon />
          <SearchInput placeholder="Search" />
        </HeaderCenter>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  color: white;
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderCenter = styled.div`
  flex: 0.4;
  background-color: #421f44;
  border-radius: 6px;
  display: flex;
  color: gray;
  padding: 0 50px;
  border: 1px gray solid;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  min-width: 30vw;
  color: white;
  :focus {
    outline: none;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  color: white;
  margin-right: 20px;
`;
