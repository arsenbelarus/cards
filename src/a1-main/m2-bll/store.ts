import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from "./reducers/login_reducer";
import {signupReducer} from "./reducers/signup_reducer";
import {passwordRestoreReducer} from "./reducers/passwordRestore_reducer";
import {newPasswordReducer} from "./reducers/newPassword_reducer";
import {profileReducer} from "./reducers/profile_reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registration: signupReducer,
  restorePassword: passwordRestoreReducer,
  newPassword: newPasswordReducer,
  profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
