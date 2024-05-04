function generateFibonacci() {
  var numTerms = parseInt(document.getElementById("numTerms").value);
  var output = document.getElementById("output");
  
  // Validation
  if (isNaN(numTerms) || numTerms >= 100 || numTerms <= 0) {
    output.innerHTML = "Please enter a valid number of terms (less than 100).";
    return;
  }
  
  var fibonacci = [0, 1];
  for (var i = 2; i < numTerms; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  
  output.innerHTML = "<p>Fibonacci Sequence:</p><p>" + fibonacci.join(", ") + "</p>";
}