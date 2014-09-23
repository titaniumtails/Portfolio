$(document).ready(function() {
	
	function randomColor() {
    
    return '#' + Math.random().toString(16).slice(2, 8);
	}

  $('#ExtraButton').on("click", function() {
  
  	alert("What up WDI");
  	$('.navbar').css('background', randomColor());
  });

});
	