import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRouter,
} from "./SideBarElements";

const index = ({isOpen,toggle}) => {
  return (
    <SideBarContainer isOpen ={isOpen} onClick ={toggle}>
      <Icon onClick ={toggle} >
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick ={toggle}>About</SideBarLink>
          <SideBarLink to="discover" onClick ={toggle}>Discover</SideBarLink>
          <SideBarLink to="servies" onClick ={toggle}>Services</SideBarLink>
          <SideBarLink to="signup" onClick ={toggle}>Sign up</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRouter to="/signin">Sign In</SideBarRouter>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default index;
