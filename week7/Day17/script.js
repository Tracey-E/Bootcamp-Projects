let product = [
  {
    name: "PC",
    price: 1000,
    currency: " GBP",
    color: ["black", "white", "red", "blue"],
  },
  {
    name: "Mac",
    price: 20,
    currency: " GBP",
    color: ["black", "white", "blue"],
  },
  {
    name: "iPhone",
    price: 50,
    currency: " USD",
    color: ["black", "red", "blue"],
  },
];
document.getElementById("product").innerHTML =
  "I am an object product " +
  " Name: " +
  product[0].name +
  " Price: " +
  product[0].price +
  product[0].currency;
console.log(product.name, product.price, product.currency);

for (let item of product) {
  let extra = "";
  for (let key in item) {
    extra =
      extra +
      `
    ${key}  
    `;
    console.log(extra);
  
  let container = document.createElement("div");
  container.innerHTML = ` 
     <h5>  ${item.name} </h5>
       <h5> <ul><li> ${item.color.join("</li><li>")}</li></ul></h5>
        <span>  ${item.currency === "GBP" ? "£" : "$"} ${item.price}</span>
  
 </hr>

 <select><li>${item.color.map(function (data) {
   return `<option>${data}</option>`;
 })}</li></select>


<div >${item.color.map(function (data) {
    return `<input type="radio">${data}</input>`;
  })}</div>

 `;
  document.body.appendChild(container);
}}

let song = {
  name: "I am a coder",
  artist: "T-IS-A-Pain",
  duration: "3:30",
  genre: "Soft Rock",
};
document.getElementById("song").innerHTML =
  "I am a song product " +
  "song name: " +
  song.name +
  "Artist: " +
  song.artist +
  " Duration: " +
  song.duration +
  " " +
  song.genre;

for (let key in song) {
  console.log(key, song[key]);
  console.log(`${key} : ${song[key]}`);
  document.getElementById("songLoop").innerHTML +=
    "</br>" + key + ": " + song[key];
}
console.log(JSON.stringify(product));
//console.log(song.name, song.artist, song.duration, song.genre);
//console.log(song)

let list = ["apple", "banana", "orange", "pineapple", "strawberry"];

document.getElementById("fruitsToString").innerHTML =
  "toString----" + list.toString() + "</br>";

document.getElementById("fruitsToString").innerHTML +=
  "</br>" + "join ---- " + list.join(" : ") + "</br>";
let list1 = ["apple", "banana", "orange", "pineapple", "strawberry"];
console.log(list1);
document.getElementById("fruitsToString").innerHTML +=
  "</br>" + "pop---- " + list1.pop() + " list is now -----" + list1 + "</br>";
let list2 = ["apple", "banana", "orange", "pineapple", "strawberry"];
console.log(list2);
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "push -kiwi--" +
  list2.push(" kiwi ") +
  " list is now----- " +
  list2 +
  "</br>";
let list3 = ["apple", "banana", "orange", "pineapple", "strawberry"];
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "shift -----= " +
  list3.shift() +
  " list is now -----" +
  list3 +
  "</br>";
let list4 = ["apple", "banana", "orange", "pineapple", "strawberry"];
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "unshift(apple)---= " +
  list4.unshift("apple") +
  "</br>" +
  " list is now -----" +
  list4 +
  "</br>";
let list5 = ["apple", "banana", "orange", "pineapple", "strawberry"];
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "splice(2,1, kiwi)---= " +
  list5.splice(2, 1, "kiwi") +
  "</br>" +
  " list is now ----" +
  list5 +
  "</br>";
let list6 = ["apple", "banana", "orange", "pineapple", "strawberry"];
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "slice( 2, 4)---= " +
  list6.slice(2, 4) +
  "</br> " +
  " list is now---- " +
  list6 +
  "</br>";
let list7 = ["apple", "banana", "orange", "pineapple", "strawberry"];
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "list is---- " +
  list7 +
  "</br>" +
  "reverse -----= " +
  list7.reverse() +
  "</br>" +
  " list is now -----" +
  list7 +
  "</br>";
let list8 = ["pineapple", "apple", "orange", "banana", "strawberry"];
document.getElementById("fruitsToString").innerHTML +=
  "</br>" +
  "List is---- " +
  list8 +
  "</br>" +
  "sort -----= " +
  list8.sort() +
  "</br>" +
  " list is now----- " +
  list8 +
  "</br>";

//console.log(list[0]);
for (let i = 0; i < list.length; i++) {
  //console.log(list[i]);
  document.getElementById("fruits").innerHTML += "</br>" + list[i];
}
