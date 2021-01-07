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


// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

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

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


// $.ajax({
//   url: url,
//   type: 'GET',
//   success: (err, data) => cb(null, data),
//   error: (err, data) => cb(err)
// });