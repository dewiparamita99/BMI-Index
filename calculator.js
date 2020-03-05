//DOM

let textFeet = document.querySelector('.TextFeet');
let textStones = document.querySelector('.TextStones');
let inchGroup = document.querySelector('.Inch');
let poundsGroup = document.querySelector('.Pounds');
let button = document.getElementsByName('button')

const heightButton = button[0];
const weightButton = button[1];

let submitButton = document.querySelector('.Submit');


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
  let field = document.querySelectorAll('.field');
  var cm = field[0];
  var feet = field[0];
  var inch = field[1];
  var kg = field[2];
  var stones = field[2];
  var pounds = field[3];
  let height;
  let weight;

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
  const BMI = weight/Math.pow(height,2);
  console.log (BMI);
  return alert("Your BMI Index is " + BMI);
}

//Show Answer


//Show Answer Table -- Continue filling the aswer! aaaaaaaa
function showBMITable(){
  const cmValue = [193.0, 190.5, 187.9, 185.4, 182.8, 180.3, 177.8, 175.2, 172.7, 170.1, 167.6, 165.1, 162.5, 160, 157.4, 154.9, 152.4];
  const ftValue = [6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5];
  const inchValue = [4,3,2,1,0,11,10,9,8,7,6,5,4,3,2,1,0];
  const answer = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,
                  18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,36,37,38,39,40,
                  18,19,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,33,34,35,36,37,38,39,
                  17,18,19,20,21,22,23,24,24,25,26,27,28,29,30,31,32,32,33,34,35,36,37,38,
                  17,18,18,19,20,21,22,23,24,24,25,26,27,28,29,30,31,31,32,33,34,35,36,37,
                  ];
  //2D Array
  var tableAnswer = new Array(24);
  var h = 0;

  for (var i = 0; i < tableAnswer.length; i++) {
    tableAnswer[i] = [];
  }

  for (var i = 0; i < 24; i++) {
    for (var j = 0; j < 1; j++) {
      tableAnswer[i][j] = answer[h++];
    }
  }

  for (var i =0; i < 24; i++){
   for (var i = 0; i < 17; i++) {
     //Make a new Element and ability to modify in CSS
     tableAnswer[i][j];
   }
 }
}
