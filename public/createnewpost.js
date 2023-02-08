
document.addEventListener('DOMContentLoaded', () => {
  var form = document.getElementById("newpostform");
  form.onsubmit = function (event) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData(form);
    //open the request
    xhr.open("POST", "/new");
    xhr.setRequestHeader("Content-Type", "application/json");

    //send the form data
    const data = JSON.stringify(Object.fromEntries(formData));
    console.log(data);
    xhr.send(data);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        form.reset(); //reset form after AJAX success or do something else
      }
    };
    //Fail the onsubmit to avoid page refresh.
    return false;
  };
});


