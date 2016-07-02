var takenPos = [];
var playerCom;
var player;
var again = false;

function whichPlayerWin() {
        //let's deal with if O wins
        if ($("#cell1").text() == "O" && $("#cell2").text() == "O" && $("#cell3").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell4").text() == "O" && $("#cell5").text() == "O" && $("#cell6").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell7").text() == "O" && $("#cell8").text() == "O" && $("#cell9").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell1").text() == "O" && $("#cell4").text() == "O" && $("#cell7").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell2").text() == "O" && $("#cell5").text() == "O" && $("#cell8").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell3").text() == "O" && $("#cell6").text() == "O" && $("#cell9").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell1").text() == "O" && $("#cell5").text() == "O" && $("#cell9").text() == "O") {
            alert("O wins the game");
            return true;
        }
        if ($("#cell3").text() == "O" && $("#cell5").text() == "O" && $("#cell7").text() == "O") {
            alert("O wins the game");
            return true;
        }
        //let's deal with if X wins
        if ($("#cell1").text() == "X" && $("#cell2").text() == "X" && $("#cell3").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell4").text() == "X" && $("#cell5").text() == "X" && $("#cell6").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell7").text() == "X" && $("#cell8").text() == "X" && $("#cell9").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell1").text() == "X" && $("#cell4").text() == "X" && $("#cell7").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell2").text() == "X" && $("#cell5").text() == "X" && $("#cell8").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell3").text() == "X" && $("#cell6").text() == "X" && $("#cell9").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell1").text() == "X" && $("#cell5").text() == "X" && $("#cell9").text() == "X") {
            alert("X wins the game");
            return true;
        }
        if ($("#cell3").text() == "X" && $("#cell5").text() == "X" && $("#cell7").text() == "X") {
            alert("X wins the game");
            return true;
        }
        return false;
    } // end whichPlayerWin function

function playAgain() {
    takenPos = [];
    again = false;
    console.log("in again, takenpos is " + takenPos);
    $("#cell1").text("");
    $("#cell2").text("");
    $("#cell3").text("");
    $("#cell4").text("");
    $("#cell5").text("");
    $("#cell6").text("");
    $("#cell7").text("");
    $("#cell8").text("");
    $("#cell9").text("");
    alert("Let's play again ! dude");
    return computer(playerCom);
}

function playerChoose() {
        //let's add the event listener first
        if (this.innerText === "") {
            this.innerText = player;
            var taken = this.getAttribute("id");
            taken = taken.slice(-1);
            takenPos.push(taken);
            again = whichPlayerWin();
            if (again === true) return playAgain();
            computer(playerCom);
        }

    } //end playerChoose

function computer(playerCom) {

    var position = Math.floor(Math.random() * 9 + 1);
    var posArray = takenPos.join("");
    console.log(posArray);
    while (posArray.indexOf(position) != -1) {
        position = Math.floor(Math.random() * 9 + 1);
    }
    console.log("computer's random position is " + position);
    $("#cell" + position).text(playerCom);
    takenPos.push(position);
    again = whichPlayerWin();
    if (again === true) return playAgain();
    playerChoose(player);
}

$(document).ready(function() {
    console.log("ready!");
    player = prompt("Do you want to play X or O?", "O");
    while (player != "O" && player != "o" && player != "X" && player != "x") {
        alert("Fucker, input something valid");
        player = prompt("Do you want to play X or O?", "O");
    }
    player = player.toUpperCase();
    if (player == "O") playerCom = "X";
    if (player == "X") playerCom = "O";
    computer(playerCom);

    //set up event listener
    for (i = 1; i <= 9; i++) {
        $("#cell" + i).click(playerChoose);
    }

});
