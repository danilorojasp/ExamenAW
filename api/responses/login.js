/**
 * res.login([inputs])
 *
 * @param {String} inputs.username
 * @param {String} inputs.password
 *
 * @description :: Log the requesting user in using a passport strategy
 * @help        :: See http://links.sailsjs.org/docs/responses
 */

module.exports = function login(inputs) {
  inputs = inputs || {};

  var req = this.req;
  var res = this.res;

  // Look up the user
  User.attemptLogin({
    email: inputs.email,
    password: inputs.password
  }, function (err, user) {
    if (err) return res.negotiate(err);
    if (!user) {

      if (req.wantsJSON || !inputs.invalidRedirect) {
        return res.badRequest('username/password combinacion inválida.');
      }
      return res.redirect(inputs.invalidRedirect);
    }

    req.session.me = user.id;

    if (req.wantsJSON || !inputs.successRedirect) {
      return res.ok();
    }

    return res.redirect(inputs.successRedirect);
  });

};

