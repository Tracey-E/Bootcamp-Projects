const form = document.getElementsByTagName("form")[0];

const names = document.getElementById("name");
const email = document.getElementById("email");

form.addEventListener("input", function (e) {
  if (names.value.length > 0 && email.value.length > 0) {
    var output = document.getElementById("results");
    output.innerHTML =
      "Thank you for your submission! " +
      " " +
      names.value +
      " " +
      "we will get back to you shortly. on the email address: " +
      email.value;
  }
});
