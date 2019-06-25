const fs = require('fs');
const request = require('request');

const imgDownloader = async (uri, filename) => {
  return new Promise((resolve, reject) => {
    request.head(uri, function (err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename))
        .on('close', () => {
          return resolve('work done!');
        })
        .on('error', (err) => reject(err));
    });

  });
};

module.exports = imgDownloader;