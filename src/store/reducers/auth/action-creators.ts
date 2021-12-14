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
      const userCreds = AuthService.login(data).then((resp) => {
        if (!resp.data.message) {
            localStorage.setItem('auth','true');
            localStorage.setItem('email', resp.data.email)
            localStorage.setItem('fullname', resp.data.fullName)
            localStorage.setItem('role', resp.data.role.name)
            //TODO: DELETE NEXT LINE
            localStorage.setItem('token', resp.data.token)
            /////
          dispatch(AuthActionCreators.setIsAuth(true));

        } else {
            dispatch(AuthActionCreators.setError(resp.data.message))
        }
      });
    } catch (e) {
      dispatch(AuthActionCreators.setError("You must Log In"));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {},
};
