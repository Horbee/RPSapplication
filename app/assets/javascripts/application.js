//= require activestorage
//= require turbolinks

//= require jquery3
//= require jquery_ujs
//= require_tree .

// 0 rock
// 1 paper
// 2 scissor

$(document).ready(function() {
	// init tooltips
	$('[data-toggle="tooltip"]').tooltip()

	// init variables
	var roundsCounter = 0;
	var playerScore = 0;
	var scoreLabel = $('#score');
	$('#save-button').prop("disabled", true);

	$('.item').on('click', function(){
		var myInt = parseInt(this.id);
		var compRand = Math.floor(Math.random() * 3);
		var round = isWinning(myInt, compRand);
		
		changeImageSrc(compRand);

		switch(round) {
	    case 0:
			$('.status-text').html("Draw");
			playerScore += 0.5;
	        break;
	    case 1:
	        $('.status-text').html("Win!");
	        playerScore++;
	        break;
	    case 2:
	    	playerScore--;
	    	if (playerScore <= 0) playerScore = 0;
	        $('.status-text').html("Lose");
		} 

		roundsCounter++;
		if(roundsCounter >= 10) {
			// end of match
			$('#save-button').prop("disabled", false);
		} else {
			$('#save-button').prop("disabled", true);
		}
		scoreLabel.html(playerScore + " : " + roundsCounter);
	});

	$('#new-game-button').on('click', function() {
		roundsCounter = 0;
		playerScore = 0;
		scoreLabel.html(playerScore + " : " + roundsCounter);
		$('#save-button').prop("disabled", true);
	});

	$('#save-button').on('click', function() {
		fillRate();
	});

	function changeImageSrc(value) {
		var img = $("#computer");
		img.css("display", "block");

		switch(value) {
	    case 0:
			img.attr("src", img.data('rockIcon'));
	        break;
	    case 1:
	        img.attr("src", img.data('paperIcon'));
	        break;
	    case 2:
	        img.attr("src", img.data('scissorsIcon'));
	        break;
		} 

		animate("#computer");
	}

	function animate(element){
		$(element).addClass('animated bounceInDown');
		var wait = setTimeout(function() {
			$(element).removeClass('animated bounceInDown');
		}, 1000);
	}

	function isWinning(a, b) {
		if (a === b){
			return 0;	//tie	
		} else if ((a - b + 3) % 3 == 1) {
			return 1;	//win	
		} else {
			return 2;	//lose	
		} 
	}

	function fillRate() {
		// r = i.win.to_f / (i.win + i.lose).to_f
		var rate = playerScore / roundsCounter;
		if (isNaN(rate))
			rate = 0;

		$('#rate').html("Wins / played rounds: " + playerScore + " / " + roundsCounter + ", Rate: " + rate);
		$('#highscore_win').val(playerScore);
		$('#highscore_rounds').val(roundsCounter);
		$('#highscore_rate').val(rate);
	}
});