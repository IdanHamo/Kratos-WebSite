const emailInput = document.getElementById("email");
const emailInput2 = document.getElementById("email2");
function email() {
  const emaily = emailInput.value;
  const emaily2 = emailInput2.value;

  if (emaily === emaily2) {
    alert("you register successfully");
  } else {
    alert("email not match");
  }
}
