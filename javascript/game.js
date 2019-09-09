$(document).ready(function() {


// 120 max | 19 min
// (max - min) + min to create specific range
    var target = Math.floor(Math.random() * 101) + 19 ;
    console.log(target)

    var random = Math.floor(Math.random() * 12) + 1 ; 
    // console.log(random)

    // randomTotal = random + random + random + random + random until random <>= target
    

$("#red").on("click", function () {
    alert("clicked the red gem.");
})
$("#green").on("click", function () {
    alert("clicked the red gem.");
})
$("#blue").on("click", function () {
    alert("clicked the red gem.");
})
$("#yellow").on("click", function () {
    random
    alert("clicked the red gem.");
})

$("#objective").text("Your target is " + target)
$("#scoreboard").text("put scoreboard here")
$("#totalscore").text(random)
    }
)