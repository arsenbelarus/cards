import {Dispatch} from "redux";
import axios from 'axios'

type ActionsType = ReturnType<typeof setMessageAC>

const initialState = {
    message: ''
}

export const newPasswordReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "newPasswordReducer/SET-PASSWORD": {
            return {...state, message: action.message}
        }
        default:
            return state;
    }
}

const setMessageAC = (message: string) => {
    return {type: "newPasswordReducer/SET-PASSWORD", message}
}

export const recoverPasswordTC = (data: any) => async (dispatch: Dispatch) => {
    try {
        const res = await axios.post('https://neko-back.herokuapp.com/2.0/auth/set-new-password', data, {withCredentials: true})
        dispatch(setMessageAC(res.data.info))
    } catch (e) {
        dispatch(setMessageAC(e.response.data.error))
    } finally {

    }
}

