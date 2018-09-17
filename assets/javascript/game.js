
var wins = 0;
var losses = 0;
var totalScore = 0;

$( document ).ready(function() {
    console.log( "ready!" );

//// SELECT A RANDOM NUMBER FROM 19 TO 120:

    var randomNumber = randomNumberFromRange(19, 120);
    function randomNumberFromRange(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    console.log(randomNumber);

//// DISPLAY  THE NEW NUMBER ON NEW NUMBER AREA
    $("#newGame").text(randomNumber);                 

//// SELECT A RANDOM NUMBER FROM 1-12 FOR EACH CRYSTAL

    var diamondRandomNumber = randomNumberFromRange(1, 12);
    var emeraldRandomNumber = randomNumberFromRange(1, 12);
    var RubyRandomNumber = randomNumberFromRange(1, 12);
    var SaphireRandomNumber = randomNumberFromRange(1, 12);

/// CREATED A FUNCTION TO ADD THE SCORE FOR EACH CRYSTAL SELECTED

    function AddingtotalScore(ChrystalChoice) {
        totalScore = totalScore + ChrystalChoice;     
         console.log(totalScore);
        //// DISPLAY  THE TOTALSCORE  ON TOTAL SCORE AREA
        $("#addTotal").text(totalScore);     
        

    // WINN /LOSS 

        if (totalScore === randomNumber) {
            wins++;
            $("#AlertwinnLoss").html("<p>you win!</p>");
            $("#wins").html(wins);
            resetGame();
        }

        else if (totalScore > randomNumber) {
            losses++;
            $("#AlertwinnLoss").html("<p>you lost!</p>");
            $("#losses").html(losses);
            resetGame();
        }
    }

    function resetGame() {
            randomNumber = randomNumberFromRange(19, 120);
            diamondRandomNumber = randomNumberFromRange(1, 12);
            emeraldRandomNumber = randomNumberFromRange(1, 12);
            RubyRandomNumber = randomNumberFromRange(1, 12);
            SaphireRandomNumber = randomNumberFromRange(1, 12);
            totalScore = 0;   

             // updated HTML page
            $("#newGame").text(randomNumber); 
            $("#addTotal").text("0"); 
        }

/// ONCLICK Give the each gem a random number  

    $(".diamond").on("click", function onGemsClick(){
       AddingtotalScore(diamondRandomNumber);  
        console.log(this)
    });
    $(".emerald").on("click", function onGemsClick(){
        AddingtotalScore(emeraldRandomNumber);  
        console.log(this)
    });
    $(".ruby").on("click", function onGemsClick(){
        AddingtotalScore(RubyRandomNumber)  
        console.log(this)
    });
    $(".saphire").on("click", function onGemsClick(){
        AddingtotalScore(SaphireRandomNumber) 
        console.log(this)
    });


});


  
  
