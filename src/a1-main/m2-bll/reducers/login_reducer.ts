import {Dispatch} from "redux";
import {AppRootStateType} from "../store";

type ActionsType =
  | ReturnType<typeof fakeAC>

const initialState = {}

export const fakeReducer = (state = initialState, action: ActionsType)  => {
  switch (action.type) {
    case 'FAKE':
      return {...state}
    default:
      return state;
  }
}

export const fakeAC = () => ({type: 'FAKE'} as const)

