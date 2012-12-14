/* Stop scrollwheel click downloading */
$('.thumbs a').each(function() {
	var href = "#" + $(this).attr('href');
	$(this).attr('href', href);
});