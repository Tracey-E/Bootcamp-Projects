


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