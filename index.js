// First Dice..

var RandomNumber1= Math.floor(Math.random() * 6) + 1;

var diceImage1= "images/dice" + RandomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",diceImage1);

// Second Dice..

var RandomNumber2= Math.floor(Math.random()*6)+1;

var diceImage2= "images/dice" + RandomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

if(RandomNumber1 > RandomNumber2)
{
    document.getElementsByClassName("intro")[0].textContent="Player 1 Wins!!";
}
else if(RandomNumber2 > RandomNumber1)
{
    document.getElementsByClassName("intro")[0].textContent="Player 2 Wins!!";
}
else
{
    document.getElementsByClassName("intro")[0].textContent="Draw";
}