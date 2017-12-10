'use strict';

let condimentsChoice = {
    "none": 0,
    "mayo": 0.2,
    "mustard": 0.2,
    "vinegar": 0.2,
    "oil": 0.2,
    "hot-sauce": 0.3
};

let selectCondiments = document.querySelectorAll("#condiments input[type=checkbox]");
let condimentsTotal = [];

function addCondiments() {
    for (let m = 0; m < selectCondiments.length; m++) {
        if (selectCondiments[0].checked === true) {
            condimentsTotal = [0];
        } else if (selectCondiments[m].checked === true) {
            condimentsTotal.push(`${condimentsChoice[selectCondiments[m].id]}`);
        }
    }
    console.log("condiments cost", condimentsTotal);
    return condimentsTotal;
}

module.exports = { addCondiments, condimentsTotal };