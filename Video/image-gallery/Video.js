/* Videos */
$(document).ready(function() {
	$('.images iframe').closest('li').each(function() {
		$(this).find('img').remove();
		$(this).find('iframe').prependTo($(this));
		$(this).find('div').remove();
	});
});