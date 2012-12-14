/* Create PayPal Buttons */
$(document).ready(function() {

	var paypal = "jkbrandi@gmail.com";
	
	$('.images > li').each(function() {

		try {
		
			if ($(this).find('p').text().match(/\(\$(.*)\)/)) {

				var itemTitle = $(this).find('h4').text();
				var itemPrice = $(this).find('p').text().match(/\(\$(.*)\)/)[1];
						
				var code = '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
					<input type="hidden" name="add" value="1">\
					<input type="hidden" name="cmd" value="_cart">\
					<input type="hidden" name="business" value="' + paypal + '">\
					<input type="hidden" name="item_name" value="' + itemTitle + '">\
					<input type="hidden" name="amount" value="' + itemPrice + '">\
					<input type="submit" value="Buy Now - $' + itemPrice + '">\
					</form>';
					
				$(this).find('p').append(code);
				
			}
			
		} catch (error) { }
		
	});

	/* Always Show PayPal Buttons */
	$('ul.images div:has(form)').css('opacity', 1);

});