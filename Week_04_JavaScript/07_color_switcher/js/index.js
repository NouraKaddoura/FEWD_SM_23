document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('grayButton').onclick = switchGray;

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  console.log("Switched to white");
}

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  console.log("Switched to gray");
}
