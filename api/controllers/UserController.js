module.exports = {

  /**
   * `UserController.login()`
   */
  login: function (req, res) {

    // See `api/responses/login.js`
    return res.login({
      email: req.param('email'),
      password: req.param('password'),
      successRedirect: '/',
      invalidRedirect: '/login'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {

    req.session.me = null;

    if (req.wantsJSON) {
      return res.ok('Logeado Correctamente!');
    }

    return res.redirect('/');
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {

    User.signup({
      name: req.param('name'),
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      if (err) return res.negotiate(err);

      req.session.me = user.id;

         if (req.wantsJSON) {
        return res.ok('Ingresaste Correctamente!');
      }

      return res.redirect('/welcome');
    });
  }
};

