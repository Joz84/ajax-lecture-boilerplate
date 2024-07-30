import Swal from 'sweetalert2';

console.log("Hello from JavaScript!");

const url = "https://reqres.in/api/register"

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email, password);

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        "email": email,
        "password": password
      })
    }

  fetch(url, options)
  .then((response) => {
    if (response.status === 200) {
      response.json()
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Bad job!",
        text: "You clicked the button!",
        icon: "error"
      });
    }
  })
  .then((data) => {
    console.log(data)
  })
})







