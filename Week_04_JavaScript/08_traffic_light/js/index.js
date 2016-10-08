//Implement the red light using jQuery. Don't forget to add the script tags.
$(function(){

  $('#stopButton').click(function(){
    changeLight('top','pink');
  });

  $('#slowButton').click(function(){
    changeLight('middle','blue');
  });

  $('#goButton').click(function(){
    changeLight('bottom','purple');
  });

  function changeLight(position, color)
  {
    resetLights();
    $('#'+position).css('background-color',color);
  }

  function resetLights()
  {
    $('.bulb').css('background-color','black');
  }
});