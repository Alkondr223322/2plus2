window.onload = function main() {
  const fistOperrandTextField = document.createElement("input");
  fistOperrandTextField.type = "text";
  fistOperrandTextField.size = "40";
  const secondOperrandTextField = document.createElement("input");
  secondOperrandTextField.type = "text";
  secondOperrandTextField.size = "40";
  const breakRow = document.createElement("br");
  const plusText = document.createElement("span");
  plusText.innerHTML = "<p> + </p>";
  const resultButton = document.createElement("input");
  resultButton.id = "butt";
  resultButton.type = "button";
  resultButton.size = "40";
  resultButton.value = "Посчитать";

  resultButton.onclick = function getResult() {
    if (document.getElementById("errorMessageOfFirstOperand") != null)
      document.getElementById("errorMessageOfFirstOperand").remove();
    if (document.getElementById("errorMessageOfSecondOperand") != null)
      document.getElementById("errorMessageOfSecondOperand").remove();
    if (document.getElementById("resultText") != null)
      document.getElementById("resultText").remove();

    const valueOfFirstInput = fistOperrandTextField.value.trim();
    const valueOfSecondInput = secondOperrandTextField.value.trim();
    const operand1 = parseInt(valueOfFirstInput, 10);
    const operand2 = parseInt(valueOfSecondInput, 10);

    const firstInputCheck =
      Number.isNaN(operand1) || operand1 != valueOfFirstInput;
    const secondInputCheck =
      Number.isNaN(operand2) || operand2 != valueOfSecondInput;

    if (firstInputCheck) {
      const errorMessage = document.createElement("div");
      errorMessage.id = "errorMessageOfFirstOperand";
      errorMessage.innerHTML = "<p>Это не число</p>";
      fistOperrandTextField.after(errorMessage);
    }
    if (secondInputCheck) {
      const errorMessage = document.createElement("div");
      errorMessage.id = "errorMessageOfSecondOperand";
      errorMessage.innerHTML = "<p>Это не число</p>";
      secondOperrandTextField.after(errorMessage);
    }
    if (secondInputCheck + firstInputCheck === 0) {
      const result = document.createElement("div");
      result.id = "resultText";
      result.innerHTML = operand1 + operand2;
      resultButton.after(result);
    }
  };

  document.body.appendChild(fistOperrandTextField);
  document.body.appendChild(plusText);
  document.body.appendChild(secondOperrandTextField);
  document.body.appendChild(breakRow);
  document.body.appendChild(resultButton);
};
