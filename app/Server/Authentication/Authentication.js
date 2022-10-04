/* Functions to check if user has authentication to schedule appointments
   checkAuthentication function checks if user is authenticated, if not redirect user to sign in
   giveAuthentication function gives authentication once user is signed in
*/

module.exports = {
  checkAuthentication: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_message", "User must be logged in");
    res.redirect("/login");
  },
  giveAuthentication: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redircect("/home_page");
  },
};
