/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  var options = {encoding: 'string'};
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data.split('\n')[0]);
    }
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request(url, function (err, response) {
    if (err) {
      cb(err);
    } else {
      cb(null, response.statusCode);
    }
  });
};

var readFileAndMakeItFunnyAsync = (filePath) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(filePath, 'utf8', function(err, file) {
      if (err) {
        reject(err);
      } else {
        var funnyFile = file.split('\n').map(function(line) {
          return line + ' lol';
        }).join('\n');
        resolve(funnyFile);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile,
  readFileAndMakeItFunnyAsync: readFileAndMakeItFunnyAsync
};
