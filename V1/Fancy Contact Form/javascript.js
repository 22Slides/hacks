/* Include jQuery UI for Date Picker */
</script><script src="/custom/jquery-ui.js"></script><script>

/* Start Date Picker */
var dates = $('#from, #to').datepicker({
	
	defaultDate: "+1w",
	changeMonth: false,
	numberOfMonths: 2,
	onSelect: function(selectedDate) {
	
		var option = this.id == "from" ? "minDate" : "maxDate",
			instance = $(this).data('datepicker'),
			date = $.datepicker.parseDate(
				instance.settings.dateFormat ||
				$.datepicker._defaults.dateFormat,
				selectedDate, instance.settings );
		dates.not(this).datepicker('option', option, date);
		
	}

});

/* Change Form Action */
setTimeout(function() {

	$('.contact_form').attr('action', '/custom/contact.php');
	
}, 2000);
