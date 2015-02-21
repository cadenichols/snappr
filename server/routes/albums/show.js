'use strict';

// albums show.js

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      var photos = album.photos;
      reply.view('templates/albums/show', {path: '/albums', album:album, photos:photos});
    });
  }
};
