// Greeting alert on page load
window.onload = function () {
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  alert(greeting);
};

// Calculator functionality
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").innerText = `Result: ${result}`;
  });

// Toggle dark/light mode
document.getElementById("colorButton").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
