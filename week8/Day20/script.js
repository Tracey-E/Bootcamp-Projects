function FontColorChange(value) {
  document.body.style.color = value;
}
/* get all sections first part of main*/
let content = document.querySelectorAll(" #content section ");
console.log(content);
let index = 0;
content.forEach(function (item) {
  console.log(item);

  let nav = document.querySelector("nav");
  nav.innerHTML += `<a onClick="indexContainer(${index})" href="#${index}">${item.id}</a>`;

  console.log(item);
  index = index + 1;
  console.log(index);
  //container.append(item).style.display = "block";
});

function indexContainer(value) {
  console.log(value);
  let ele = document
    .querySelectorAll(`  #content > *`)
    .forEach(function (item) {
      console.log(item);
      item.classList.remove("active");
    });
  let ele2 = document
    .querySelectorAll(`  #content > *`)
    [value].classList.add("active");
}

function BackgroundColorChange(value) {
  console.log(value);

  let ele = document.querySelector("main");
  console.log(ele);
  ele.style.backgroundColor = value;
  console.log(ele.style.backgroundColor);
}
