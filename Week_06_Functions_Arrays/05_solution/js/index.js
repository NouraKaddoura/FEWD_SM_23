var computerScore = 0;
var myScore = 0;

$('button').click(function(){

    var myPlay = $(this).val();
    var computerPlay = getComputerPlay();
    console.log(myPlay, computerPlay);

    if(myPlay==computerPlay)
    {
        //do nothing
    } else if(myPlay=="rock") {
        if(computerPlay=="paper")
        {
            computerScores();
        } else {
            iScore();
        }
    } else if(myPlay=="paper") {
        if(computerPlay=="scissors")
        {
            computerScores();
        } else {
            iScore();
        }
    } else if(myPlay=="scissors") {
        if(computerPlay=="rock")
        {
            computerScores();
        } else {
            iScore();
        }
    }
});

function getComputerPlay() {
 var plays = ['rock', 'paper', 'scissors'];
 var play = plays[Math.floor(Math.random() * plays.length)];
 return play;
}

function computerScores()
{
    computerScore++;
    $('#computer-score').html(computerScore);
}

function iScore()
{
    myScore++;
    $('#my-score').html(myScore);
}