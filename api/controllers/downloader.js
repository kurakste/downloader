const imgDownloader = require('../../blogic/imageDownloader');

exports.post_download = (req, res, next) => {
    const arr =  req.body.url.split('/');
    const filename = 'public/' + arr[arr.length-1];
    imgDownloader(req.body.url, filename, () => console.log('Download file:', req.body.name))
        .then(() => {
            res.status(200);
            res.json({ 
                msg: 'Work done!',
                err: false
            });
        })
        .catch((err) => {
            res.status(200);
            res.json({
                msg: err,
                err: true,
            });
        })
}