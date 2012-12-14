/* Put video on home page */
$(document).ready(function() {
	var embedCode = '<iframe width="420" height="315" src="http://www.youtube.com/embed/aT8xJJQt0cU?autoplay=1" frameborder="0" allowfullscreen></iframe>';
	$('#page-index #content').empty().append(embedCode);
});