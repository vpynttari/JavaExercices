var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-harkka' });
});

/* GET vastaukset page. Sisältää printtauksen databasen sisällöstä*/
router.get("/vastaukset", function(req, res) {
    Vastaus.find(function (err, vastaukset) {
    if (err) return console.error(err);
    console.log(vastaukset);
    res.render('vastaukset', {vastaukset: vastaukset});  
  });
});

router.get("/tulokset", function (req, res) {
  Vastaus.aggregate([{
    $group: { _id: "$supersankari", arvo: {$sum: 1}}}]).then(function(data) {
      var tulokset = {};
      data.forEach(function(v) {
        tulokset[v._id] = v.arvo;
      });
      res.json(tulokset);
    },
    function () {
      res.status(500).send("Tietokantavirhe");
    });
});

var Vastaus = require('../model.js').Vastaus;

router.post('/supersankari/', function(req, res, next) {
  var nimi = req.body.nimi;
  var supersankari = req.body.supersankari;
  Vastaus.create({
    nimi: nimi,
    supersankari: supersankari
  }).then(function() {
    res.send(nimi + " " + supersankari);
  },
  function() {
    res.status(500).send("Tietokantavirhe");
  });
  
  const inputData = {
    title: "EJS:n käyttötesti",
    etunimi: req.body.nimi,
    sankari: req.body.supersankari
  }
  res.render('supersankariEJ', inputData);
});

module.exports = router;