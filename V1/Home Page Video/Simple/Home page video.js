/* Put video on home page */
$(document).ready(function() {
	var embedCode = '<iframe width="560" height="315" src="http://www.youtube.com/embed/gq7AioGElWg?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1" frameborder="0" allowfullscreen></iframe>';
	$('#page-index #content').empty().append(embedCode);
});