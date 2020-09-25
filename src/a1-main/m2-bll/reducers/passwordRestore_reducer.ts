import {Dispatch} from "redux";
import axios from "axios";
import {DataRestoreType} from "../../../a2-features/f1-auth/a3-restorePassword/RestorePage";


type ActionsType =
    | ReturnType<typeof setCorrectEmailAC>
    | ReturnType<typeof setStatusMessage>

type initialStateType = typeof initialState

const initialState = {
    isCorrectEmail: false,
    message: "",
}

export const passwordRestoreReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'restorePass/SET-CORRECT-EMAIL':
            return {...state, isCorrectEmail: action.value}
        case 'restorePass/SET-MESSAGE':
            return {...state, message: action.message}
        default:
            return state;
    }
}

export const setCorrectEmailAC = (value: boolean) => ({type: 'restorePass/SET-CORRECT-EMAIL', value} as const)
export const setStatusMessage = (message: string) => ({type: 'restorePass/SET-MESSAGE', message} as const)

//THUNK
// nya-admin@nya.nya
// arsenbelarus@gmail.com
export const restorePassTC = (data: DataRestoreType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusMessage('loading...'))
    try {
        let res = await axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, data, {withCredentials: true});
        if (res.data.success) {
            dispatch(setCorrectEmailAC(true))
            dispatch(setStatusMessage(res.data.info))
        }
        dispatch(setCorrectEmailAC(false)) // update url
    } catch (error) {
        dispatch(setStatusMessage(error.response.data.error))
    }
}

