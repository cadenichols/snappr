'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      album.photos.splice(request.params.photoIndex, 1);
      album.save(function() {
        reply.redirect('/albums/' + request.params.albumId);
      });
    });
  }
};
