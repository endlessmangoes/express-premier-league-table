'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/test', function(req, res) {
        res.render('pages/test');
    });
};
