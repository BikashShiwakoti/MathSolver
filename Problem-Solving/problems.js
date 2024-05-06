
function getChoice() {
    const input = document.getElementById('q1_input').value;
    const output = document.getElementById('q1_output');

if(!isNaN(input)){
    let Number = parseInt(input);
    
    if(Number === 0 || (Number >= 13 && Number <= 17)){
        output.value = "In Range";
    }else{
        output.value = "Out of range";
    }
} else{
    output.value = "Invalid input!!";
}
}

function perimAndSquare() {
    const input = document.getElementById('g1q3_input').value;

    if(!isNaN(input)){
        let side = parseFloat(input);

        if(side>=0){
            document.getElementById('g1q3_output').value = "Perimeter is" + (4*side);
            document.getElementById('g1q3_output').value += "\nSquare is" + (side*side);
        }
    }else{
        document.getElementById('g1q3_output').value = "Invalid input";
    }
}

//Group 2 question 1 script




function checkVowel() {
    let g2q1_input = document.getElementById('g2q1_input').value.toLowerCase();
    let g2q1_output = document.getElementById("g2q1_output");
    g2q1_output.innerHTML = "";
  
    let vowel = "aeiou";
  
    for (let i = 0; i < g2q1_input.length; i++) {
      let isVowel = false;
      for (let j = 0; j < vowel.length; j++) {
        if (g2q1_input[i] === vowel[j]) {
          isVowel = true;
          break;
        }
      }
      if (isVowel) {
        g2q1_output.innerHTML += "A Vowel ";
      } else if (g2q1_input[i] === 'y') {
        g2q1_output.innerHTML += "Sometimes ";
      } else {
        g2q1_output.innerHTML += "Not a Vowel ";
      }
    }
  }


  //Group 2 question 3

  function findFactorial(){
    let g2q3_input = document.getElementById('g2q3_input').value;

    let g2q3_output = document.getElementById('g2q3_output');
    g2q3_output.innerHTML= "";
    let factorial;

    if(!isNaN(g2q3_input)){
        g2q3_input = parseInt(g2q3_input);
        if(g2q3_input > 0){
            factorial = 1;
            for(let i=1; i<=g2q3_input; i++){
                factorial *= i;
            }
            g2q3_output.innerHTML += factorial;
        } else{
            g2q3_output.innerHTML += "Cannot compute fractional Value."
        }
    }
  }



  //Group 3 question 3

  // Function to solve the equation
function solveEquation() {
    let g3q1_input1 = document.getElementById("g3q1_input1").value;
    g3q1_input1 = g3q1_input1.replace(/\s/g, '');
  
    let operatorIndex = g3q1_input1.search(/[+\-*/%]/);
    let operator = g3q1_input1.charAt(operatorIndex);
    let num1 = parseFloat(g3q1_input1.substring(0, operatorIndex));
    let num2 = parseFloat(g3q1_input1.substring(operatorIndex + 1));
  
    let g3q1_output = document.getElementById("g3q1_output");
  
    switch (operator) {
      case '+':
        g3q1_output.value = num1 + num2;
        break;
      case '-':
        g3q1_output.value = num1 - num2;
        break;
      case '*':
        g3q1_output.value = num1 * num2;
        break;
      case '/':
        g3q1_output.value = num1 / num2;
        break;
      case '%':
        g3q1_output.value = num1 % num2;
        break;
      default:
        g3q1_output.value = "Invalid formula";
    }
  }
  
  // Attach the solveEquation function to the input element's onchange event
  document.getElementById("g3q1_input1").addEventListener("change", solveEquation);
  
  



