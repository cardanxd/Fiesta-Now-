const express = require('express');
const router = express.Router();

const Academy = require('../../lib/Repositories/Academy/AcademyRepository.js');

router.get('/Map', async (req, res) => {

    const Academies = await Academy.Get();
    console.log(Academies);
    res.render('links/Map', {Academies:Academies});
})

module.exports = router;