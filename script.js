document
  .getElementById("ActionButton1")
  .addEventListener("click", function1Sum);
document
  .getElementById("ActionButton2")
  .addEventListener("click", function2Substraction);
document
  .getElementById("ActionButton3")
  .addEventListener("click", function3Multiply);
document
  .getElementById("ActionButton4")
  .addEventListener("click", function4Division);

document
  .getElementById("ActionButton5")
  .addEventListener("click", function5Factorial);

//Function 1
function function1Sum() {
  var input1 = document.getElementById("InputText1").value;
  var input2 = document.getElementById("InputText2").value;
  if (!(input1.length === 0) && !(input2.length === 0)) {
    if (!isNaN(input1) && !isNaN(input2)) {
      var result = Number(input1) + Number(input2);

      console.log(`Input 1: ${input1}`);
      console.log(`Input 2: ${input2}`);
      console.log(`Result: ${result}`);
    } else {
      console.log("Enter numbers only.");
    }
  } else {
    console.log("Please fill both inputs");
  }
}

//Function 2
function function2Substraction() {
  var input1 = document.getElementById("InputText1").value;
  var input2 = document.getElementById("InputText2").value;
  if (!(input1.length === 0) && !(input2.length === 0)) {
    if (!isNaN(input1) && !isNaN(input2)) {
      var result = Number(input1) - Number(input2);

      console.log(`Input 1: ${input1}`);
      console.log(`Input 2: ${input2}`);
      console.log(`Result: ${result}`);
    } else {
      console.log("Enter numbers only.");
    }
  } else {
    console.log("Please fill both inputs");
  }
}

//Function 3
function function3Multiply() {
  var input1 = document.getElementById("InputText1").value;
  var input2 = document.getElementById("InputText2").value;
  if (!(input1.length === 0) && !(input2.length === 0)) {
    if (!isNaN(input1) && !isNaN(input2)) {
      var result = Number(input1) * Number(input2);

      console.log(`Input 1: ${input1}`);
      console.log(`Input 2: ${input2}`);
      console.log(`Result: ${result}`);
    } else {
      console.log("Enter numbers only.");
    }
  } else {
    console.log("Please fill both inputs");
  }
}

//Function 4
function function4Division() {
  var input1 = document.getElementById("InputText1").value;
  var input2 = document.getElementById("InputText2").value;
  if (!(input1.length === 0) && !(input2.length === 0)) {
    if (!isNaN(input1) && !isNaN(input2)) {
      var result = Number(input1) / Number(input2);

      if (Number(input2) === 0) {
        console.log("You can’t divide /0.");
      } else {
        console.log(`Input 1: ${input1}`);
        console.log(`Input 2: ${input2}`);
        console.log(`Result: ${result}`);
      }
    } else {
      console.log("Enter numbers only.");
    }
  } else {
    console.log("Please fill both inputs");
  }
}

function function5Factorial() {
  var input1 = document.getElementById("InputText1").value;
  function factorial(x) {
    if (x === 0) {
      return 1;
    }
    return x * factorial(x - 1);
  }
  if (!(input1.length === 0)) {
    if (!isNaN(input1)) {
      try {
        if (Number(input1) < 0) {
          console.log("Only positive numbers are allowed!");
        } else {
          var result = factorial(Number(input1));

          if (result === Infinity) {
            console.log("Number is too big!");
          } else {
            console.log(`Input 1: ${input1}`);
            console.log(`Result: ${result}`);
          }
        }
      } catch (e) {
        console.log("Number is too big!");
      }
    } else {
      console.log("Enter numbers only.");
    }
  } else {
    console.log("Please fill input 1");
  }
}
