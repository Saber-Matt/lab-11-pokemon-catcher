import { generateThreePoks } from './data-utils.js';
import { capturePokPoks } from './local-storage.js';
import { findByPokPokName } from './utils.js';

const catchEmButton = document.querySelector('#catch-em-all');
let totalCaptures = 0;
function createPokPokDom() {

    const pokPokRadio1 = document.querySelector('#radio1');
    const pokPokRadio2 = document.querySelector('#radio2');
    const pokPokRadio3 = document.querySelector('#radio3');

    const pokPokLabel1 = document.querySelector('#label1');
    const pokPokLabel2 = document.querySelector('#label2');
    const pokPokLabel3 = document.querySelector('#label3');
    const threePoks = generateThreePoks();

    const img1 = document.querySelector('#img1');

    img1.src = threePoks[0].url_image;
    pokPokLabel1.append(img1);
    pokPokRadio1.value = threePoks[0].pokemon;

    const img2 = document.querySelector('#img2');

    img2.src = threePoks[1].url_image;
    pokPokLabel2.append(img2);
    pokPokRadio2.value = threePoks[1].pokemon;

    const img3 = document.querySelector('#img3');

    img3.src = threePoks[2].url_image;
    pokPokLabel3.append(img3);
    pokPokRadio3.value = threePoks[2].pokemon;
}

createPokPokDom();

catchEmButton.addEventListener('click', () => {
    totalCaptures++;
    const selectedRadio = document.querySelector('input:checked');

    const pokObject = findByPokPokName(selectedRadio.value);

    // we need to find the PokPok that is selected

    capturePokPoks(pokObject);

    if (totalCaptures >= 10) {
        window.location = '../results';
    }

    createPokPokDom();

});