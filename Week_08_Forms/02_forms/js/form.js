$(function(){
    $('#emailForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#send').click(function(clickEvent){
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        $('#strEmail').html(email);
        $('#strSubject').html(subject);
        $('#strMessage').html(message);
    });
});