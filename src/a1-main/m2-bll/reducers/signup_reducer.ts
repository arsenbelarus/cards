import {Dispatch} from "redux";
import {projectRegister, registrationType} from "../../m3-dal/apiCorrect";

type ActionsType =
  | ReturnType<typeof registrationAC>
  | ReturnType<typeof setAppStatusAC>

const initialState:initialStateType = {
  registrationResponse:false,
    status: 'idle'

}

export const signupReducer = (state = initialState, action: ActionsType)  => {
  switch (action.type) {
    case "login/REGISTRATION":
      return {...state,registrationResponse:action.value}
      case "APP/SET-STATUS":
          return {...state, status:action.status}
      default:
      return state;
  }
}

const registrationAC = (value:boolean)=>({type:'login/REGISTRATION',value}as const)
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}


export const registrationTC = (data: registrationType) =>
    (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))

  projectRegister.registration(data)
      .then((res)=>{
if (res.status === 201){
    dispatch(registrationAC(true))

} else {
    dispatch(registrationAC(false))
    dispatch(setAppStatusAC('failed'))
}
      })
      .catch((e)=>{
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
          dispatch(setAppStatusAC('failed'))
      })

}


type initialStateType = {
  registrationResponse:boolean
    status:RequestStatusType
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

