var Opponent = function(name, score, status) {
  this.name = name;
  this.score = score;
  this.status = status;
}
opponent.prototype.scoreplus = function() {
  this.score += grandtotal;
}
var firstopponent();
var secondopponent();
var roll = 0;
var grandTotal = 0;
var roll = function() {
  roll = math.floor(math.random() * 6) + 1;
  jQuery("#new-dice").remove();
  if (roll != 1) {
    grandTotal += roll
  } else {
    grandTotal = 0;
    turnOpponent();
  }
}
var turnOpponent = function() {
  if (firstOpponent.status == "enable") {
    firstOpponent.status = "disable";
    secondOpponent.status = "enable";
    jQuery(".one-turn").show();
    jQuery(".two-turn").hide();
  } else if (secondOpponent.status == "enable") {
    firstOpponent.status = "enable";
    secondOpponent.status = "disable";
    jQuery(".secondOpponent").show();
    jQuery(".secondOpponent").hide();
  }
}
var winner = function() {
  if (playerOne.score >= 100) {
    jQuery(".dice-img").text("!!!" + firstOpponent.name + "  WINS !!!")
    swal({
      title: firstOpponent.name + "  WINS !!!",
      icon: "success",
      button: "OK!",
    });
    jQuery("#roll").prop("disable", true);
    jQuery("#hold").prop("disable", true);
  } else if (secondOpponent.score >= 100) {
    jQuery(".dice-img").text("!!!" + secondOpponent.name + "  WINS !!!")
    swal({
      title: secondOpponent.name + "  WINS !!!",
      icon: "success",
      button: "OK!",
    });
    jQuery("#roll").prop("disabled", true);
    jQuery("#hold").prop("disabled", true);
  }
}

jQuery(document).ready(function() {
      jQuery(".opponnents").submit(function(event) {
            event.preventDefault();
            firstOpponentName = $("#player-one").val();
            secondOpponentName = $("#player-two").val();
            secondOpponent = new Player(secondOpponentName, 0, "disable");
            firstOpponent = new Player(firstOpponentName, 0, "enable");

            jQuery(".login").hide();
            jQuery(".pig-dice").show();
            jQuery(".firstOpponentname").prepend(firstOpponent.name);
            jQuery(".secondOpponentname").prepend(secondOpponent.name);
            jQuery(".two-turn").show();
            jQuery(".one-turn").hide();

            jQuery("#roll").click(function() {
              roll();
              jQuery("#grandTotal").text(grandTotal);
            })
