/* Home Page Content */
$('document').ready(function() {
	$('#page-index #content').append('<div id="intro"></div>');
	$('#intro').load('/home-page div.body');
});