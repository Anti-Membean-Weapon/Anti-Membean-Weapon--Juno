if(location.href.indexOf("membean.com") > -1){
		var time = Math.floor((Math.random() * 10100) + 5700);
		function ans(){
			var correct_chance =  Math.floor(Math.random() * (11 - 0)) + 0;
			if(correct_chance < 8){
				document.getElementById('pass').click();
				console.log("Correct! time was " + time/1000 + "\nNum: " + correct_chance);
			}else if(correct_chance > 7){
				console.log("Random Guess! time was " + time/1000 + "\nNum: " + correct_chance);
				$(".choice").slice(Math.floor(Math.random() * (3 - 0)) + 0).click();
			}
			
			time = Math.floor((Math.random() * 10100) + 3700);
		}
		setInterval(ans, time);
}