//This will NOT work
$('#nyc').click(greetingFunction('New York'));
$('#la').click(greetingFunction('Los Angeles'));

function greetingFunction(city)
{
    $('#greeting').html("Welcome to " + city);
}

//This WILL work
/*
$('#nyc').click(function(){
    greetingFunction('New York');
})
$('#la').click(function(){
    greetingFunction('Los Angeles');
});
*/

//This WILL work BEST!
/*
$('button').click(function(){
    $('#greeting').html("Welcome to " + $(this).html());
})
*/