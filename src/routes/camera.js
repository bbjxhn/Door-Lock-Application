const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/camera', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'camera.html'));
});

module.exports = router;