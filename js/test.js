$(document).ready(function() {
	
	function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
	}

  $('#TestButton').on("click", function(event) {
  	event.preventDefault();
  
  	console.log("What up WDI");
  
  	$('.navbar').css('background', randomColor());
  });

});
	