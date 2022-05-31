/**--changes-- */
function changes() {
  let name = " jane doe";
  let day = "monday";
  let temp = "20 degrees";

  return " Hi there " + name + " today is " + day + " the temp is " + temp;
}
function intro() {
  let change = (document.getElementById("intro").innerText = changes());
}
/**--states-- */
function states() {
  var state = document.getElementById("adding");
  const ukCountries = 4;
  const usStates = 50;

  totalRegions = ukCountries + usStates;
  return (state.innerText = "There are " + totalRegions + " states ");
}
/**matching  numbers*/

function checkMatches() {
  var box = document.getElementById("matching");
  var a = document.getElementById("input").value;
  console.log(a);
  var b = document.getElementById("inputTwo").value;
  console.log(b);
  if (a === b) {
    box.innerText = "The numbers match";
  } else {
    box.innerText = "The numbers do not match";
  }
}






/*--calculator js--*/

function addition(a, b) {
  return a + b;
}

function add() {
  var box = document.getElementById("answ");
  let num1 = document.getElementById("calcInput").value;

  let num2 = document.getElementById("calcInputTwo").value;
  0
  let a =  parseInt(num1);
  let b = parseInt(num2);

  var answear = addition(a, b);
  box.innerHTML = answear;
}

function subtraction(a, b) {
  return a - b;
}
function sub() {
  var box = document.getElementById("answ");
  let num1 = document.getElementById("calcInput").value;
  let num2 = document.getElementById("calcInputTwo").value;
  let a = parseInt(num1);
  let b = parseInt(num2);
  var answear = subtraction(a, b);
  box.innerHTML = answear;
}
function multiplication(a, b) {
  return a * b;
}
function mult() {
  var box = document.getElementById("answ");
  let num1 = document.getElementById("calcInput").value;

  let num2 = document.getElementById("calcInputTwo").value;
  let a = parseInt(num1);
  let b = parseInt(num2);
  var answear = multiplication(a, b);
  box.innerHTML = answear;
}
function division(a, b) {
  return a / b;
}
function div() {
  var box = document.getElementById("answ");
  let num1 = document.getElementById("calcInput").value;
  let num2 = document.getElementById("calcInputTwo").value;
  let a = parseInt(num1);
  let b = parseInt(num2);
  var answear = division(a, b);
  box.innerHTML = answear;
}
/**name function */
function getName(firstName, lastName) {
  return firstName + " " + lastName;
}

const name1 = getName("Tracey", "Edwards");

console.log(name1);
