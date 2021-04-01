/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const times = time.split('\:').join('')
  const parsed = parseInt(times)
  if (parsed < 1200) {
    return `Good Morning`;
  }
  else if (parsed >= 1200 && parsed <= 1700 ) {
  return `Good Afternoon`;
  }
  else {
    return `Good Evening`;
  }
}

function displayMessage(arg) {
  document.getElementById('greeting').innerText = arg;
}