'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    var sorting = -1;
    if(request.query.order === 'Asc') {
      sorting = 1;
    }else {
      sorting = -1;
    }
    Album.find({}).sort({date:sorting}).exec(function(err, albums) {
      reply.view('templates/albums/index', {path: '/albums', albums:albums});
    });
  }
};