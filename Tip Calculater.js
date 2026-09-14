let btn = document.getElementById("btn");

btn.addEventListener("click", calculateTip);

function calculateTip() {
  let bill = document.getElementById("bill").value;
  let tipPercent = document.getElementById("tip").value;

  if (bill === "" || tipPercent === "") {
    alert("Please enter values");
    return;
  }

  let tipAmount = (bill * tipPercent) / 100;
  let total = Number(bill) + tipAmount;

  document.getElementById("result").innerHTML =
    "Tip: ₹" + tipAmount + "<br>Total: ₹" + total;
}
