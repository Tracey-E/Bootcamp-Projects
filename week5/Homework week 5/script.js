/** get the active item and on click go to the prev item */
function prev() {
  let current = document.querySelector(".active");
  let count = document.querySelector("span");

  if (count.innerText === "1") {
    alert("you have reached the end");
  } else {
    current.classList.remove("active");
    current.style.visibility = "hidden";
    current.previousElementSibling.classList.add("active");
    let num = parseInt(count.innerText);
    num--;
    count.innerText = num;
  }
}

/** get active item on click go to next item */

function next() {
  let current = document.querySelector(".active");
  let count = document.querySelector("span");

  if (count.innerText === "4") {
    alert("you have reached the end");
  } else {
    let num = parseInt(count.innerText);
    num++;
    count.innerText = num;
    current.classList.remove("active");
    current.nextElementSibling.classList.add("active");
  }
}
