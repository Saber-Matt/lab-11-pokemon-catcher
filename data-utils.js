import { pokPokData } from './data.js';
import { encounterPokPok } from './local-storage-utils.js';


export function generateThreePoks() {

    let randomNumber1 = getRandomIndex();
    let randomNumber2 = getRandomIndex();
    let randomNumber3 = getRandomIndex();


    while (
        randomNumber1 === randomNumber2
        || randomNumber2 === randomNumber3
        || randomNumber1 === randomNumber3
    ) {

        randomNumber1 = getRandomIndex();
        randomNumber2 = getRandomIndex();
        randomNumber3 = getRandomIndex();
    }


    const pokPok1 = pokPokData[randomNumber1];
    const pokPok2 = pokPokData[randomNumber2];
    const pokPok3 = pokPokData[randomNumber3];

    encounterPokPok(pokPok1);
    encounterPokPok(pokPok2);
    encounterPokPok(pokPok3);

    return [pokPok1, pokPok2, pokPok3];
}

function getRandomIndex() {
    return Math.floor(Math.random() * pokPokData.length);
}