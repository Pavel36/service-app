import { AppDispatch } from "./../../index";
import {
  AuthActionEnum,
  SetAuthAction,
  SetUserAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";
import { IUser } from "./../../../models/IUser";
import AuthService from "../../../api/AuthService";
export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  register: (data: any) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    AuthService.register(data)
      .then((resp) => {
        dispatch(AuthActionCreators.setIsLoading(false));
      })
      .catch((e) => {
        dispatch(AuthActionCreators.setError("Registration error"));
        dispatch(AuthActionCreators.setIsLoading(false));
      });
  },
  login: (data: any) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    AuthService.login(data)
      .then((resp) => {
        let user: IUser = {
          email: resp.data.email,
          role: resp.data.role.name,
          role_slug: resp.data.role.slug,
          fullName: resp.data.fullName,
        };
        localStorage.setItem("auth", "true");
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role.slug)

        dispatch(AuthActionCreators.setUser(user));
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setIsLoading(false));
      })
      .catch((e) => {
        dispatch(AuthActionCreators.setError("Wrong e-mail or password"));
        dispatch(AuthActionCreators.setIsLoading(false));
      });
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.clear();
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
