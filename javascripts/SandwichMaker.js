'use strict';

const bread = require('./bread');
const cheese = require('./cheese');
const condiments = require('./condiments');
const meat = require('./meat.js');
const veggies = require('./veggies.js');

let totalCost = document.getElementById("total");
let addTotal = document.getElementById("sumUp");
let clearTotal = document.getElementById("clearTotal");
let allCheckbox = document.querySelectorAll("input[type=checkbox]");
let allNumInput = document.querySelectorAll("input[type=number]");

//expt checkbox ".none" unchecking all other check boxes when checked
//
// let uncheckNone = document.querySelectorAll(".none");
// let notNone = document.querySelectorAll("input[type=checkbox]:not(.none)");
// uncheckNone.forEach((none) => {none.addEventListener("click", deselect);});
// console.log(notNone);

// function deselect() {
//     if (uncheckNone.checked === true) {
//         notNone.forEach(c => {
//             c.checked = false;
//         });
//     }
// }

addTotal.addEventListener("click", getCost);
let totalSum;

function getCost() {
    meat.addMeat();
    cheese.addCheese();
    veggies.addVeggies();
    condiments.addCondiments();
    bread.addBread();
    totalSum = meat.meatTotal.concat(cheese.cheeseTotal, veggies.veggiesTotal, condiments.condimentsTotal, bread.breadTotal);
    console.log("total cost of ingredients", totalSum);
    totalCost.innerHTML = "$" + (totalSum.reduce((total, number) => +total + (+number), 0)).toFixed(2);
}

clearTotal.addEventListener("click", clearOut);


function clearOut() {
    totalCost.innerHTML = "";
    meat.meatTotal.length = 0;
    cheese.cheeseTotal.length = 0;
    veggies.veggiesTotal.length = 0;
    condiments.condimentsTotal.length = 0;
    bread.breadTotal.length = 0;
    totalSum.length = 0;
    allCheckbox.forEach(check => {
        check.checked = false;
    });
    allNumInput.forEach(num => {
        num.value = 1;
    });
}

