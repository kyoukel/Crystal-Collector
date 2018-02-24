

var x = 19
var y = 120

var generate1 = "";
result = "";
targetScore ="";
crystalVal ="";

$(document).ready(function(){

   

    //MY FOR LOOP WORKS IN CONSOLE ONLY BUT NOT ON SCREEN.//
        for (var i = 0; i < 9; i++) {
            var generate1 = Math.floor(Math.random() * 120) + 1;
            result = generate1 + result;
            $("#start")
        }
        console.log(generate1);
    
    $(".crystals").on("click", function() {
        crystalVal = $(this).attr("value");
        console.log(crystalVal)
    })

        

   // Generate random number btwn 19-120 to display on screen when game starts.
        // and when game restarts.
        // ---> insert number generated at "start" id w/in "matchNumber" div.



    // create onclick event function to randomly generate crystal values btwn 1-12 when clicked.
        // and when game restarts.
        // ---> values are hidden until clicked.
        // ---> when clicked, their value is displays and inserted at span id "total-score" w/in "scoreHolder" div.
        function getRandomInt(min, max) {
            targetScore = getRandomInt(19, 120);
            $("#insertScore").text(targetScore);  
        }
    
        totalScore = totalScore + parseInt(crystalVal);

    // create function when score matches exactly to increase wins by 1.
    // create function when score goes above random number to increase losses by 1.
        // ---> insert win number at span id "winCounter".
        // ---> insert loss number at span id "lossCounter".

    
    // create function that adds values together.
        // and displays total values at id "totalScore"

















    });















