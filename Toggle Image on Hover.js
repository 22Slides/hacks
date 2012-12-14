$(document).ready(function() {

	$('.images after').each(function() {
	
		var $li = $(this).closest('li');
		$li.find('img:not(.blocker)').insertAfter($li.prev().find('img:not(.blocker)')).hide().addClass('after');
		$li.prev().addClass('toggle').find('before').remove();
		$li.remove();
	
	});
	
	$('.images .toggle').hover(function() {
	
		$(this).find('img').hide();
		$(this).find('img.after').show();
		
	}, function() {
	
		$(this).find('.after').hide();
		$(this).find('img:not(.after, .blocker)').show();
	
	});

});