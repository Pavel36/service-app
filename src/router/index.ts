import React from "react";
import AddClaimPage from "../pages/AddClaimPage";
import ClaimsPage from "../pages/ClaimsPage";
import EditClaimPage from "../pages/EditClaimPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  params?: Object;
}

export enum RouteNames {
  REGISTRATION ="/registration",
  LOGIN = "/login",
  ALL_CLAIMS = "/claims",
  ADD_CLAIM = "/claims/add",
  EDIT_CLAIM = "/claims/:claimId",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.REGISTRATION, component: RegistrationPage },
  { path: RouteNames.LOGIN, component: LoginPage},
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.ALL_CLAIMS, component: ClaimsPage },
  { path: RouteNames.ADD_CLAIM, component: AddClaimPage },
  { path: RouteNames.EDIT_CLAIM, component: EditClaimPage },
];
