import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../m3-dal/login-api";
import {setProfileAfterLoginAC, setProfileAfterLogOutAC} from "./profile_reducer";

type ActionsType =
  | ReturnType<typeof setIsLoggedInAC>

const initialState = {
  isLoggedIn: false,
  appError: ""
}

export const loginReducer = (state: initialStateType = initialState, action: ActionsType)  => {
  switch (action.type) {
    case 'SET-IS-LOGGED-IN':
      return {...state, isLoggedIn: action.isLoggedIn}
    default:
      return state;
  }
}

export const setIsLoggedInAC = (isLoggedIn: boolean) => ({type: 'SET-IS-LOGGED-IN', isLoggedIn} as const)

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
  //dispatch(setAppStatusAC('loading'))
  authAPI.login(data)
    .then(res => {
      if (res.status === 200) {
        dispatch(setIsLoggedInAC(true))
        dispatch(setProfileAfterLoginAC(res.data))
      } else {
        //dispatch(setAppErrorAC(res.data.messages[0]))
      }
    })
    .catch((err) => {
      const error = err.response ? err.response.data.error : err.message
      alert(error)
    })
    .finally(/*() => {
      dispatch(setAppStatusAC('idle'))
    }*/)
}

export const logOutTC = () => (dispatch: Dispatch) => {
  //dispatch(setAppStatusAC('loading'))
  authAPI.logOut()
    .then(res => {
      if (res.status === 200) {
        const setProfileDataToDefault = () => {
          return {
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
        }
        dispatch(setIsLoggedInAC(false))
        dispatch(setProfileAfterLogOutAC(setProfileDataToDefault()))
      } else {
        //dispatch(setAppErrorAC(res.data.messages[0]))
      }
    })
    .catch(/*(error) => {
      dispatch(setAppErrorAC(error.message))
    }*/)
    .finally(/*() => {
      dispatch(setAppStatusAC('idle'))
    }*/)
}

export const getMeTC = () => (dispatch: Dispatch) => {
  //dispatch(setAppStatusAC('loading'))
  authAPI.authMe()
    .then(res => {
      if (res.status === 200) {
        dispatch(setIsLoggedInAC(true))
        dispatch(setProfileAfterLoginAC(res.data))
      } else {
        //dispatch(setAppErrorAC(res.data.messages[0]))
      }
    })
    .catch(/*(error) => {
      dispatch(setAppErrorAC(error.message))
    }*/)
    .finally(/*() => {
      dispatch(setAppStatusAC('idle'))
    }*/)
}



//types

export type initialStateType = {
  isLoggedIn: boolean,
  appError: string
}

