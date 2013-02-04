$(document).ready(function() {

	var video_page = "work";

	/* Find video page */
	var video_page = "#page-" + video_page;
	$(video_page).addClass('video');
	
	/* Convert embed codes to thumbnails */
	$('.video .html iframe').each(function() {
		var $this = $(this);
		var src = $(this).attr('src');
		var id = src.split('/').pop();
		if (src.match(/youtube/i)) {
			var thumbnail = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
			$this.wrap('<a class="video hide" href="#" class="video"></a>');
			$this.before('<img src="' + thumbnail + '" alt="">');
			$this.wrap('<div class="embed"></div>');
			$this.closest('a').removeClass('hide');
			$this.attr('src', $this.attr('src'));
		} else if (src.match(/vimeo/i)) {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					console.log(data);
					var thumbnail = data[0].thumbnail_medium;
					$this.wrap('<a class="video hide" href="#" class="video"></a>');
					$this.before('<img src="' + thumbnail + '" alt="">');
					$this.wrap('<div class="embed"></div>');
					$this.closest('a').removeClass('hide');
				}
			});
		}
	});
	
	/* Thumbnail clicks */
	$('a.video').live('click', function() {
		var $embed = $($(this).children('.embed').html());
		$embed.attr('src', $embed.attr('src') + '?autoplay=1');
		$('body').append('<div id="overlay"><div class="video"><a class="close" href="#close">Close</a></div></div>');
		$('#overlay > div').append($embed);
		setTimeout(function() { $('#overlay, #overlay > div').addClass('show'); }, 1);
		return false;
	});
	
	/* Overlay close */
	$('#overlay, #overlay div').live('click', function() {
		$('#overlay').removeClass('show');
		setTimeout(function() { $('#overlay').remove(); }, 250);
		return false;
	});
	
});
	
	