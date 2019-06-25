const express = require('express');
const router = express.Router();
const downloaderController = require('../controllers/downloader');

router.post('/download', downloaderController.post_download);
module.exports = router;
