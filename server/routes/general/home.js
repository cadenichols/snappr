'use strict';

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    var data = {x:3, y:2, z:5000000};
    reply.view('templates/general/home', data);
  }
};
