$(document).ready(function() {
    
    
    // 120 max | 19 min
    // (max - min) + min to create specific range
    var target;
    var redGem; 
    var greenGem; 
    var blueGem; 
    var yellowGem; 
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    
    var startGame = function() {
        target = Math.floor(Math.random() * 101) + 19 ;
        console.log(target),
        
        redGem = Math.floor(Math.random() * 12) + 1 ; 
        console.log("redGem: " + redGem);
       
        greenGem = Math.floor(Math.random() * 12) + 1 ; 
        console.log("greenGem: " + greenGem);
        
        blueGem = Math.floor(Math.random() * 12) + 1 ; 
        console.log("blueGem: " + blueGem);
        
        yellowGem = Math.floor(Math.random() * 12) + 1 ; 
        console.log("yellowGem: " + yellowGem);

        totalScore = 0;
        $("#objective").html("Your target score is " + target)

    }

    startGame()

    $("#red").on("click", function () {
        totalScore += redGem;
        console.log("Current" + totalScore)
        if (totalScore > target) {
            console.log ("lost")
            losses++;
            startGame()
        } else if (totalScore === target) {
            console.log ("won")
            wins++;
            startGame();
        }
    })
    $("#green").on("click", function () {
        totalScore += greenGem;
        console.log("Current" + totalScore)
        if (totalScore > target) {
            console.log ("lost")
            losses++;
            startGame()
        } else if (totalScore === target) {
            console.log ("won")
            wins++;
            startGame();
        }
    })
    $("#blue").on("click", function () {
        totalScore += blueGem;
        console.log("Current" + totalScore)
        if (totalScore > target) {
            console.log ("lost")
            losses++;
            startGame()
        } else if (totalScore === target) {
            console.log ("won")
            wins++;
            startGame();
        }
    })
    $("#yellow").on("click", function () {
        totalScore += yellowGem;
        console.log("Current" + totalScore)
        $("#totalscore").text(totalScore)
        if (totalScore > target) {
            // console.log ("lost")
            losses++;
            $(".losses").text(losses)
            startGame();
            totalScore = 0;

        } else if (totalScore === target) {
            // console.log ("won")
            wins++;
            $(".wins").text(wins)
            startGame();
            totalScore = 0;

        }
    })
        // $(".class")

    
    $("#totalscore").text(totalScore)

    // function display() {
    //     $("#totalscore").text(totalScore)
    //     }
}
)
