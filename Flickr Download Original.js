/* High-res Flickr Download */
$('#page-photo-sets .thumbs a').each(function() {
var src = $(this).attr('href').replace(/_\w\./, '_o.');
$(this).append('<p><a style="display:block;text-align:center;" href="' + src + '" target="_blank" rel="external">Download high-resolution image</a></p>');
});
$('#overlay p a').live('click', function(event) { event.stopPropagation();});

/* need to find a way to get the secret code for the original file */

