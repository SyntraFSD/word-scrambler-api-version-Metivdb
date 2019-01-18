const userInput = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submit-btn');
const resultContainer = document.querySelector('#result-container');




//AJAX FUNCTION

function sendData(event) {
  const currentText =  {text: userInput.value};
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleRequest);
  request.open('POST', 'http://connect4.pienter.space/api/scramble');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(currentText));
}

function handleRequest(event) {
  const request = event.target;
  if (request.readyState === 4) {
    const response = JSON.parse(request.responseText);
    if (request.status >= 200 && request.status < 300) {
     alert('Succes');
      resultContainer.textContent = response;
    } else {
      alert('Error');
    }
  }
}



// add click event listener to submitBtn
submitBtn.addEventListener('click', sendData);
// # add input event listener to userInput for counts

// ## add input event listener to userInput for realTimeScramble

