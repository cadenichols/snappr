'use strict';

// photos  show.js

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      var photoIndex = request.params.photoIndex;
      reply.view('templates/photos/show', {path: '/albums', album:album, photoIndex:photoIndex});
    });
  }
};
