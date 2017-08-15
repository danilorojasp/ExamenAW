module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },

  signup: function (inputs, cb) {
    User.create({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    })
    .exec(cb);
  },




  attemptLogin: function (inputs, cb) {
    User.findOne({
      email: inputs.email,
      password: inputs.password
    })
    .exec(cb);
  }
};