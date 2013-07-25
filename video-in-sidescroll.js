/* Add videos inline with sideways-scrolling photo galleries
1. Upload an invisible png file to a photo gallery
2. Give it the title "[Video]"
3. Paste the embed code into the description of the image
4. Paste this code into your custom javascript field */
$('.sidescroll .images > li').each(function() {
	if ($(this).find('h4').text() == "[Video]") {
		var embedCode = $(this).find('p').html();
		$(this).find('.blocker, div').remove();
		$(this).find('img').replaceWith(embedCode);
		$(this).find('iframe').css({'float': 'left'});
	}
});