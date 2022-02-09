import { IUser } from "./../../../models/IUser";
export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
  keepMeLogged: boolean;
}

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_KEEP_ME_LOGGED = "SET_KEEP_ME_LOGGED",
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface SetKeepMeLoggedAction {
  type: AuthActionEnum.SET_KEEP_ME_LOGGED;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export type AuthAction =
  | SetAuthAction
  | SetErrorAction
  | SetUserAction
  | SetIsLoadingAction
  | SetKeepMeLoggedAction;
