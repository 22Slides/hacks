// Load gallery page into team page
$('p:contains("PHOTOS_GO_HERE")').each(function() {
	$(this).replaceWith('<div class="gallery"></div>');
	var photosPage = $('body').attr('id').replace('page-team', '/photos');
	$('div.gallery').load(photosPage + " .thumbs", function(data) { 
		$(this).find('a').attr('target', '_blank');
	});
});