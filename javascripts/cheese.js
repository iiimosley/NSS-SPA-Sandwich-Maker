'use strict';

let cheeseChoice = {
    "none": 0,
    "cheddar": 0.5,
    "gouda": 0.6,
    "havarti": 0.6,
    "pepperjack": 0.5,
    "swiss": 0.6
};

let selectCheese = document.querySelectorAll("#cheese input[type=checkbox]");
let numberCheese = document.querySelectorAll("#cheese input[type=number]");
let cheeseTotal = [];

function addCheese() {
    for (let m = 0; m < selectCheese.length; m++) {
        if (selectCheese[0].checked === true) {
            cheeseTotal = [0];
        } else if (selectCheese[m].checked === true) {
            cheeseTotal.push(`${(cheeseChoice[selectCheese[m].id]) * (numberCheese[m - 1].value)}`);
        }
    }
    console.log("cheese cost", cheeseTotal);
    return cheeseTotal;
}

module.exports = { addCheese, cheeseTotal };