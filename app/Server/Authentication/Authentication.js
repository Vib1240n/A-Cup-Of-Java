/* Functions to check if user has authentication to schedule appointments
   checkAuthentication function checks if user is authenticated, if not redirect user to sign in
   giveAuthentication function gives authentication once user is signed in
*/



module.exports = {
  checkAuthentication: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.statusText = "Authenticated";
      return res.redirect("/MyProfile");
    } else {
      res.redirect("/login");
    }
  },
  giveAuthentication: function (req, res, next) {
    if (!req.user) {
      return next();
    }
    res.redircect("/home");
  },
};
