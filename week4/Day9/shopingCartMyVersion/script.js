document.addEventListener("click", addToCart);

/** create a function to be used in addToCart
 * Each time an item is added it will produce two buttons
 * the buttons are used to change the quantity of the item
 * with a quantatiti counter in between
 * when the buttons are clicked they will run minusItemCount()
 * or addItemCount()*/
function createQuantityButtons(id) {
  /**create minus button */
  let minusButton = document.createElement("button");
  minusButton.innerText = "-";
  minusButton.addEventListener("click", minusItemCount);
  /**create plus button */
  let plusButton = document.createElement("button");
  plusButton.innerText = "+";
  plusButton.addEventListener("click", addItemCount);
  /**create quantity counter */
  let quantityCounter = document.createElement("span");
  quantityCounter.innerText = "1";
  let amount = document.getElementById("amount");
  /**add all to the document */
  let amountDiv = document.createElement("div");
  //amountDiv.id = "amountDiv";
  amount.appendChild(amountDiv);
  amountDiv.appendChild(minusButton);
  amountDiv.appendChild(quantityCounter);
  amountDiv.appendChild(plusButton);
  amountDiv.id = id;
}

function addToCart(e) {
  let item = e.target.id;
  let itemToAdd = document.getElementById(item);
  console.log(itemToAdd);
  let itemName = itemToAdd.children[0].innerText;
  let ItemPrice = itemToAdd.children[2].children[0].innerText;
  let itemId = itemToAdd.children[0].id;
  console.log(itemId);
  console.log(ItemPrice);
  /**adding  data to cart */
  let cartItemAdd = document.getElementById("CartItem");
  console.log(cartItemAdd);
  /**create new li element in cartItemAdd to add name */
  if (cartItemAdd.innerText.indexOf(itemName) >= 0) {
    alert("Item already in cart you can change the quantity in the cart");
  } else {
    let newItemName = document.createElement("li");
    newItemName.className = "item";
    newItemName.innerText = itemName;
    newItemName.id = itemId;
    cartItemAdd.appendChild(newItemName);
    /**create new li element in cartItemPrice to add price */
    let newPrice = document.createElement("li");
    newPrice.innerText = ItemPrice;
    newPrice.id = itemId;
    let cartItemPrice = document.getElementById("cartPrice");
    cartItemPrice.appendChild(newPrice);

    createQuantityButtons(itemId);
    total();
  }
}
/**function that when a minus or plus button is clicked
 * the nextElementSibling input changes to represent */

function minusItemCount(e) {
  console.log("minus");
  let quantity = e.target.nextElementSibling.innerHTML;
  let PriceId = e.target.parentElement.id;
  let price = document.querySelectorAll("#cartPrice li");

  if (quantity > 0) {
    quantity--;
    e.target.nextElementSibling.innerHTML = quantity;
    for (let i = 0; i < price.length; i++) {
      if (price[i].id == PriceId) {
        if (quantity == 0) {
          price[i].innerText = "0";
        } else {
          let value = price[i].innerHTML;
          let newValue = value / 2;
          price[i].innerHTML = newValue;
        }
      }
    }
    total();
  }
}
/** to count up the items */
function addItemCount(e) {
  const costs = {
    one: 10,
    two: 6,
    three: 3,
    four: 6,
    five: 7,
    six: 5,
  };
  console.log("plus");
  let PriceId = e.target.parentElement.id;
  console.log(PriceId);
  let price = document.querySelectorAll("#cartPrice li");
  let quantity = e.target.previousElementSibling.innerHTML;
  console.log(quantity);
  quantity++;
  for (let i = 0; i < price.length; i++) {
    if (price[i].id == PriceId) {
      if (price[i].innerHTML == "0") {
        /**use price[i].id to get new value from variable that matches the id */

        for (const [key, value] of Object.entries(costs)) {
          console.log(key);
          console.log(value);
          if (PriceId == key) {
            console.log(value);
            let newValue = value;
            price[i].innerHTML = newValue;
          }}
        
      } else {
        let itemToAdd = document.getElementById(PriceId);
      console.log(itemToAdd);
      
        let value = itemToAdd.nextElementSibling.nextElementSibling.firstElementChild.innerText;
       console.log(value);
        let newValue = value * quantity;
        price[i].innerHTML = newValue;
      }
    }
  
  }
  e.target.previousElementSibling.innerHTML = quantity;
  total();
}

/** function to calculate the total price */

function total() {
  let price = document.querySelectorAll("#cartPrice li");
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total += parseFloat(price[i].innerHTML);
  }
  let grandTotal = document.getElementById("total");
  grandTotal.innerHTML = "Total cost is:  £" + total;
}
/**this will produce a written list of the items
 * how many of each items and the total cost of all item  */
function checkout() {
  let items = document.getElementsByClassName("item ");
  let itemQuantity = document.querySelectorAll(" span");
  console.log(itemQuantity);
  let prices = document.querySelectorAll("cartPrice li");
  let total = document.getElementById("total");
  let list = document.createElement("ul");
  let itemsInCart = document.createElement("p");
  let quantity = 0;

  

  for (let i = 0; i < items.length; i++) {
    for(let x = 0; x < itemQuantity.length; x++){
      if(items[i].id == itemQuantity[x].previousElementSibling.parentElement.id 
        && itemQuantity[x].innerHTML > 0){
          
         
        

        let listItem = document.createElement("li");
        listItem.innerText = items[i].innerText;
        list.append(listItem);
        let num = parseInt(itemQuantity[i].innerText);

    console.log(num);
    quantity = quantity + num;
    console.log(quantity);
      }
      }
    }
   
  itemsInCart.append("You have " + quantity + " item(s) in your cart");
  let receipt = document.getElementById("receiptItems");
  receipt.appendChild(list);
  receipt.appendChild(itemsInCart);
  let totalCost = document.createElement("li");
  totalCost.id = "totalCost";
  totalCost.innerText = "Total Cost is: " + total.innerText;
  receipt.appendChild(totalCost);
  receipt.append("Thank you for shopping with us");
  receipt.style.visibility = "visible";
}
