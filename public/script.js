var level = 1
var colors = ["red", "blue", "yellow", "green"]
var pattern = []
var choosenColors = []
$(document).keypress(function(event) {
  if (event.key == "a") {
    $("#level-title").text("Level " + level)
    selectColors()
    userColors()
    $(document).off("keypress")
  }
})
function selectColors() {
  var rand = Math.floor((Math.random() * 4))
  var btn = colors[rand]
  pattern.push(btn)
  $("." + btn).animate({
    opacity: 0.5
  }).animate({
    opacity: 1
  })
  playsound(btn)
}
function userColors() {
  $(".btn").click(function() {
    var choosenColor = this.id
    choosenColors.push(choosenColor)
    $("." + choosenColor).addClass("pressed")
    setTimeout(function() {
      $("." + choosenColor).removeClass("pressed")
    }, 100)
    check()
    playsound(choosenColor)
  })
}
function check() {
  if (choosenColors[choosenColors.length - 1] !== pattern[choosenColors.length - 1]) {
    $(".btn").off("click")
    $("body").addClass("game-over")
    setTimeout(function(){ $("body").removeClass("game-over") , 100})
    var audio = new Audio("sounds/wrong.mp3")
    audio.play()
    pattern =[]
    choosenColors = []
    $("h1").text("Game over, press any key to restart.")
    $(document).keypress(function(){
      level = 1
      $("#level-title").text("Level " + level)
      selectColors()
      userColors()
      $(document).off("keypress")
    })
  }
  else if(choosenColors.length == pattern.length){
    level++
    $("#level-title").text("Level " + level)
    selectColors()
    choosenColors = []
  }
}
function playsound(sound){
  switch (sound) {
    case "red":
      var audio = new Audio('sounds/red.mp3');
      audio.play()
      break;
    case "blue":
      var audio = new Audio('sounds/blue.mp3');
      audio.play()
      break;
    case "yellow":
      var audio = new Audio('sounds/yellow.mp3');
      audio.play()
      break;
    case "green":
      var audio = new Audio('sounds/green.mp3');
      audio.play()
      break;
    default:
      alert("Audio is not working.")
  }
}
