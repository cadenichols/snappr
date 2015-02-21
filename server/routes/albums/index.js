'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.find(function(err, albums) {
      reply.view('templates/albums/index', {path: '/albums', albums:albums});
    });
  }
};
