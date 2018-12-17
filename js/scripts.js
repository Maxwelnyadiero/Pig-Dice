var opponents = function(name, score, status) {
  this.name = name;
  this.score = score;
  this.status = status;
}
opponent.prototype.scoreplus = function() {
  this.score += grandtotal;
}
var player1();
var player2();
var throughDice = 0;
var grandTotal = 0;
var throughDice = function() {
  through dice = math.floor(math.random() * 6) + 1;
  jQuery("#new-dice").remove();
  if (through dice != 1) {
    grandTotal += roll
  } else {
    grandTotal = 0;
    turnOpponent();
  }
}
var turnOpponent = function() {
  if (player.status == "enable") {
    player1.status = "disable";
    player2.status = "enable";
    jQuery(".one-turn").show();
    jQuery(".two-turn").hide();
  } else if (secondOpponent.status == "enable") {
    firstOpponent.status = "enable";
    secondOpponent.status = "disable";
    jQuery(".player1").show();
    jQuery(".player2").hide();
  }
}
var winner = function() {
  if (playerOne.score >= 100) {
    jQuery(".pig dice-img").text("!!!" + firstOpponent.name + "  WINS !!!")
    swal({
      title: firstOpponent.name + "  WINS !!!",
      icon: "success",
      button: "OK!",
    });
    jQuery("#throughDice").prop("disable", true);
    jQuery("#hold").prop("disable", true);
  } else if (player2.score >= 100) {
    jQuery(".dice-img").text("!!!" + player2.name + "  WINS !!!")
    swal({
      title: player2.name + "  WINS !!!",
      icon: "success",
      button: "OK!",
    });
    jQuery("#throughDice").prop("disabled", true);
    jQuery("#hold").prop("disabled", true);
  }
}

jQuery(document).ready(function() {
      jQuery(".opponnents").submit(function(event) {
            event.preventDefault();
            player1Name = $("#firstOpponent").val();
            player2Name = $("#secondOpponent").val();
            player2 = new player(secondOpponentName, 0, "disable");
        player1  = new player(firstOpponentName, 0, "enable");

            jQuery(".login").hide();
            jQuery(".pig-dice").show();
            jQuery(".player1name").prepend(player1.name);
            jQuery(".player2name").prepend(player2.name);
            jQuery(".two-turn").show();
            jQuery(".one-turn").hide();

            jQuery("#grandtotal").click(function() {
              grandtotal();
              jQuery("#grandTotal").text(grandTotal);
            })
