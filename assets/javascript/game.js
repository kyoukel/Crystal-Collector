

var x = 19
var y = 120

var generate1 = "";
result = "";
targetScore ="";
crystalVal ="";

var ruby,
    diamond,
    sapphire,
    emerald = crystalVal;

$(document).ready(function(){

    $(".crystals").on("click", function() {
        crystalVal = $(this).attr("value");
        console.log(crystalVal)
    })

        
 //MY FOR LOOP WORKS IN CONSOLE ONLY BUT DISPLAYS LARGER THAN MAX # 120 ON SCREEN.//
   // Generate random number btwn 19-120 to display on screen when game starts.
        // and when game restarts.
        // ---> insert number generated at "targetScore" id w/in "matchNumber" div.

        for (var i = 0; i < 1; i++) {
            var generate1 = Math.floor(Math.random() * 120) + 1;
            result = generate1 + result;
            $("#targetScore").text(result)
        }
        console.log(generate1);

    // create onclick event function to randomly generate crystal values btwn 1-12 when clicked.
        // and when game restarts.
        // ---> values are hidden until clicked.
        // ---> when clicked, their value is displays and inserted at span id "total-score" w/in "scoreHolder" div.
        
        function randomize(max, min) {
            return Math.floor(Math.random()*(max-min+1))+min;
            targetScore = randomize(120, 19);
            $("#targetScore").text(targetScore);  
        }
    
        totalScore = totalScore + parseInt(crystalVal);

    // create function when score matches exactly to increase wins by 1.
    // create function when score goes above random number to increase losses by 1.
        // ---> insert win number at span id "winCounter".
        // ---> insert loss number at span id "lossCounter".

    
    // create function that adds values together.
        // and displays total values at id "totalScore"

















    });















