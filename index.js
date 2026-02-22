const allButtonEls = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < allButtonEls.length; i++) {
  allButtonEls[i].addEventListener("click", () => {
    const buttonValue = allButtonEls[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "click for bruh") {
      outputNormalBruh();
    } else if (buttonValue === "bruhh") {
      outputBruhh();
    } else if (buttonValue === "bruh") {
      outputRedBruh();
    } else if (buttonValue === "500") {
      output500();
    } else {
      appendValue(buttonValue);
    }
  });
}

function outputNormalBruh() {
  inputFieldEl.value = "bruh";
}

function outputBruhh() {
  inputFieldEl.value = "bruh but in rainbow";
}

function outputRedBruh() {
  inputFieldEl.value = "bruh but in red";
}

function output500() {
  inputFieldEl.value = "this is the number five hundred";
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
