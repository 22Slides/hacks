/* Horizontal Scrolling */
$(document).ready(function() {
	if ($('.list .images').length > 0) $('body').addClass('horz');
	var scrollSpeed = (navigator.appVersion.indexOf('Mac') != -1 ? 25 : 70);
	$('body.horz .images').mousewheel(function(event, delta, deltaX, deltaY) {	
		if (deltaY > 0 && deltaY > deltaX || deltaY < 0 && deltaY < deltaX) {
			var speed = deltaY * scrollSpeed;
			var position = $(this).scrollLeft() + -speed;
			$(this)[0].scrollLeft = position;
			return false;
		}		
	});
});