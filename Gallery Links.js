// Gallery Links
$('#page-shop .images > li').each(function() {

	var href = $(this).find('p').text();
	$(this).find('p').remove();
	$(this).children('img').css('cursor','pointer').click(function() { window.location = href; });
	if ($(this).find('h4').text().length == 0) $(this).children('div').remove();

});