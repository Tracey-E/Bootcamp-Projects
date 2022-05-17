/**Get one item to change */
let item = document.querySelector("li:nth-child(2)");

item.classList.add("active", "highlighted");

/**getting multiple items */
let items = document.querySelectorAll("li:nth-child(2)");
console.log(items);
items[0].classList.add("active", "highlighted");
items[1].classList.add("active", "highlighted");
items[2].classList.add("active", "highlighted");
