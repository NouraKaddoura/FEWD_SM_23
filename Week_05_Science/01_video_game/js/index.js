/**
Step #1 - Pseudocode
- Let's write the pseudocode for this
- When I click the reset button, total is set to 100
- When I click "Damage", 1 is subtracted from the total
- When I click "Power Up", 5 is added to the total
- When I click "Elixir", 10 is added to the total
- How do we know what the total is?  Where do we store it? 
- Output total to the screen

Step #2 
- declare our variables
- think through our event listeners
- determine functions we will use

Step #3
- write them out and test as we go 

**/
var total = 100;

$('#reset').click(reset);
$('#damage').click(takeDamage);
$('#power-up').click(getPowerUp);
$('#elixir').click(drinkElixir);

function reset()
{
  total = 100;
  $('#health').html(total);
}

function takeDamage()
{
  total = total - 1;
  $('#health').html(total);
}

function getPowerUp()
{
  total = total + 5;
  $('#health').html(total);
}

function drinkElixir()
{
  total = total + 10;
  $('#health').html(total);
}