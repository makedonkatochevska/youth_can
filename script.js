const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

//error message const
const nameError = document.getElementById("name-error-message");
const emailError = document.getElementById("email-error-message");
const messageError = document.getElementById("message-error-message");

form.addEventListener("submit", (e) => {
  //name validation
  if (name.value === "" || name.value == null) {
    e.preventDefault();
    nameError.innerHTML = "Name is required";
  } else {
    nameError.innerHTML = "";
  }

  //email validation
  if (email.value === "" || email.value == null || !email.value.includes("@")) {
    e.preventDefault();
    if (email.value === "" || email.value == null) {
      emailError.innerHTML = "Email is required";
    } else {
      emailError.innerHTML = "Valid email is required";
    }
  } else {
    emailError.innerHTML = "";
  }

  //message validation
  if (
    message.value === "" ||
    message.value == null ||
    message.value.length < 10
  ) {
    e.preventDefault();

    if (message.value === "" || message.value == null) {
      messageError.innerHTML = "Message is required";
    } else {
      messageError.innerHTML = "Message must be at least 10 characters";
    }
  } else {
    messageError.innerHTML = "";
  }
});
