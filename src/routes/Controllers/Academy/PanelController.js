 const express = require("express");
 const router = express.Router();


 const PanelAcademi = require('../../../lib/PanelAcademy');
 const Inscripcion = require('./../../../lib/Repositories/InscripcionRepository');

 router.get('/PanelAcademia', async(req, res) => {

     let total = 0; //contador Suscripciones
     const panel = await PanelAcademi.GetClass(req.session.userId); //
     const horarios = await PanelAcademi.GetHorario(panel);
     horarios.forEach(function(a) { total += a.allInscripcions; });
     const users = total;
     const suscripsion = total;

     const infoTargets = {
         users: users == undefined ? 0 : users,
         suscriptions: suscripsion == undefined ? 0 : suscripsion,
         classes: horarios.length
     }

     console.log(infoTargets)
     res.render('links/AcademiaPanel', { horarios: horarios, infoTargets: infoTargets });
 })



 module.exports = router;