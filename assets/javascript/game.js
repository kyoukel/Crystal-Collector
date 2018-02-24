

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


   // Generate random number btwn 19-120 to display on screen when game starts.
        // and when game restarts.
        // ---> insert number generated at "targetScore" id w/in "matchNumber" div.
    // ========================================================================
        //NOT NEEDED BUT I DID THIS ALL ON MY OWN. AND IT WORKED! KINDOF.//
        // for (var i = 0; i < 1; i++) {
        //     var generate1 = Math.floor(Math.random() * 120) + 1;
        //     result = generate1 + result;
        //     $("#targetScore").text(result)
        // }
        // console.log(generate1);
    // ======================================================================
    
    // create onclick event function to randomly generate crystal values btwn 1-12 when clicked.
        // and when game restarts.
        // ---> values are hidden until clicked.
        // ---> when clicked, their value is displays and inserted at span id "total-score" w/in "scoreHolder" div.
        
        function randomize(max, min) {
            return Math.floor(Math.random()*(max-min+1))+min; 
        }
        targetScore = randomize(120, 19);
            $("#targetScore").text(targetScore); 

        

    // create function when score matches exactly to increase wins by 1.
    // create function when score goes above random number to increase losses by 1.
        // ---> insert win number at span id "winCounter".
        // ---> insert loss number at span id "lossCounter".

    // create function that adds values together.
        // and displays total values at id "totalScore"

        function resetTotalScore() {
            totalScore = 0;
        }

    });

    randomize();
    resetTotalScore();

    // Without the help of TA and other students, I wouldn't have been able to piece it together.
    // Game doesn't reset score yet once won or lost or without refresh, but I am on the right track.
    // I signed up for the tutoring program. It's just going to take longer for me.

    
    














