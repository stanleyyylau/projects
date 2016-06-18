//let's create some global variables
var simonSteps = [];
var mySteps = [];
var intervalId;
var test; //this is use by goSteps to walk
var lose = false;
var strictMode = false;

//these are for i min count down function
var countDownOn = false;
var startTime;
var endTime;
var timeDifference;

function clearAllStep() {
  console.log("hi clear all function");
  $("#boxRed").removeClass("onPress");
  $("#boxBlue").removeClass("onPress");
  $("#boxYellow").removeClass("onPress");
  $("#boxGreen").removeClass("onPress");
}

//simon play
function simonPlay() {

  if (simonSteps.length == 20) {
    console.log("you fuck up");
    return myTurn();
  }
  if (simonSteps.length != mySteps.length) {
    return myTurn();
  }
  var step = Math.floor(Math.random() * 4 + 1); //step will be from 1-4;
  while (step == simonSteps[simonSteps.length - 1]) {
    step = Math.floor(Math.random() * 4 + 1); //step will be from 1-4;
  }
  simonSteps.push(step);
  $("#stepCount").text(simonSteps.length);
  mySteps = [];
  console.log("now simon's step are " + simonSteps);
  test = 0;
  goSteps();
}

function goSteps() {
  //when u lose and simon has show you again his steps
  if (lose && test == simonSteps.length) {
    $("#boxRed").removeClass("onPress");
    $("#boxBlue").removeClass("onPress");
    $("#boxYellow").removeClass("onPress");
    $("#boxGreen").removeClass("onPress");
    mySteps = [];
    return myTurn();
  }
  if (test >= simonSteps.length) {
    $("#boxRed").removeClass("onPress");
    $("#boxBlue").removeClass("onPress");
    $("#boxYellow").removeClass("onPress");
    $("#boxGreen").removeClass("onPress");
    return simonPlay();
  }
  var elem;
  $("#boxRed").removeClass("onPress");
  $("#boxBlue").removeClass("onPress");
  $("#boxYellow").removeClass("onPress");
  $("#boxGreen").removeClass("onPress");
  if (simonSteps[test] == 1) elem = $("#boxRed");
  if (simonSteps[test] == 2) elem = $("#boxBlue");
  if (simonSteps[test] == 3) elem = $("#boxYellow");
  if (simonSteps[test] == 4) elem = $("#boxGreen");
  //now elem is the step that's going on
  var boxbox = elem.attr("id");
  var soundId = "sound" + boxbox;
  document.getElementById(soundId).play();
  //finish playing the sound
  elem.addClass("onPress");
  test++;
  console.log("we outputing the " + test + "th element of simonSteps");
  window.setTimeout(goSteps, 1000);
}

function myTurn() {
  //when it's your turn, the countdown will work
  countDownOn = true;
  startTime = Date.now();
  endTime = startTime + 2000;

  // if you win
  if (mySteps.length == 20 && simonSteps.length == 20) {
    alert("you fucking win");
    simonSteps = [];
    mySteps = [];
    lose = false;
    $("#startReset").text("Start");
    return;
  }
  //add some event lister
  var redbox = document.getElementById("boxRed");
  redbox.addEventListener("click", beingClick);
  var bluebox = document.getElementById("boxBlue");
  bluebox.addEventListener("click", beingClick);
  var yellowbox = document.getElementById("boxYellow");
  yellowbox.addEventListener("click", beingClick);
  var greenbox = document.getElementById("boxGreen");
  greenbox.addEventListener("click", beingClick);
}

function checkAnswer() {

  for (i = 0; i < mySteps.length; i++) {
    if (mySteps[i] != simonSteps[i]) {
      alert("you lose!!!");
      //when u lose,  i will see if strict mode is on, if on, clear all shit and start again;
      if (strictMode) {
        simonSteps = [];
        mySteps = [];
        test = 0;
        return simonPlay();
      } else {
        test = 0;
        lose = true;
        return goSteps();
      }
    }
  }

  if (mySteps.length != simonSteps.length) {
    return myTurn();
  } else {
    window.setTimeout(simonPlay, 1200);
  }
}

function beingClick(e) {
  //after click, cancle that countdown
  countDownOn = false;

  var ele = e.target;
  var number;
  var eleId = ele.getAttribute("id");
  if (eleId == "boxRed") number = 1;
  if (eleId == "boxBlue") number = 2;
  if (eleId == "boxYellow") number = 3;
  if (eleId == "boxGreen") number = 4;
  mySteps.push(number);
  console.log("my steps are now " + mySteps);
  ele.setAttribute("class", "onPress gameBox");
  //play sound when it's clicked
  var boxbox = ele.getAttribute("id")
  var soundId = "sound" + boxbox;
  document.getElementById(soundId).play();
  //finish playing sound
  window.setTimeout(function() {
    ele.setAttribute("class", "gameBox")
  }, 100)
  return checkAnswer();
}

function startResetBtn(e) {
  var ele = e.target;
  if (ele.innerText == "Start") {
    ele.innerText = "Reset";
    return simonPlay();
  } else {
    $("#stepCount").text("");
    test = 0;
    simonSteps = [];
    mySteps = [];
    lose = false;
    return simonPlay();
  }
}

function strictModeBtn(e) {
  var ele = e.target;
  if (ele.innerText == "Strict Mode") {
    ele.innerText = "On Strict Mode";
    strictMode = true;
  } else {
    ele.innerText = "Strict Mode";
    strictMode = false;
  }
}

function countDown() {
  if (countDownOn == true) {
    console.log("you in fucking countdown");
    startTime = Date.now();
    timeDifference = endTime - startTime;
    console.log(timeDifference);
    if (startTime > endTime) {
      console.log("fuck fuck fuck");
      alert("you fuck up the 2 second coundown");
      if (strictMode) {
        simonSteps = [];
        mySteps = [];
        test = 0;
        countDownOn = false;
        return simonPlay();
      } else {
        countDownOn = false;
        test = 0;
        return goSteps();
      }
    }
  }
}

//when the document is ready, do this
$(document).ready(function() {
  window.setInterval(countDown, 1);
  document.getElementById("startReset").addEventListener("click", startResetBtn);
  document.getElementById("strictMode").addEventListener("click", strictModeBtn);
});
