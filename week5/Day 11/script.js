
function addItem() {
  let parent = document.getElementById("list");
  parent.innerHTML = parent.innerHTML + "<li> New Item</li>";
if(this.nextRef == undefined) {
    this.nextRef = 1;
}
  let child = document.createElement("li");
    child.innerHTML = `New Item: <input  type='number' id='item${this.nextRef}' />`;
   
    this.nextRef = this.nextRef + 1;
   
    
    parent.appendChild(child);


} 

addItem.nextRef = 1;

function handleInput(e) {
    let input = e.target.value;
   
  
    let id =e.target.id;
    console.log(input,  id);
    

}


 
    const reveal = () => {
      document.getElementById("box").classList.toggle("active");
  
    };

    const close = () => {
      document.getElementById("box").classList.remove("active");
    };
