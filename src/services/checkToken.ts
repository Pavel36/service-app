import { IUser } from "./../models/IUser";
export const checkToken = (
  logoutCallback: any,
  dispatchIsAuth: any,
) => {
  if (localStorage.getItem("token")) {
    const curToken = localStorage.getItem("token");
    let dateNow: Date = new Date();
    let jwt = require("jsonwebtoken");
    let decodedToken = jwt.decode(curToken);
    if (decodedToken.exp < dateNow.getTime() / 1000) {
      logoutCallback();
    } else {
      dispatchIsAuth(true);
    }
  }
};
