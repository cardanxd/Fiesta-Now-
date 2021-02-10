const express = require('express');
const router = express.Router();

router.get('/inscripcion', (req, res) => {
    res.render('links/Inscripcion');
})

module.exports = router;