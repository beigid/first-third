const checkboxes = document.querySelectorAll("input[type=checkbox]");
const submit = document.querySelector(".submit");

function getChecked() {
  var checked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (checkbox.checked) {
        checked.push(checkbox.value);
    }
     return checked;
  }
}

submit.addEventListener("click", function() {
  let checked = getChecked();
  console.log(checked);
});

