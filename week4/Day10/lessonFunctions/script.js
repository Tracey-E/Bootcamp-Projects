let product = {
  name: "Box of biscuits",
  summary: "A mixed box of biscuits",
  quantity: "60",
  ref: "001",
  price: "£15",
};

for (content in product) {
  console.log(content + ": " + product[content]);
  console.log(`[data="${content}"]`);
  /**get the elements relating to product items and change the innerText to match */
  let item = document.querySelector("#item");
  console.log(item);
  item.dataset.name = product.name;
  item.dataset.summary = product.summary;
  item.dataset.quantity = product.quantity;
  item.dataset.ref = product.ref;
  item.dataset.price = product.price;

  /**put the above visible in the html using the item.dataset values each one on a new line*/

  item.innerText = ` Name:  ${item.dataset.name} \n Summarry:  ${item.dataset.summary} \n Quantity:  ${item.dataset.quantity} \n  REF:  ${item.dataset.ref} \n Price: ${item.dataset.price}`;
}

function showChange(e) {
  console.log(e);
  document.getElementById("valueBox").innerText = e;
}

/**this will change the opacity and colour of id change */
function color() {
  let box = document.getElementById("change");
  const colors = ["red", "blue", "green", "yellow", "orange", "blueviolet"];

  /**get random color from colors */
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  box.style.backgroundColor = randomColor;
}

function dataEntry(input) {
  let value = input.value;
  let name = input.name;
  let type = input.type;
  let length = input.value.length;
  console.log(`${name} ${type} ${value} ${length}`);

  if (name === "quantity") {
    if (length > 6 || value <= 0) {
      // input.style.backgroundColor = "red";
      input.classList.add("invalid");
      input.classList.remove("valid");
    } else if (length < 6 && value > 0) {
      // input.style.backgroundColor = "green";
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  }
  if (name === "email" && value.indexOf("@") === -1) {
    //input.style.backgroundColor = "red";
    input.classList.remove("valid");
    input.classList.add("invalid");
    document.getElementById("email").value = " we need an email";
  } else if (value.indexOf(".") === -1) {
    //input.style.backgroundColor = "red";
    input.classList.remove("valid");
    input.classList.add("invalid");
    document.getElementById("email").value = " we need an email";
  } else if (value.includes(" ")) {
    //input.style.backgroundColor = "red";
    input.classList.remove("valid");
    input.classList.add("invalid");
    document.getElementById("email").value = " we need an email";
  } else if (value.indexOf(".") - 1 === value.indexOf("@")) {
    //input.style.backgroundColor = "red";
    input.classList.remove("valid");
    input.classList.add("invalid");
    document.getElementById("email").value = " we need an email";
  } else {
    //input.style.backgroundColor = "green";
    input.classList.remove("invalid");
    input.classList.add("valid");
    
  }
}

function submit() {
  console.log("submitted")
}
