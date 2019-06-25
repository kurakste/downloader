const fs = require('fs');
const request = require('request');

const imgDownloader = async (uri, filename, callback) => {
  return new Promise((resolve, reject) => {
    request.head(uri, function (err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename))
        .on('close', () => {
          callback();
          return resolve();
        })
        .on('error', (err) => reject(err));
    });

  });
};

module.exports = imgDownloader;