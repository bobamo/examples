/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , User = require('./model/user')
    , Group = require('./model/group')
    , Employee = require('./model/employee')
    , bobamo = require('bobamo')
    ;

var app = module.exports = express();

// Configuration

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret:'super duper secret'}))
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.use(bobamo.bobamo({uri:'mongodb://localhost/bobamo_development'}));

    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));

});

app.listen(3001);

console.log('Express server listening on port 3001');
