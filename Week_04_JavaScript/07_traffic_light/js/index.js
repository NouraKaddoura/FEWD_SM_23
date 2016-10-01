document.getElementById('stopButton').onclick = turnRed;
document.getElementById('slowButton').onclick = turnYellow;
document.getElementById('goButton').onclick = turnGreen;

function turnRed() {
  document.getElementById('stopLight').style.backgroundColor = 'red';
}

function turnYellow() {
  document.getElementById('slowLight').style.backgroundColor = 'yellow';
}

function turnGreen() {
  document.getElementById('goLight').style.backgroundColor = 'green';
}

function resetLights() {
  document.getElementById('stopLight').style.backgroundColor = 'black';
  document.getElementById('slowLight').style.backgroundColor = 'black';
  document.getElementById('goLight').style.backgroundColor = 'black';
}