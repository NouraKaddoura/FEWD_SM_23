function greetingFunction(city)
{
    $('#greeting').html("Welcome to " + city);
}

//This WILL work BEST!
$('button').click(function(){
    var buttonClicked = $(this);

    var message = "Welcome to " + buttonClicked.html();

    $('#greeting').html(message);
    //$('#greeting').html("Welcome to " + $(this).html());
});

$('.states').click(function(){
    var message = "<br/> This is a state";

    $('#greeting').append(message);
});