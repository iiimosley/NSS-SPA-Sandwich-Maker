'use strict';

let veggiesChoice = {
    "none": 0,
    "lettuce": 0.2,
    "tomato": 0.2,
    "onion": 0.2,
    "avocado": 0.75,
    "jalapeno": 0.5
};

let selectVeggies = document.querySelectorAll("#veggies input[type=checkbox]");
let numberVeggies = document.querySelectorAll("#veggies input[type=number]");
let veggiesTotal = [];

function addVeggies() {
    for (let m = 0; m < selectVeggies.length; m++) {
        if (selectVeggies[0].checked === true) {
            veggiesTotal = [0];
        } else if (selectVeggies[m].checked === true) {
            veggiesTotal.push(`${(veggiesChoice[selectVeggies[m].id] * (numberVeggies[m - 1].value))}`);
        }
    }
    console.log("veggies cost", veggiesTotal);
    return veggiesTotal;
}

module.exports = { addVeggies, veggiesTotal };