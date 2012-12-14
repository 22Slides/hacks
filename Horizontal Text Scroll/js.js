// Horizontal Scrolling
$(document).ready(function() {

	$('#page-bts').addClass('horz_video_page');

	var scrollSpeed = (navigator.appVersion.indexOf("Mac") != -1 ? 25 : 75);	
		
	$('.horz_video_page #content').mousewheel(function(event, delta, deltaX, deltaY) {
						  
		if (deltaY > 0 && deltaY > deltaX || deltaY < 0 && deltaY < deltaX) {
		
			var speed = deltaY * scrollSpeed;
			var position = $(this).scrollLeft() + -speed;
			$(this)[0].scrollLeft = position;
			return false;
		
		}

	});
		
});