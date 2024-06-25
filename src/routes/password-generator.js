const express = require('express');
const router = express.Router();

router.get('/password-generator', (req, res) => {
	res.render('password-generator', {
		title: 'Password Generator'
	});
});

module.exports = router;