$('#performFunction').click(myMathFunction);

function myMathFunction()
{
    number = parseInt($('#number').val());

    result = 2 * number + 3;

    $('#result').html(result);
}