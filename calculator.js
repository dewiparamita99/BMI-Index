//DOM//

let feet = document.querySelector('.TextFeet');
let inch = document.querySelector('.Inch');
let button = document.getElementsByName('button')
let stones = document.querySelector('.TextStones');
let pounds = document.querySelector('.Pounds');

const heightButton = button[0];
const weightButton = button[1];

let field = document.getElementsByName('field');
let submitButton = document.querySelector('.Submit');

function switchCalculator(button){
  //Toggle Input
    function toggleThe(leftInput, rightInput, measurementValue){
      leftInput.innerHTML = measurementValue;
      if (measurementValue === 'Cm' || measurementValue === 'Kg') {
        rightInput.style.visibility = 'hidden';
      } else {
        rightInput.style.visibility = 'visible';
      }
    }

  //Toggle Button
    if (button.value === 'Switch to CM') {
      button.value = 'Switch to Feet and Inches';
      toggleThe(feet, inch, 'Cm');
    }
    else if (button.value === 'Switch to Feet and Inches') {
      button.value = 'Switch to CM';
      toggleThe(feet, inch, 'Feet');
    }
    else if (button.value === 'Switch to KG') {
      button.value = 'Switch to Stones and Pounds';
      toggleThe(stones, pounds, 'Kg');
    }
    else {
      button.value = 'Switch to KG';
      toggleThe(stones, pounds, 'Stones');
    }
}
