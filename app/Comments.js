var express = require('express');
var router = express.Router();

var store = require('./CommentStore.js');

module.exports = function () {
  router.get('/', function (req, res) {
    store.load(function (comments) {
      res.send(comments);
    });
  });

  router.post('/save', function (req, res) {
    store.save(req.body, function () {
      res.set('Content-Type', 'text/plain');
      res.send('');
    });
  });

  return router;
};