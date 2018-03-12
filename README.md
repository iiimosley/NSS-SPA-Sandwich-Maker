# NSS Single Page Applications: Sandwich Maker

### Goals
* Further practice of modularity
* Chaining series of events with DOM interactions
* Compiling and manipulating data from multiple sources
* Further practice of CSS3 FlexBox, SASS capabilities, & Responsive Design

### Directives
Within `index.html`, static elements to be:
* A section of options for each major sandwich ingredient
* The ability to select multiple, or zerOpeo, choices for each section (such as turkey and bacon, or "no meat")
* An empty DOM element into which the final sandwich order and its cost will be inserted

#### Modularity
Each ingredient to be modularized to it's own JS file, including a private object containing ingredient options and their price, e.g.:
```
let cheeseChoice = {
    "none": 0,
    "cheddar": 0.5,
    "gouda": 0.6,
    "havarti": 0.6,
    "pepperjack": 0.5,
    "swiss": 0.6
};
```
Modules for ingredients:
* Bread
* Meat
* Cheese
* Condiments
* Veggies

The main controller, `SandwichMaker.js`, renders the sandwich total on user's "Ring It Up!" click by compiling all ingredients selected (w/ the amount specified) in the DOM and factors the sum based on the pricing values set in the private objects of ingredient options.


### Personal Stretch Goals
* The 'None' checkbox in each ingredient card unchecks all currently checked options; 'None' also unchecks when any ingredient option in the card is checked
* 'Nah, New Sandwich' clears the current total and all checks made on the Sandwich Maker

Open Console to view data being compiled

