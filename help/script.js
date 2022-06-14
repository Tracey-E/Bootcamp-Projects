
/** querySelector  only gets first item  given */
let button = document.getElementById("button")
/**Event listener syntex */
 button.addEventListener("click", showMe);

function showChange(e) {
  console.log(e);
  document.getElementById("outputBox1").innerText = e;
}

function showMe() {
  document.getElementById("outputBox2").innerText = "Hello World";
}
//let items = document.getElementById("listItems")
let listItems = document.querySelectorAll("li");
console.log(listItems);

for(item in listItems) {
    console.log(listItems[item]);
}

/**this is an object */
 const Animals = {
    animal: "dog",
    secondAnimal: "cat",
    thirdAnimal: "bird",
    fourthAnimal: "fish"
 }
/**this will loop through all items from the Animals object */
 for( pet in Animals) {
     console.log(Animals[pet]);
 }
/** this is an array */
 let animals = ["dog", "cat", "bird", "fish"];

 for(let x=0; x < animals.length; x++) {
     console.log(animals[x]);
 }

 function add(a,b) {
        return a + b;
 }

 console.log(add(10,12))


 