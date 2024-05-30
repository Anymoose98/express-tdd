const { test, expect } = require("@jest/globals");
const db = require('../db/posts.json');
const {somma, createSlug} = require('./createSlug')

// prova
test('La funzione somma dovrebbe restituire la somma', () => {
const result = somma(5, 5);
expect(result).toBe(10);
});

// createSlug
test('dal titolo toglie lo spazio e aggiunge il trattino ', () => {
    const result = createSlug('ciambellone');
    // Stringa
    expect(typeof result).toBe("string")
    // Controllo se il risultato è giusto
    expect (result).toBe('ciambellone1');
})

test ('Controlla il titolo se esiste', ( ) => {
    const result = createSlug()
    // se è vuoto
    expect(() => titolo.toThrow())
})

test('controllo se non è un numero', ()=> {
    const result = createSlug(3)
    // se è un numero
    expect(() => titolo.toThrow())
})