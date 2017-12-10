'use strict';

let meatChoice = {
    "none": 0,
    "turkey": 0.9,
    "ham": 0.9,
    "salami": 1,
    "bacon": 1.25,
    "tuna": 1
};

let selectMeat = document.querySelectorAll("#meat input[type=checkbox]");
let numberMeat = document.querySelectorAll("#meat input[type=number]");
let meatTotal= [];

function addMeat() {
    for (let m = 0; m < selectMeat.length; m++) {
        if (selectMeat[0].checked === true){
            meatTotal = [0];
        } else if (selectMeat[m].checked === true) {
            meatTotal.push(`${(meatChoice[selectMeat[m].id]) * (numberMeat[m-1].value)}`);
        }
    }
    console.log("meat cost", meatTotal);
    return meatTotal;
}

module.exports = {addMeat, meatTotal};