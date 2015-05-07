'use strict'
var http = require('http');
var url = require('url');
var qs = require('querystring');

class MiniService {

  constructor(){
    this.routes = []
  }

  route(urlpath,respondWith){
    this.routes.push({urlpath,respondWith})
  }

  serve(port){
    http.createServer(function (req, res) {
      
      var location = url.parse(req.url,true).pathname
      var body = ''
      var params
      
      req.on('data', function (chunk) {
        body += chunk;
        if (body.length > 1e6) req.connection.destroy();
      });

      req.on('end', function () {
        var postvars = qs.parse(body)
        var url_parts = url.parse(req.url, true);
        var getvars = url_parts.query;
        
        params = {post: postvars, get: getvars}

        res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});

        for(var route of this.routes){

          if(`/${route.urlpath}` == location) {
            res.end(JSON.stringify(route.respondWith(params)))
          }

        }

      }.bind(this));
      
    }.bind(this)).listen(port);
  }

}
module.exports = MiniService