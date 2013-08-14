/* Video Page */
$(document).ready(function() {
	/* Convert embed codes to thumbnails */
	$('.videos iframe').each(function() {
		var $this = $(this);
		var src = $(this).attr('src');
		var id = src.split('/').pop();
		if (src.match(/youtube/i)) {
			var thumbnail = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
			$this.wrap('<a class="video" href="#" class="video"></a>');
			$this.before('<img src="' + thumbnail + '" alt="">');
			$this.wrap('<div class="embed"></div>');
			$this.attr('src', $this.attr('src'));
		} else if (src.match(/vimeo/i)) {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					var thumbnail = data[0].thumbnail_medium;
					$this.wrap('<a class="video" href="#" class="video"></a>');
					$this.before('<img src="' + thumbnail + '" alt="">');
					$this.wrap('<div class="embed"></div>');
				}
			});
		}
	});
	/* Thumbnail clicks */
	$(document).on('click', 'a.video', function() {
		var $embed = $($(this).children('.embed').html());
		$embed.attr('src', $embed.attr('src') + '?autoplay=1');
		$('body').append('<div id="overlay"><div class="video"><a class="close" href="#close">Close</a></div></div>');
		$('#overlay > div').append($embed);
		setTimeout(function() { $('#overlay, #overlay > div').addClass('show'); }, 1);
		return false;
	});
	/* Overlay close */
	$(document).on('click', '#overlay .close', function() {
		$('#overlay').removeClass('show');
		setTimeout(function() { $('#overlay').remove(); }, 250);
		return false;
	});
});