import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {RouterPathEnum} from "./routerPathsEnum";
import {LoginPage} from "../../../a2-features/f1-auth/a1-login/LoginPage";
import {RegistrationPage} from "../../../a2-features/f1-auth/a2-registration/RegistrationPage";
import {RestorePage} from "../../../a2-features/f1-auth/a3-restorePassword/RestorePage";
import {NewPasswordPage} from "../../../a2-features/f1-auth/a4-newPassword/NewPasswordPage";
import {ProfilePage} from "../../../a2-features/f1-auth/a5-profile/ProfilePage";
import {Error404Page} from "../../../a2-features/f0-error404/Error404Page";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={RouterPathEnum.LOGIN}/>}/>
      <Route exact path={RouterPathEnum.LOGIN} render={() => <LoginPage />}/>
      <Route exact path={RouterPathEnum.NEW_PASSWORD} render={() => <NewPasswordPage />}/>
      <Route exact path={RouterPathEnum.REGISTRATION} render={() => <RegistrationPage />}/>
      <Route exact path={RouterPathEnum.RESTORE_PASSWORD} render={() => <RestorePage />}/>
      <Route exact path={RouterPathEnum.PROFILE} render={() => <ProfilePage />}/>
      <Route path={'*'} render={() => <Error404Page />}/>
    </Switch>
  )
}

