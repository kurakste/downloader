const express = require('express');
const app = express();
const  cors = require('cors');
const dowloaderRouter = require('./api/routes/dowloader');
const bodyParser = require('body-parser');

app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/file', dowloaderRouter);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});


// Error handlers
app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
        error: { message: error.message }
    });
})

module.exports = app;