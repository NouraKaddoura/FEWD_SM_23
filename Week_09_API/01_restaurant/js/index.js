$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){

        $.getJSON("http://headshot.mockable.io/restaurant", function(response) {
            var name = response.name;
            
            $('#apiResponse').html(name);
        });

    });
});