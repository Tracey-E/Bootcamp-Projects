/* start of double number function */

function doubleNumber() {
  // Get the value of the input field
  const inputNumber = document.getElementById("numberInput").value;
  console.log(inputNumber);
  //get the element we want to change
  const result = document.getElementById("outputNumber");
  //change the innerHTML of the element
  result.innerHTML = inputNumber * 2;
}
/* end of double number function */

//*--start of fortune teller function--*//
//it takes four parameters children,partners name, location, jobtitle
//it outputs to the id fortuneTeller in the html file
//" you will ba a jobTitle in a location and married to partnersName and have children children"
// function needs to have four different values for each parameter

function fortuneTeller(children, partnersName, location, jobTitle) {
  //partnersName random selection of name option

  partnersName = [" Bill ", " Bob ", " Jane ", " Mary ", " Sue ", " Tom "];
  partnersName = partnersName[Math.floor(Math.random() * partnersName.length)];
  //location random selection of location option
  location = [
    " London ",
    " New York ",
    " Paris ",
    " Berlin ",
    " Tokyo ",
    " Sydney ",
  ];
  location = location[Math.floor(Math.random() * location.length)];
  //jobTitle random selection of jobTitle option
  jobTitle = [
    " frontend Web Developer ",
    " frontend Web Designer ",
    " backend Web Developer ",
    " backend Web Designer ",
    " fullstack Web Developer ",
    " fullstack Web Designer ",
  ];
  jobTitle = jobTitle[Math.floor(Math.random() * jobTitle.length)];
  //children random selection of number of children option
  children = Math.floor(Math.random() * 10);

  //output to the id fortuneTeller in the html file
  document.getElementById("fortuneTeller").innerHTML =
    "You will be a " +
    jobTitle +
    " in " +
    location +
    ", you will marry " +
    partnersName +
    " and have " +
    children +
    " children";
}

//*--end of fortune teller function--*//

//*--start of age of puppy function--*//
//Write a function named calculateDogAge that:
//takes 1 argument: your puppy's age.
//calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
//Call the function three times with different sets of values.
//Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge() {
  //get the input
  let puppyAge = document.getElementById("puppyAge").value;
  //calculate dog age
  totalAge = puppyAge * 7;
  dogAge = puppyAge / 7;
  //output to the screen
  document.getElementById("ages").innerHTML =
    "With the age " +
    puppyAge +
    " A dog would be " +
    totalAge +
    " years old in human years!. And a human would be " +
    dogAge +
    " years old in dog years!";
}

//*--end of age of puppy function--*//

/*--start of age of array function--*/

const fruitsArray = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "peach",
  "grapes",
];
let text = "";
for (let i = 0; i < fruitsArray.length; i++) {
  let place = document.getElementById("arrays");
  text += `<ul>`;
  text += `<li>` + fruitsArray[i] + ` </li>`;
  text += `</ul>`;
  place.innerHTML = text;
}

/*--end of age of array function--*/
