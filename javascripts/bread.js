'use strict';

let breadChoice = {
    "white": 0.5,
    "wholeWheat": 0.6,
    "wholeGrain": 0.7,
    "hawaiian": 0.8,
    "italianHerb": 0.8
};

let breadSelect = document.getElementById("bread");
let breadTotal = [];

function addBread() {
    switch (breadSelect.value) {
        case "white":
            breadTotal.push(breadChoice.white);
            break;
        case "whole wheat":
            breadTotal.push(breadChoice.wholeWheat);
            break;
        case "whole grain":
            breadTotal.push(breadChoice.wholeGrain);
            break;
        case "hawaiian":
            breadTotal.push(breadChoice.hawaiian);
            break;
        case "italian herb":
            breadTotal.push(breadChoice.italianHerb);
            break;
        }
    console.log("bread cost", breadTotal);
}

module.exports = { addBread, breadTotal };