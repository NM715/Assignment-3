/********* create variables *********/
let costPerDay = 35;
let numberOfDays = 0;
let totalCost = 0;

const dayButtons = [
    document.getElementById("monday"),
    document.getElementById("tuesday"),
    document.getElementById("wednesday"),
    document.getElementById("thursday"),
    document.getElementById("friday")
];

const clearButton = document.getElementById('clear-button');
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');
const calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener('click', function() {
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked');
            numberOfDays--;
        } else {
            dayButton.classList.add('clicked');
            numberOfDays++;
        }
        recalculateCost();
    });
});

/********* clear days *********/
function clearEverything() {
    numberOfDays = 0;
    dayButtons.forEach(function(dayButton) {
        dayButton.classList.remove('clicked');
    });
    totalCost = 0;
    recalculateCost();
}

clearButton.addEventListener('click', clearEverything);

/********* change rate *********/
halfDayButton.addEventListener('click', function() {
    costPerDay = 20;
    document.getElementById("half").classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    recalculateCost();
});

fullDayButton.addEventListener('click', function() {
    costPerDay = 35;
    document.getElementById("half").classList.remove("clicked");
    document.getElementById("full").classList.add("clicked");
    recalculateCost();
});

/********* calculate *********/
function recalculateCost() {
    totalCost = costPerDay * numberOfDays;
    calculatedCostElement.innerHTML = totalCost;
}




