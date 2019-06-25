const net = require('net');
const imgDownloader = require('./blogic/imageDownloader');

var server = net.createServer(function (socket) {
    console.log('client connected');
    socket.on('end', () => {
        console.log('client disconnected');
    });
    socket.on('data', function (data) {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        const url = data.toString();
        const urlArr = url.split('/');
        const name = urlArr[urlArr.length-1];
        imgDownloader(url, `public/${name}`, () => console.log('done!'))
            .then(res => {
                console.log('work done!');
            })
            .catch(err => {
                console.log('error(');
            });
    });

    socket.pipe(socket);
    socket.on('error', err => console.log(err));
});


server.listen(1337, '127.0.0.1');