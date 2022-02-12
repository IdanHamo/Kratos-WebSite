const emailInput = document.getElementById("email");
const emailInput2 = document.getElementById("email2");
function email() {
  if (emailInput.value === emailInput2.value) {
    alert("you register successfully");
  } else if (emailInput !== emailInput2) {
    alert("email not match");
  }
}
