/**
 * Created by shc@lierda.com on 2016/6/27.
 */


var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    ,ejs = require('ejs')
    ,compression = require('compression')
    , path = require('path');
exports.init = function(port,version){
    var app = express();
    app.configure(function(){
        app.use(compression());
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({ secret: "keyboard cat" }));
    });
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }
    app.set('port', process.env.PORT || port);
    app.set('views', __dirname + '/public');
    app.engine('.html', ejs.__express);
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    routes.action(app);
    http.createServer(app).listen(app.get('port'), function(){
        console.log('web start port : ' + port + '  version : '+version);
    });

};
