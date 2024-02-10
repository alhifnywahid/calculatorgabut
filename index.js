const button = document.querySelectorAll(".nine");
const display = document.querySelector("input");
const symbol = ["×", "÷", "-", "+"];
let output = "";
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.innerHTML === "Del") {
      display.value = display.value.toString().slice(0, -1);
    } else if (button.innerHTML === "AC") {
      display.value = "";
    } else if (symbol.includes(display.value.charAt(display.value.length - 1)) && symbol.includes(button.innerHTML)) {
      // no more night
    } else if (button.innerHTML == "=") {
      if (cekCocok(display.value, symbol)){
        display.value = "I LOVE YOU😘😘😘"
      }
    } else { 
      display.value += button.innerHTML;
    }
  });
});

function cekCocok(string, array) {
  for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (string[i] === array[j]) {
              return true;
          }
      }
  }
  return false;
}