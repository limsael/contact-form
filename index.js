const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  statusTxt.style.color = "#0d6efd";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest(); // create new XMLHttpRequest

  xhr.open("POST", "message.php", true); // sending POST request to message.php file

  xhr.onload = () => {
    // once ajax loaded
    if (xhr.readyState == 4 && xhr.status == 200) {
      // if ajax response status is 200 & readyState is 4 means success there is no any error

      let response = xhr.response; // storing ajax response in a response variable

      if (
        response.indexOf("Email and message are required") != -1 ||
        response.indexOf("Invalid email address") ||
        response.indexOf("failed to send your message")
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();

        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }

      statusTxt.textContent = response;
    }
  };

  let formData = new FormData(form); // creating new form data obj. this obj is used to send form data

  xhr.send(formData); // sending form data
});
