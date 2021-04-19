import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';


export function getPokPokDex() {
    const stringyPokPokDex = localStorage.getItem(POKEDEX);

    if (!stringyPokPokDex) return [];

    const parsedPokPokDex = JSON.parse(stringyPokPokDex);

    return parsedPokPokDex;
}

export function setPokPokDex(parsedPokPokDex) {
    const stringyPokPokDex = JSON.stringify(parsedPokPokDex);

    localStorage.setItem(POKEDEX, stringyPokPokDex);
}


export function encounterPokPok(pokPok) {

    const pokpokdex = getPokPokDex();

    const matchingPokPokDexItem = findById(pokpokdex, pokPok.pokemon);


    if (matchingPokPokDexItem) {
        matchingPokPokDexItem.encountered++;
    } else {

        const newPokPokDexItem = {
            id: pokPok.pokemon,
            captured: 0,
            encountered: 1
        };

        pokpokdex.push(newPokPokDexItem);
    }

    setPokPokDex(pokpokdex);

    return pokpokdex;
}


export function capturePokPoks(pokPok) {
    console.log(pokPok, 'here');
    const pokpokdex = getPokPokDex();
    console.log(pokpokdex);

    const matchingPokPokDexItem = findById(pokpokdex, pokPok.pokemon);


    matchingPokPokDexItem.captured++;

    setPokPokDex(pokpokdex);

    return pokpokdex;
}