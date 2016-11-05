$('.alert').hide();
$(function(){
    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#orderButton').click(function(clickEvent){
        console.log("Order something", $('#order').val());
        
        var requestData = {
            "order":"eggs"
        }

        $.post("http://headshot.mockable.io/menu", JSON.stringify(requestData), function(response) {
            var message = response.message;

            $('#orderMessage').html(message);
            $('.alert').show();
        });
    });
});