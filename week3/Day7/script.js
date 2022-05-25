//name function
function createName(firstName, lastName) {
  if (firstName === "mike") {
    return "Hello Mike";
  } else {
    return "your name is not mike";
  }
}

const fullName = createName("mike", "jones");
document.getElementById("demo").innerHTML = fullName;

//number function

function multiply(num1, num2) {
  let totalNumber = num1 * num2;

  if (totalNumber < 15) {
    return " Total is less than 15. The number was " + totalNumber;
  } else {
    return " Total is greater than 15. The number was " + totalNumber;
  }
}

const response = multiply(2, 5);
document.getElementById("numbers").innerHTML = response;

/**objects start */

let vehicle = {
  name: "Tractor",
  wheels: 4,
  brand: "subaru impreza",
};

let vehicleTwo = {
  name: "Car",
  wheels: 4,
  brand: " skyLine",
};
let text = "";
text =
  "You got a " +
  vehicleTwo.name +
  " It has  " +
  vehicle.wheels +
  " wheels and is a " +
  vehicle.brand;

document.getElementById("text").innerHTML = text;

/**constructor objects */
function Car(name, wheels, brand) {
  (this.name = name), (this.wheels = wheels), (this.brand = brand);
}
let carOne = new Car("bus", 6, "jumbo");
document.getElementById("textHere").innerHTML = carOne.name;
/**arrays */

const fruits = ["apple", "banana", "orange", "pear"];

document.getElementById("arrays").innerHTML = fruits;

function SubmitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let brand = document.getElementById("brand").value;
  let wheels = document.getElementById("wheels").value;

  let div = document.createElement("div");
  div.innerText =
    "Name is " +
    name +
    " " +
    "Brand is  " +
    brand +
    " " +
    "Number of wheels are  " +
    wheels;
  console.log(div);
  document.getElementById("result").appendChild(div);
  
}