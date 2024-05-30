const db = require('../db/posts.json');
// Piccola prova
function somma(a, b) {
    return a + b;
}

// CreateSlug
function createSlug(titolo) {

    if (typeof titolo !== 'string' || titolo == "") {
        return new Error('titolo non valido')
    }

    let slug = titolo.toLowerCase().replace(/\s+/g, '-');

    // Cerco nel db
    if(!db){
        return new Error('db non trovato')
    }
    let cercoDb = db.some(item => item.slug === slug);
    let contatore = 0
    while (cercoDb) {
        let newSlug = `${slug}${contatore}`;
        cercoDb = db.some(item => item.slug === newSlug);
        if (!cercoDb) {
          slug = newSlug;
        }
        contatore++;
      }
    return slug
}


module.exports = {
    somma,
    createSlug
}