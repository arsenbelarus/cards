import {Dispatch} from "redux";
import {AppRootStateType} from "../store";
import {LoginResponseType} from "../../m3-dal/login-api";

type ActionsType =
  | ReturnType<typeof setProfileAfterLoginAC>
  | ReturnType<typeof setProfileAfterLogOutAC>

const initialState: LoginResponseType = {
  avatar: "",
  email: null,
  created: null,
  isAdmin: null,
  name: null,
  publicCardPacksCount: null,
  rememberMe: null,
  token: "",
  tokenDeathTime: null,
  updated: null,
  verified: null
}

export const profileReducer = (state: typeof initialState = initialState, action: ActionsType)  => {
  switch (action.type) {
    case 'SET-PROFILE':
      return {...state, ...action.payload}
    case "DELETE-PROFILE":
      return {...state, ...action.payload}
    default:
      return state;
  }
}

export const setProfileAfterLoginAC = (payload: LoginResponseType) => ({type: 'SET-PROFILE', payload} as const)
export const setProfileAfterLogOutAC = (payload: LoginResponseType) => ({type: 'DELETE-PROFILE', payload} as const)

