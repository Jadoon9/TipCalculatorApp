const calculateTip = () => {
  const bill = document.querySelector("#bill").value;
  const feedback = document.querySelector("#serviceFeedback").value;
  const billSharing = document.querySelector("#billSharing").value;
  const message = document.querySelector("#tip");
  //   const fb = feedback.options[feedback.selectedIndex].text;

  //checking for inputs validations
  if (bill === "" || bill === 0) {
    alert("Please enter bill");
    return;
  }
  if (billSharing === "" || billSharing === 0) {
    alert("Please enter bill sharing");
    return;
  }

  //calculateTip
  var total = (bill * feedback) / billSharing;

  document.getElementById("totalTip").style.display = "block";
  message.innerHTML = Math.floor(total);
};
