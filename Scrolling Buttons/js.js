/* Scrolling Navigation */

$(document).ready(function() {

	if ($('.left #content .images > li').length > 2) {

		var $content = $('#content');
		var $images = $('.images');
	
		var sidebarWidth = $('header').width();
		var contentWidth = $content.width();
		var contentHalf = contentWidth / 2;
		var middle = contentHalf + sidebarWidth;
		var rightEdge = sidebarWidth + contentHalf + contentHalf / 2;
		var leftEdge = sidebarWidth + contentHalf / 2;
		var maxSpeed = 25;
		
		$content.mousemove(function(event) {
			if (event.clientX < leftEdge) {
				$(this).removeClass('arrow-next').addClass('arrow-back');
				var right = leftEdge - event.clientX;
				speed = -Math.round(right * maxSpeed / contentHalf);
			} else if (event.clientX > rightEdge) {
				$(this).removeClass('arrow-back').addClass('arrow-next');
				var left = event.clientX - rightEdge;
				speed = Math.round(left * maxSpeed / contentHalf);
			} else {
				$(this).removeClass('arrow-back').removeClass('arrow-next');
				speed = 0;
			}
		});
		
		$content.mousedown(function() {
			if (typeof scrollTime != "undefined") clearTimeout(scrollTime);
			scrollTime = setInterval(function() {
				var scrollPosition = $('.images').scrollLeft();
				$('.images').scrollLeft(scrollPosition + speed);
			}, 10);
			return false;
		}).mouseup(function() {
			clearTimeout(scrollTime);
		});

	}

});