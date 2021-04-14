import { pokPokData } from './data.js';

export function findById(array, id) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function findByPokPokName(name) {
    return pokPokData.find(pok => name === pok.pokemon);
}