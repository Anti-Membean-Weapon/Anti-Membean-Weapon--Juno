if(location.href.indexOf("membean.com") > -1){
		var time = Math.floor((Math.random() * 19100) + 10000);
		function ans(){
			if($("form[name='Next']").length){
				$(".answer").click()
				$("form[name='Next']").click();

				console.log("Moving on");
				time = Math.floor((Math.random() * 19100) + 10000);
				return;
			}else{
			var correct_chance =  Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if(correct_chance < 66){
				document.getElementById('pass').click();
				console.log("Correct! time was " + time/1000 + "\nNum: " + correct_chance);
			}else if(correct_chance > 65){
				console.log("Random Guess! time was " + time/1000 + "\nNum: " + correct_chance);
				$(".choice").slice(Math.floor(Math.random() * (3 - 0)) + 0).click();
			}
			
			time = Math.floor((Math.random() * 19100) + 10000);
		}
		}
		setInterval(ans, time);
}

