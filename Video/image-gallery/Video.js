/* Videos */
$(document).ready(function() {
	$('.images iframe').css({
		'float': 'left',
		'max-height': '96%',
		'max-width': '100%'
	}).closest('li').each(function() {
		$(this).find('img').remove();
		$(this).find('iframe').prependTo($(this));
		$(this).find('div').remove();
	});
});