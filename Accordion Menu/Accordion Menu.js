$(document).ready(function() {

	// Add Case Insensitive Matching to jQuery
	$.expr[':'].icontains = function(obj, index, meta, stack){ 
	return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0; 
	}; 
	
	// Navigation Dropdown Menus
	$('nav a[href^=#]').each(function() {
	
		// Prep
		$this = $(this);
		var category = $(this).attr('href').replace('#', '');
		$(this).parent().append('<ul></ul>');

		// Move Navigation Items		
		$('nav a:icontains("' + category + ': ")').each(function() {
		
			var label = $(this).text().split(':')[1].toString();
			var label = $.trim(label);
			$(this).text(label);
			$(this).parent().appendTo($this.siblings('ul'));

		});

		// Show Navigation
		$('nav').addClass('show');
		
	});
	
	// Expand/Collapse
	$('nav > ul > li:has("ul") > a').click(function() {
		
		var $menu = $(this).siblings('ul');
		$menu.stop();
	
		if ($menu.hasClass('expanded')) {
		
			$menu.removeClass('expanded');
			$menu.slideUp('fast');
		
		} else {
		
			$menu.addClass('expanded');
			$menu.slideDown('fast');

		}
		
		return false;
		
	});
	
	// Auto Expand
	$('nav ul ul .selected').closest('ul').addClass('expanded').show();
		
});
