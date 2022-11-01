/* Functions to check if user has authentication to schedule appointments
   checkAuthentication function checks if user is authenticated, if not redirect user to sign in
   giveAuthentication function gives authentication once user is signed in
*/

module.exports = {                                        //Checks if the user is authorized to sign in, if not direct them to sign in page
  checkAuthentication: function (req, res, next) {
    if (req.user) {
      return next();
    }
    req.flash("error_message", "User must be logged in");
    res.redirect("/login");
  },
  giveAuthentication: function (req, res, next) {         //once the sign up is completed, user is authenticated this functions lets user in as authorized user
    if (!req.user) {
      return next();
    }
    res.redircect("/home_page");
  },
};
