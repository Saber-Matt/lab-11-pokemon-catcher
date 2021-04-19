import { getPokPokDex } from '../local-storage-utils.js';
// import { pokeData } from '../pokemon.js';



const button = document.getElementById('pokPokHome');

const table = document.querySelector('table');


var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];
const resultsPokPokDex = getPokPokDex();


for (let pokemon of resultsPokPokDex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}



var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Poks Captured',
            data: captured,
            backgroundColor: 'green',
            borderColor: 'sage',
            borderWidth: 3
        },
        {
            label: 'Poks',
            data: encountered,
            backgroundColor: 'red',
            borderColor: 'yellow',
            borderWidth: 3
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

export function renderTable() {
    const table = document.querySelector('tbody');
    const pokpokdex = PokPokDex();

    for (let i = 0; i < pokpokdex.length; i++) {
        const result = pokpokdex[i];
        const tr = renderLineItems(result);
        table.append(tr);

    }
}
renderTable();

export function renderLineItems(pokpokdex) {
    const tr = document.createElement('tr');
    const tdPokPok = document.createElement('td');
    const tdCaptured = document.createElement('td');
    const tdEncountered = document.createElement('td');

    tdPokPok.textContent = pokpokdex.id;
    tdCaptured.textContent = pokpokdex.captured;
    tdEncountered.textContent = pokpokdex.encountered;

    tr.append(tdPokPok, tdCaptured, tdEncountered);

    return tr;
}

table.append();

button.addEventListener('click', () => {

    alert('Do you have what it takes to be a Pok Master?');



    localStorage.clear();

    window.location.href = '../index.html';

});