/* GALLERY LINKS
Makes images in gallery clickable links.
Place the URL you'd like to link to in the images' description field. */
var page = "shop";
$('#page-' + page + ' .images > li').each(function() {
	var href = $(this).find('p').text();
	$(this).find('p').remove();
	$(this).children('img').css('cursor','pointer').click(function() { window.location = href; });
	if ($(this).find('h4').text().length == 0) $(this).children('div').remove();
});