/* Make portfolio page wider */
	function widenPortfolio() {
		var newContentWidth = .9;
		var pageWidth = parseInt($('#layout').width());
		var contentPadding = parseInt($('#content').css('padding-left')) * 2;
		var windowWidth = parseInt($(window).width());
		var contentWidth = parseInt(windowWidth * newContentWidth);
		var leftMargin = (contentWidth + contentPadding - pageWidth) / -2;
		$('#content').css({ width: contentWidth + 'px', 'margin-left': leftMargin + 'px' }); }
	if ($('.centered .sidescroll').length > 0) {
		$(document).ready(widenPortfolio);
		$(window).resize(widenPortfolio); }
