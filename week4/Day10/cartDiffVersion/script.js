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




  function  showChange(e) {
    console.log(e)
    document.getElementById("valueBox").innerText=e
}
