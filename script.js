window.onload = function(){
  fistOperrandTextField = document.createElement("input");
  fistOperrandTextField.type = 'text';
  fistOperrandTextField.size="40";
  secondOperrandTextField = document.createElement("input");
  secondOperrandTextField.type = 'text';
  secondOperrandTextField.size="40";
  breakRow = document.createElement('br');
  plusText = document.createElement("span");
  plusText.innerHTML = '<p> + </p>';
  resultButton = document.createElement('input'); 
  resultButton.id = 'butt';
  resultButton.type = 'button';
  resultButton.size = '40';
  resultButton.value = 'Посчитать';

  resultButton.onclick = function(){
    if(document.getElementById("errorMessageOfFirstOperand")!=null)document.getElementById("errorMessageOfFirstOperand").remove();
    if(document.getElementById("errorMessageOfSecondOperand")!=null)document.getElementById("errorMessageOfSecondOperand").remove();
    if(document.getElementById("resultText")!=null)document.getElementById("resultText").remove();

    let valueOfFirstInput = fistOperrandTextField.value.trim();
    let valueOfSecondInput = secondOperrandTextField.value.trim();
    let operand1 = parseInt(valueOfFirstInput, 10);
    let operand2 = parseInt(valueOfSecondInput, 10);
    let firstInputCheck = isNaN(operand1) || operand1.toString().length !== valueOfFirstInput.length;
    let secondInputCheck = isNaN(operand2) || operand2.toString().length !== valueOfSecondInput.length

    if(firstInputCheck){
      let errorMessage = document.createElement("div");
      errorMessage.id= "errorMessageOfFirstOperand";
      errorMessage.innerHTML = "<p>Это не число</p>";
      fistOperrandTextField.after(errorMessage);
    }
    if(secondInputCheck){
      let errorMessage = document.createElement("div");
      errorMessage.id= "errorMessageOfSecondOperand";
      errorMessage.innerHTML = "<p>Это не число</p>";
      secondOperrandTextField.after(errorMessage);
    }
    if(secondInputCheck + firstInputCheck == 0){
      let result = document.createElement("div");
      result.id= "resultText";
      result.innerHTML = operand1 + operand2;
      resultButton.after(result);
    }
  };

  document.body.appendChild(fistOperrandTextField);
  document.body.appendChild(plusText);
  document.body.appendChild(secondOperrandTextField);
  document.body.appendChild(breakRow);
  document.body.appendChild(resultButton);
}