import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {LoginResponseType} from "../../../a1-main/m3-dal/login-api";
import {Button} from "@material-ui/core";
import {getMeTC, logOutTC} from "../../../a1-main/m2-bll/reducers/login_reducer";
import {Redirect} from "react-router-dom";
import {RouterPathEnum} from "../../../a1-main/m1-ui/routes/routerPathsEnum";


export const ProfilePage = () => {
  const profileData = useSelector<AppRootStateType, LoginResponseType>(state => state.profile)
  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMeTC())
  }, [isLoggedIn])

  const onLogOut = () => {
    dispatch(logOutTC())
  }

  if (!isLoggedIn) {
    return <Redirect to={RouterPathEnum.LOGIN}/>
  }

  return (
    <div>
      <h1>Profile page</h1>
      <Button onClick={onLogOut}> Log Out </Button>
      <div> {profileData.name} </div>
      <div> {profileData.email} </div>
      <div><img src={profileData.avatar} alt=""/> {} </div>
    </div>
  )
}