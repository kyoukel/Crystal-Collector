var wins = 0
var losses = 0

var generate1 = "";
var result = "";
var targetScore ="";
var crystalVal ="";
var totalScore = 0;

var ruby,
    diamond,
    sapphire,
    emerald = crystalVal;

$(document).ready(function(){

    resetTotalScore();

    $(".crystals").on("click", function() {
        crystalVal = $(this).attr("value");
        totalScore = totalScore + parseInt(crystalVal);
        $('#insertScore').text(totalScore);
        if (totalScore === targetScore) {
            wins++;
            $('#winCounter').text(wins);
        } else if (totalScore > targetScore) {
            losses++;
            $('#lossCounter').text(losses);
        }
    });

        $('#ruby').attr('value', randomize(12, 1));
        $('#diamond').attr('value', randomize(12, 1));
        $('#sapphire').attr('value', randomize(12, 1));
        $('#emerald').attr('value', randomize(12, 1));
        
        function randomize(max, min) {
            return Math.floor(Math.random()*(max-min+1))+min; 
        }
        targetScore = randomize(120, 19);
            $("#targetScore").text(targetScore); 

        function resetTotalScore() {
            totalScore = 0;
        }

    });

    randomize();
    resetTotalScore();

    // Game doesn't reset score yet once won or lost without refresh.

    
    














