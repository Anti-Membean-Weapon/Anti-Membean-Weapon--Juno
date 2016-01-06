$(document).ready(function(){
	$("#cp").on('input', function(){
	   	if($("#cp").val() > 100){
	   			$("#cp").val("100");
	   	}
	   	if($("#cp").val() < 1){
	   			$("#cp").val("1");
	   	}
	   	if($("#cp").val() > 0 && $("#cp").val() < 101 ){
	   //	chrome.extension.sendMessage($("#cp").val());
	   }
	});
});
