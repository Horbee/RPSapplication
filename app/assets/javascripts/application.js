//= require activestorage
//= require turbolinks

//= require jquery3
//= require jquery_ujs
//= require_tree .

// 0 rock
// 1 paper
// 2 scissor

// winning: 0 : 2, 1 : 0, 2 : 1

$(document).ready(function() {
	var pcScore = 0;
	var playerScore = 0;
	var scoreLabel = $('#score');

	$('.item').on('click', function(){
		var myInt = parseInt(this.id);
		var compRand = Math.floor(Math.random() * 3);
		var round = isWinning(myInt, compRand);
		
		changeImageSrc(compRand);

		// console.log("Y: " + myInt + ", PC: " + compRand);
		// console.log(round);

		switch(round) {
	    case 0:
			$('.status-text').html("Draw");
	        break;
	    case 1:
	    	playerScore++;
	        $('.status-text').html("Win!");
	        break;
	    case 2:
	    	pcScore++;
	        $('.status-text').html("Lose");
		} 

		scoreLabel.html(playerScore + " : " + pcScore);
	});

	$('#new-game-button').on('click', function() {
		pcScore = 0;
		playerScore = 0;
		scoreLabel.html(playerScore + " : " + pcScore);
	});

	$('#save-button').on('click', function() {
		fillRate();
	});

	function changeImageSrc(value) {
		var img = $("#computer");

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
		var rate = playerScore / (playerScore + pcScore);
		if (isNaN(rate))
			rate = 0;

		$('#rate').html("Win / Lose: " + playerScore + " / " + pcScore + ", Rate: " + rate);
		$('#highscore_win').val(playerScore);
		$('#highscore_lose').val(pcScore);
		$('#highscore_rate').val(rate);
	}
});