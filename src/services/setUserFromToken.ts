import UserService from "../api/UserService";
export const setUserFromToken = (setUserCallback: any) => {
  if (localStorage.getItem("token")) {
    const curToken = localStorage.getItem("token");
    let jwt = require("jsonwebtoken");
    let decodedToken = jwt.decode(curToken);
    UserService.getUser(decodedToken.id).then((resp) => {
        console.log(resp);
        
      setUserCallback(
        resp.data.email,
        curToken,
        resp.data.role.name,
        resp.data.role.slug,
        resp.data.fullName
      );
    });
  }
};
