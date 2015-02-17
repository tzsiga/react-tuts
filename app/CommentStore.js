var fs = require('fs');

var inputFile = './public/comments.json';
var comments = [];

var load = function (callback) {
  fs.readFile(inputFile, {'encoding': 'UTF-8'}, function (err, data) {
    if (err) throw err;
    comments = JSON.parse(data);
    callback(comments);
  });
};

var save = function (comment, callback) {
  comments.push(comment);
  fs.writeFile(inputFile, JSON.stringify(comments), function (err) {
    if (err) throw err;
    callback();
  });
};

module.exports.load = load;
module.exports.save = save;