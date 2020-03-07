//Calculator Start Here
let textFeet = document.querySelector('.TextFeet');
let textStones = document.querySelector('.TextStones');
let inchGroup = document.querySelector('.Inch');
let poundsGroup = document.querySelector('.Pounds');
let button = document.getElementsByName('button');
let BMI;

const heightButton = button[0];
const weightButton = button[1];

function switchCalculator(button){
  //Toggle Input
    function toggleThe(leftText, rightGroup, measurementValue){
      leftText.innerHTML = measurementValue;
      if (measurementValue === 'Cm' || measurementValue === 'Kg') {
        rightGroup.style.visibility = 'hidden';
      } else {
        rightGroup.style.visibility = 'visible';
      }
    }

  //Toggle Button
    if (button.value === 'Switch to CM') {
      button.value = 'Switch to Feet and Inches';
      toggleThe(textFeet, inchGroup, 'Cm');
    }
    else if (button.value === 'Switch to Feet and Inches') {
      button.value = 'Switch to CM';
      toggleThe(textFeet, inchGroup, 'Feet');
    }
    else if (button.value === 'Switch to KG') {
      button.value = 'Switch to Stones and Pounds';
      toggleThe(textStones, poundsGroup, 'Kg');
    }
    else {
      button.value = 'Switch to KG';
      toggleThe(textStones, poundsGroup, 'Stones');
    }
}

//Check Answer

function calculateBodyMass() {
  var cm, feet, inch, kg, stones, pounds;
  let field, height, weight;

  field = document.querySelectorAll('.field');
  cm = field[0];
  feet = field[0];
  inch = field[1];
  kg = field[2];
  stones = field[2];
  pounds = field[3];

  //Convert Height Measurement to Meter
    if (textFeet.innerHTML === 'Cm') {
      height = cm.value * 0.01 ;
    } else {
      height = feet.value * 0.3048; + inch.value * 0.0254;
    }

  //Convert Weight Measurement to KG
    if (textStones.innerHTML === 'Kg') {
      weight = kg.value;
    } else {
      weight = stones.value * 6.35029 + pounds.value * 0.453592;
    }

  //Formula BMI
  BMI = weight/Math.pow(height,2);
  return BMI.toFixed(1);
}

//Show Answer

function showAnswer() {
  calculateBodyMass();
  let answer, result, chart, showChart;
  answer = document.querySelector('.Answer');
  result = Number(calculateBodyMass());
  chart = document.createElement('img');
  chart.src = 'https://bmicalculatorireland.com/wp-content/uploads/2018/11/calculate-body-mass-index-bmi-calculator-ireland-e1542038017641.png';
  chart.className = 'chart';

  if (result < 18.5) {
    answer.textContent = 'You are underweight.' + ' ' + 'Your BMI Index is: ' + result;
    answer.append(chart);
  } else if (18.5 <= result <= 24.9) {
    answer.textContent = 'You are in good shape!' + ' ' + 'Your BMI Index is: ' + result;
    answer.append(chart);
  } else if (25 <= result <= 29.9) {
    answer.textContent = 'You are overweight.' + ' ' + 'Your BMI Index is: ' + result;
    answer.append(chart);
  } else if (30 <= result <= 34.9){
    answer.textContent = 'You are Obese.' + ' ' + 'Your BMI Index is: ' + result;
    answer.append(chart);
  } else if (result > 34.9){
    answer.textContent = 'You are Very Obese.' + ' ' + 'Your BMI Index is: ' + result;
    answer.append(chart);
  }
}
