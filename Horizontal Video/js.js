// Horizontal Scrolling
$(document).ready(function() {

	var scrollSpeed = (navigator.appVersion.indexOf('Mac') != -1 ? 25 : 70);	
	
	$('#page-videography #content').mousewheel(function(event, delta, deltaX, deltaY) {
						  
		if (deltaY > 0 && deltaY > deltaX || deltaY < 0 && deltaY < deltaX) {
		
			var speed = deltaY * scrollSpeed;
			var position = $(this).scrollLeft() + -speed;
			$(this)[0].scrollLeft = position;
			return false;
		
		}	

	});
		
});