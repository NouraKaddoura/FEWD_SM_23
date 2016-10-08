/**
//JAVASCRIPT//
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
*/

//jQuery
$(function(){

  //###############
  /*
  $('#grayButton').click(doSomething);

  function doSomething(){
    $('body').css('backgroundColor','gray');
    console.log("grayButton has been clicked");
  }
  */
  //###############

  $('#grayButton').click(function(event){
    doSomething();
  });

  function doSomething()
  {
    $('body').css('backgroundColor','gray');
    console.log("grayButton has been clicked");
  }

  $('#whiteButton').click(function(){
    $('body').css('backgroundColor','white');
    console.log("whiteButton has been clicked");
  });

});

