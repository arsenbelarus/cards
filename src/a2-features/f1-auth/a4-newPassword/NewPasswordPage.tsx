import React from "react";
import {setCorrectEmailAC} from "../../../a1-main/m2-bll/reducers/passwordRestore_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {RouterPathEnum} from "../../../a1-main/m1-ui/routes/routerPathsEnum";


export const NewPasswordPage = () => {

    const statusMessage = useSelector<AppRootStateType, string>(state => state.restorePassword.message)
    const isCorrectEmail = useSelector<AppRootStateType, boolean>(state => state.restorePassword.isCorrectEmail)


    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(setCorrectEmailAC(false))
    }
    return (
        <div>
            <div>{statusMessage}</div>
            <button onClick={logOutHandler}>LogOut</button>
        </div>
    )
}