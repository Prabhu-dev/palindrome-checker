let textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');
let resultWrapper = document.getElementById('result-wrapper');

function isPalindrome() {
  if(textInput.value ==='') {
    resultWrapper.style.display='block';
    resultText.innerHTML="Please input a value";    
    return;
  }  

  const resultString = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let palindrome = true;

  for(let i=0; i < Math.floor(resultString.length/2);i++) {
    if(resultString[i] !== resultString[resultString.length - 1 - i]){
      palindrome = false;
      break;
    }
  }

  if(palindrome) {
    resultWrapper.style.display='block';
    resultText.innerHTML = textInput.value + " is a palindrome";
    textInput.value = "";
  } else {
    resultWrapper.style.display='block';
    resultText.innerHTML = textInput.value + " is not a palindrome";
    textInput.value = "";
  }
}

checkButton.addEventListener("click", isPalindrome);