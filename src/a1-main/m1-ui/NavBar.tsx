import React from "react";
import {NavLink} from "react-router-dom";
import {RouterPathEnum} from "./routes/routerPathsEnum";
import {NavLinkCommon} from "./common/navLink/NavLinkCommon";


export const NavBar = () => {
  return (
    <div>
      <NavLinkCommon to={RouterPathEnum.LOGIN} linkText={'Log In'}/>
      <NavLinkCommon to={RouterPathEnum.REGISTRATION} linkText={'Sign Up'}/>
      <NavLinkCommon to={RouterPathEnum.RESTORE_PASSWORD} linkText={'Forgot Password'}/>
      <NavLinkCommon to={RouterPathEnum.NEW_PASSWORD} linkText={'New Password'}/>
      <NavLinkCommon to={RouterPathEnum.PROFILE} linkText={'Profile'}/>
    </div>
  )
}