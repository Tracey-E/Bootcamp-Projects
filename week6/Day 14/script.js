function search(value) {
  document.querySelector("ul").classList.add("filtered");
  let li = document.querySelectorAll("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.value === "active") {
      li[i].classList.remove("active");
      console.log(li);
    }
  }
  document
    .querySelectorAll(`ul > [data-search~="${value}"]`)
    .forEach(function (item) {
      item.classList.add("active");
    });
}
