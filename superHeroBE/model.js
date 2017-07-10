var mongoose = require('mongoose');

// Käytetään MongoDB-tietokantaa nimeltä kanta
mongoose.connect('mongodb://dev:dev@localhost/kanta');

// Määritellään Vastaus-schema
var vastausSchema = mongoose.Schema({
    nimi: String,
    supersankari: String
});

// Määritellään Vastaus-malli
var Vastaus = mongoose.model('Vastaus', vastausSchema);

// "Exportoidaan" Vastaus-malli jotta sitä voidaan käyttää muualla
// Tässä tapauksessa index.js:n postisssa, jossa tallennetaan db:hen dataa.
exports.Vastaus = Vastaus;