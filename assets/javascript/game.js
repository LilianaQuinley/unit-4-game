

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

/// ONCLICK Give the each gem a random number  

    $(".diamond").on("click", function onGemsClick(){
        $(".diamond").text(diamondRandomNumber);  
        console.log(this)
    });
    $(".emerald").on("click", function onGemsClick(){
        $(".emerald").text(emeraldRandomNumber);  
        console.log(this)
    });
    $(".ruby").on("click", function onGemsClick(){
        $(".ruby").text(RubyRandomNumber);  
        console.log(this)
    });
    $(".saphire").on("click", function onGemsClick(){
        $(".saphire").text(SaphireRandomNumber);  
        console.log(this)
    });



});







