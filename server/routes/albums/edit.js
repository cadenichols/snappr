'use strict';

var Album = require('../../models/album');

Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + '-' + (mm[1]?mm:'0'+mm[0]) + '-' + (dd[1]?dd:'0'+dd[0]); // padding
};

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      var dateStr = album.date.yyyymmdd();
      reply.view('templates/albums/edit', {path:'/albums', album:album, dateStr:dateStr});
    });
  }
};
