	$(document).ready(function() {
	
	// Add Case Insensitive Matching to jQuery
	$.expr[':'].icontains = function(obj, index, meta, stack){ 
	return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0; 
	}; 
	
	// Navigation Dropdown Menus
	$('nav a[href^=#]').each(function() {
	
	// Prep
	$this = $(this);
	var category = $(this).attr('href').replace('#', '').replace('_', ' ');
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
	
	// Disable Clicking
	$(this).click(function() { return false; });
		
	});
	
	// Hover Effects
	$('nav > ul > li:has("ul")').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
			
	});
