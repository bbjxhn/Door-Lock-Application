const express = require('express');
const router = express.Router();


router.get('/camera', (req, res) => {
	res.render('camera', {
		title: 'Camera'
	});
});

module.exports = router;