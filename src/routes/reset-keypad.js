const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/reset-keypad', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'reset-keypad.html'));
});

module.exports = router;