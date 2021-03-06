const sendMail = require('../server/integrations/mailer');
const express = require('express');
const router = express.Router();

router.post('/sendMail', (req, res) => {
  console.log(req.body);
  sendMail(req.body)
    .then(r => {
      res.send(r);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
