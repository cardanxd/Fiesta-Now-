const express = require('express');
const router = express.Router();

global.apiConnection = "http://getdancenow.somee.com";


router.get('/', (req, res) => {
    res.render("links/index");
})

module.exports = router;