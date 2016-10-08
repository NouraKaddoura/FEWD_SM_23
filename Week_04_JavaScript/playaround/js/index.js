//Implement the red light using jQuery. Don't forget to add the script tags.
/*
  Play with:
  .click
  .slideToggle() 
  .hide()
  .show()
  .slideUp()
  .slideDown()
  .children()
  .attr()

  For Example:
*/
$(function(){
  $('#saveButton').click(function(){
    console.log("SAVE!");
  });

  $('#dismissButton').click(function(){
    $('.alert').hide();
    $('li').attr('style','text-decoration: underline;');
    console.log("Just did something");
  })

  $('#showButton').click(function(){
    $('.alert').show();
  });

  $('ul').children().css('color','gray');
});