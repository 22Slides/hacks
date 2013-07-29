/* Grid layout for Tumblr blog */
/* Not complete! Doesn't work yet */
$('#page-diary').find('#posts').addClass('grid');
$('.grid .post').each(function() {
	var href = $(this).children('strong').children('a').attr('href');
	$(this).find('a').prop({
		href: href,
		target: ""
	});
});