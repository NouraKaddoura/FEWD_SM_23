$('#nyc').click(nycGreeting);
$('#la').click(laGreeting);

function nycGreeting()
{
    $('#greeting').html("Welcome to the Big Apple!");
}

function laGreeting()
{
    $('#greeting').html("Welcome to Hollywood!");
}