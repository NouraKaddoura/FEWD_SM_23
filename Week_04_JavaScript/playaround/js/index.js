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
  $('#saveButton').click(doSomething)

  function doSomething() {
    $('.alert').slideToggle()
    //$('li').attr('style','text-decoration: underline;');
    console.log("Just did something");
  }

  $('ul').children().css('color','gray');