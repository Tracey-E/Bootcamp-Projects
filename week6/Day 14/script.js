function search(value) {
  document.querySelector("ul").classList.add("filtered");
  let li = document.querySelectorAll("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.value === "active") {
      li[i].classList.remove("active");
      console.log(li[i])
    }
  }

  if(value === "all") {
    document.querySelectorAll("li").forEach(function(li) {
      li.classList.add("active");
    });
  }
  document
    .querySelectorAll(`ul > [data-search~="${value}"]`)
    .forEach(function (item) {
      item.classList.add("active");
    });
}


/*function search(value) {
  alert(value);

  let parent = document.querySelector("ul")
  console.log(parent.classList)
  parent.classList.add("filtered")

  search.reset(parent);

  if(value !== "") {
  console.log(value)
    document.querySelectorAll(`ul > [data-search~="${value}"]`).forEach(function(item) {
        console.log(item);
        item.classList.add("active");
    });
  }else{
      parent.classList.remove("filtered");
  }

}

search.reset = function(container) {
  container.querySelectorAll(".active").forEach(function(item){
      item.classList.remove("active");
  });
  
}*/
