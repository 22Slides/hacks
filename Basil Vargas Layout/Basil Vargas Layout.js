rsn.resizeLayout = function() {
	
	var windowHeight = ($.browser.msie ? document.documentElement.clientHeight : window.innerHeight);
	var headerHeight = $('header').height();
	var imagesHeight = windowHeight - headerHeight;
		
	$('.sidescroll .images').css({ 'height': imagesHeight + 'px' });
	
	// Firefox / IE min-height for images in gallery
	if ($('.left .sidescroll .images').length > 0) {
	
		if ($.browser.mozilla || $.browser.msie) {
	
			var maxHeight = parseInt(imagesHeight * .96);
			$('.images img:not(.blocker)').css('max-height', maxHeight + 'px');
	
		}
	
	}

};
