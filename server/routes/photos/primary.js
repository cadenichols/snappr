'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      album.primary = request.params.photoIndex;
      album.save(function() {
        reply.redirect('/albums/' + request.params.albumId);
      });
    });
  }
};
