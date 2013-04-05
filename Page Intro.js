// Turn description of first image into intro for entire gallery
$('.list .images li:first-child div').each(function() {
	var description = $(this).text();
	$('#content > h2').after('<div id="intro" style="margin: -10px 0 20px 0;">' + description + '</div>');
	$(this).remove();
});