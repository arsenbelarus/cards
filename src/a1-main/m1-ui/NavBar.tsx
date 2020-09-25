import React from "react";
import {RouterPathEnum} from "./routes/routerPathsEnum";
import {NavLinkCommon} from "./common/navLink/NavLinkCommon";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../m2-bll/store";


export const NavBar = () => {
  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
  return (
    <div>
      {!isLoggedIn && <NavLinkCommon to={RouterPathEnum.LOGIN} linkText={'Log In'}/>}
      <NavLinkCommon to={RouterPathEnum.REGISTRATION} linkText={'Sign Up'}/>
      <NavLinkCommon to={RouterPathEnum.RESTORE_PASSWORD} linkText={'Forgot Password'}/>
      <NavLinkCommon to={RouterPathEnum.NEW_PASSWORD} linkText={'New Password'}/>
      <NavLinkCommon to={RouterPathEnum.PROFILE} linkText={'Profile'}/>
    </div>
  )
}