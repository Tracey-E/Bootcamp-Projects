/**  Write a function named calculateSupply that:  
takes 2 arguments: age, amount per day.  
calculates the amount consumed for rest of the life (based on a constant max age).  
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"  */

function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const totalAmount = (maxAge - age) * 365 * amountPerDay;

  console.log(
    `You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`
  );
}

console.log(calculateSupply(27, 500));
console.log(calculateSupply(100, 52));
console.log(calculateSupply(50, 45));

/** Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
Pass the radius to the function.  
Calculate the circumference based on the radius, and output "The circumference is NN".  
Create a function called calcArea:
Pass the radius to the function.  
Calculate the area based on the radius, and output "The area is NN".*/

function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}
console.log(calcCircumference(5));

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area is ${area}`);
}
console.log(calcArea(10));

/* Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.  
Convert it to fahrenheit and output "NN°C is NN°F".  
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.  
Convert it to celsius and output "NN°F is NN°C." */

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}
console.log(celsiusToFahrenheit(30));

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}
console.log(fahrenheitToCelsius(100));

/* Create an array of colours.
Loop throughout the array of colours using a for loop 
 and for each colour add a paragraph to your page that says: "Colour XX is YY".
So it will be
Colour 1 is Red    */

const colours = ["Red", "Green", "Blue", "Yellow"];

for (let i = 0; i < colours.length; i++) {
  console.log(`Colour ${i + 1} is ${colours[i]}`);
}

/*Create an array of numbers called numbersArray.
Create a function that doubles the number you put in.
Now create a for loop that loops through the array of numbers 
 and in the curly brackets of the for loop call the function on the current number. */

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubleNumber(number) {
  return number * 2;
}

for (let i = 0; i < numbersArray.length; i++) {
  console.log(doubleNumber(numbersArray[i]));
}

/**Create an array of users. This time it will be an array of objects
     Loop throughout the array of users using a for loop 
      and for each user add a paragraph that says:
       " My name is X" The idea is to replace X with the name property ( users[i].name )
      
     */

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 27 },
  { name: "Peter", age: 35 },
];

for (let i = 0; i < users.length; i++) {
  console.log(`My name is ${users[i].name}   I am ${users[i].age} years old`);
}
