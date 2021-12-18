export const checkToken = (logoutCallback:any, dispatchCallback:any) => {
    if (localStorage.getItem("token")) {
        let curToken = localStorage.getItem("token");
        let dateNow: Date = new Date();
        let jwt = require("jsonwebtoken");
        let decodedToken = jwt.decode(curToken);
        console.log('exp'+decodedToken.exp);
        console.log('now'+dateNow.getTime()/1000);
        if (decodedToken.exp < dateNow.getTime()/1000) {
            logoutCallback()
        } else {
            dispatchCallback()
        }
      }
}