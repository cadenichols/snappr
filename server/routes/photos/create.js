'use strict';

//photos   add.js

var Album = require('../../models/album');

module.exports = {
  payload:{
    maxBytes: 16777216, // 2^24 ; 16MB
    output:'stream',
    parse: true,
    timeout: 60000
  },
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      var photo = [].concat(request.payload.photo);
      delete request.payload.photo;
      album.upload(photo, function() {
        album.save(function() {
          reply.redirect('/albums/' + request.params.albumId);
        });
      });
    });
  }
};
