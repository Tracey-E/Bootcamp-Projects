let outputPage = document.getElementById("output");

/**create the function fizz bang 
 * and output all number and words to outputPage
  with each number on a separate line
 */

function fizzBang(number) {
  let output = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output += i + " FizzBang. " + "</br>";
    } else if (i % 3 == 0) {
      output += i + " Fizz. " + "</br>";
    } else if (i % 5 == 0) {
      output += i + " Bang. " + "</br>";
    } else {
      output += i + "" + "</br> ";
    }
  }

  outputPage.innerHTML = output;
}
/**This function will get the user selected number from numberInput
 * and then output to math-output id
 */
function mathMagic(number) {
 
  number = parseInt(number);
let stepTwo =0;
  let output = document.getElementById("math-output");
  let stepOne = number * number;
 console.log(stepOne);
 let listItemOne = document.createElement("li")
 listItemOne.innerHTML = stepOne;
 //add the number from stepOne to number
  stepTwo =   stepOne + number;
  console.log(stepTwo);
  let listItemTwo = document.createElement("li")
  listItemTwo.innerHTML = stepTwo;

  let stepThree = stepTwo / number;
  console.log(stepThree);
  let listItemThree = document.createElement("li")
  listItemThree.innerHTML = stepThree;
 
  let stepFour = stepThree + 17;
  console.log(stepFour);
  let listItemFour = document.createElement("li")
  listItemFour.innerHTML = stepFour;
  let stepFive = stepFour - number;
  console.log(stepFive);
  let listItemFive = document.createElement("li")
  listItemFive.innerHTML = stepFive;
 
  let stepSix = stepFive / 6;
  console.log(stepSix);
  let listItemSix = document.createElement("li")
  listItemSix.innerHTML = stepSix;
  
let list = document.createElement("ul");


list.append(listItemOne ,"\n" ,  listItemThree, "\n", listItemFour, "\n" ,listItemSix);
output.appendChild(list);

console.log(typeof(stepOne))
console.log(typeof(stepTwo))
console.log(typeof(stepThree))
console.log(typeof(stepFour))
console.log(typeof(stepFive))
console.log(typeof(stepSix))
}

function clearBoard() {
  console.log("clear");
  let output = document.getElementById("math-output");
  output.innerText = "";
  
 document.getElementById("numberInput").value=null
}
