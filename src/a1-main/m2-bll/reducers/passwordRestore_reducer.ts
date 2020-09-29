import {Dispatch} from "redux";
import axios from "axios";
import {EmailRestoreType} from "../../../a2-features/f1-auth/a3-restorePassword/RestorePage";


type ActionsType =
    | ReturnType<typeof setCorrectEmailAC>
    | ReturnType<typeof setStatusMessage>
    | ReturnType<typeof loaderAC>

type initialStateType = typeof initialState

const initialState = {
    isCorrectEmail: false,
    message: "",
    isLoading: false,
}

export const passwordRestoreReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'restorePass/SET-CORRECT-EMAIL':
            return {...state, isCorrectEmail: action.value}
        case 'restorePass/SET-MESSAGE':
            return {...state, message: action.message}
        case 'restorePass/SWITCH-LOADER':
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const setCorrectEmailAC = (value: boolean) => ({type: 'restorePass/SET-CORRECT-EMAIL', value} as const)
export const setStatusMessage = (message: string) => ({type: 'restorePass/SET-MESSAGE', message} as const)
export const loaderAC = (isLoading: boolean) => ({type: 'restorePass/SWITCH-LOADER', isLoading} as const)


export const restorePassTC = (emailFromForm: EmailRestoreType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(loaderAC(true))
    const data = {
        email: emailFromForm.email,
        from: "test-front-admin Yarotskiy Andrii <andriiyarotskiy@gmail.com>",
        message: `<div style="background-color: lime; padding: 15px">
            password recovery link: <a href='http://localhost:3000/cards#/new_password/$token$'>
            click to change password</a></div>` // хтмп-письмо, вместо $token$ бэк вставит токен
    }

    try {
        let res = await axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, data, {withCredentials: true});
        if (res.data.success) {
            dispatch(setCorrectEmailAC(true))
            dispatch(setStatusMessage(res.data.info))
            dispatch(loaderAC(false))
        }
        dispatch(setCorrectEmailAC(false)) // update url
    } catch (error) {
        dispatch(setStatusMessage(error.response.data.error))
    }
}

