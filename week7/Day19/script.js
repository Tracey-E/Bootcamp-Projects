function upDateQrCode(size, value) {
  let code = document.getElementById("code");

  if (this.data === undefined) {
    this.size = 350;
    this.value = " abc";
  }
  code.src =
    "https://api.qrserver.com/v1/create-qr-code/?" +
    "size=" +
    size +
    "x" +
    size +
    "&data=" +
    value;

  let output = document.getElementById("output");

  let urlParams = new URLSearchParams(window.location.search);
  // alert(window.location.search)
  console.log(urlParams);

  output.innerHTML = urlParams.get("size");
}

fetch("data.json")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("fetch").innerHTML = data;
  });


  fetch("https://reqres.in/api/users" )
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("fetch").innerHTML = data;
  });
