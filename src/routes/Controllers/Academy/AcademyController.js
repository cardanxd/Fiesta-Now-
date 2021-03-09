 const express = require("express");
 const router = express.Router();

 const Academy = require('../../../lib/Repositories/Academy/AcademyRepository');

 router.get('/AcademySignup', (req, res) => {
     //// console.log(horarios)
     res.render('links/AcademySignup');
 })


 router.post('/AcademySignup', async(req, res) => {
     console.log(req.body);
     let academy = await Academy.Add(req.body);
     req.session.userId = academy.id;

     res.redirect("/links/PanelAcademia");
 })

 router.get('/UpdateAcademy', async(req, res) => {
     let academy = await Academy.GetById(req.session.userId);
     console.log(academy);
     res.render('links/UpdateAcademy', { academy: academy });
 })

 router.post('/UpdateAcademy', async(req, res) => {
     if (await Academy.Update(req.session.userId, req.body))
         res.redirect("/links/UpdateAcademy");
     else
         res.redirect("/error");
 })



 router.get('/DeleteAcademy', async(req, res) => {
     let academy = await Academy.GetById(req.session.userId);
     res.render('links/DeleteAcademy', { academy: academy });
 })

 router.post('/DeleteAcademy', async(req, res) => {
     if (await Academy.Delete(req.session.userId)) {
         req.session.academiaId = 0;
         res.redirect("/signin");
     } else {
         res.redirect("/error");
     }
 })



 module.exports = router;