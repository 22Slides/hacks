$('body').append('<a href="#" id="top">Scroll to Top</a>');
$('#top').click(function() {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	return false;
});
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 200) {
		$('#top').addClass('show');
	} else {
		$('#top').removeClass('show');
	}
});