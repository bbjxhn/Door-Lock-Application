const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/reset-keypad', (req, res) => {
	res.render('reset-keypad', {
		title: 'Reset Keypad Password'
	});
});

module.exports = router;