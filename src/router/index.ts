import React from "react";
import AddClaimPage from "../pages/user/AddClaimPage";
import ClaimsPage from "../pages/user/ClaimsPage";
import EditClaimPage from "../pages/user/EditClaimPage";
import LoginPage from "../pages/public/LoginPage";
import RegistrationPage from "../pages/public/RegistrationPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  params?: Object;
}

export enum PublicRouteNames {
  REGISTRATION ="/registration",
  LOGIN = "/login",
}

export enum UserRouteNames {
  ALL_CLAIMS = "/claims",
  ADD_CLAIM = "/claims/add",
  EDIT_CLAIM = "/claims/:claimId",
}

export enum AdminRouteNames {
  ALL_CLAIMS = "/claims",
  ADD_CLAIM = "/claims/add",
  EDIT_CLAIM = "/claims/:claimId",
  ALL_USERS = "/users",
  ADD_USER = "/users/add",
  EDIT_USER = "/users/:userId"
}


export const publicRoutes: IRoute[] = [
  { path: PublicRouteNames.REGISTRATION, component: RegistrationPage },
  { path: PublicRouteNames.LOGIN, component: LoginPage},
];

export const userRoutes: IRoute[] = [
  { path: UserRouteNames.ALL_CLAIMS, component: ClaimsPage },
  { path: UserRouteNames.ADD_CLAIM, component: AddClaimPage },
  { path: UserRouteNames.EDIT_CLAIM, component: EditClaimPage },
];

export const adminRoutes: IRoute[] = [
  { path: UserRouteNames.ALL_CLAIMS, component: ClaimsPage },
  { path: UserRouteNames.ADD_CLAIM, component: AddClaimPage },
  { path: UserRouteNames.EDIT_CLAIM, component: EditClaimPage },
  { path: AdminRouteNames.ALL_USERS, component: ClaimsPage },
  { path: AdminRouteNames.ADD_USER, component: AddClaimPage },
  { path: AdminRouteNames.EDIT_USER, component: EditClaimPage },
];
