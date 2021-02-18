 
const express = require("express"); 
const router = express.Router();


const PanelAcademi = require('../../../lib/PanelAcademy');


router.get('/PanelAcademia', async (req, res) => {

    const panel = await PanelAcademi.GetClass(req.session.userId); //
    const horarios = await PanelAcademi.GetHorario(panel);
    // console.log(horarios)
    res.render('links/AcademiaPanel', { horarios: horarios });
})



module.exports = router;
