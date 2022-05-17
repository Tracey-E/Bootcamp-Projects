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
  amountDiv.id = "amountDiv";
  amount.appendChild(amountDiv);
  amountDiv.appendChild(minusButton);
  amountDiv.appendChild(quantityCounter);
  amountDiv.appendChild(plusButton);
  amountDiv.id = id;
}

function addToCart(e) {
  console.log(e.target.id);
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
  let newItemName = document.createElement("li");
  newItemName.innerText = itemName;
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
        let value = price[i].innerHTML;
        let newValue = value / 2;
        price[i].innerHTML = newValue;
      }
    }
  }
  total();
}

function addItemCount(e) {
  console.log("plus");
  let PriceId = e.target.parentElement.id;
  let price = document.querySelectorAll("#cartPrice li");
  for (let i = 0; i < price.length; i++) {
    if (price[i].id == PriceId) {
      let value = price[i].innerHTML;
      let newValue = value * 2;
      price[i].innerHTML = newValue + ".00";
    }
  }
  total();
}

function total() {
  let price = document.querySelectorAll("#cartPrice li");
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total += parseFloat(price[i].innerHTML);
  }
  let grandTotal = document.getElementById("total");
  grandTotal.innerHTML = "£" + total;
}
