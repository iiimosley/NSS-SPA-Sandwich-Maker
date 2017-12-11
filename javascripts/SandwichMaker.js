'use strict';

//ingredient modules
const bread = require('./bread');
const cheese = require('./cheese');
const condiments = require('./condiments');
const meat = require('./meat.js');
const veggies = require('./veggies.js');

//output div
let totalCost = document.getElementById("total");
//get total & clear total buttons
let addTotal = document.getElementById("sumUp");
let clearTotal = document.getElementById("clearTotal");
//all checkboxes & number inputs
let allCheckbox = document.querySelectorAll("input[type=checkbox]");
let allNumInput = document.querySelectorAll("input[type=number]");

// all .none checkboxes + event listner & function
let checkNone = document.querySelectorAll(".none");
checkNone.forEach((none) => {none.addEventListener("change", deselect);});
//target ingredient card for .none checkbox targeted
//if none is checked, clear all other checkboxes (notNone)
function deselect() {
    let notNone = event.currentTarget.parentNode.parentNode.querySelectorAll("input[type=checkbox]:not(.none)");
    if (event.currentTarget.checked === true) {
        // console.log(notNone);
        notNone.forEach(c => {
            c.checked = false;
        });
    } 
}
            
//all checkboxes, no .none class
let allButNone = document.querySelectorAll("input[type=checkbox]:not(.none)");
//target ingredient card of ingredient checkbox targeted
//if ingredient is checked, clear .none checkbox
allButNone.forEach((nN) => {nN.addEventListener("change", deselectNone);});
function deselectNone() {
    let uncheckNone = event.currentTarget.parentNode.parentNode.querySelector(".none");
    if (event.currentTarget.checked === true) {
        uncheckNone.checked = false;
    }
}


addTotal.addEventListener("click", getCost);
let totalSum;

//call function for each module/ingredient's total cost
//concat together arrays of each ingredient's cost
//accumulate total cost all ingredients for sandwich
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

//clear button listener and function
clearTotal.addEventListener("click", clearOut);
//clear output div, all arrays holding key values, & all checkboxes+number input
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

