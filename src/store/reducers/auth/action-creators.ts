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
  login: (data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      AuthService.login(data).then((resp) => {
        if (!resp.data.message) {
          let user: IUser = {
            email: resp.data.email,
            token: resp.data.token,
            role: resp.data.role.name,
            role_slug: resp.data.role.slug,
            fullName: resp.data.fullName,
          };
          localStorage.setItem("auth", "true");
          localStorage.setItem("token", resp.data.token);
          console.log(localStorage.getItem("token"));

          dispatch(AuthActionCreators.setUser(user));
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setIsLoading(false));
        } else {
          dispatch(AuthActionCreators.setError(resp.data.message));
        }
      });
    } catch (e) {
      dispatch(AuthActionCreators.setError("You must Log In"));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
