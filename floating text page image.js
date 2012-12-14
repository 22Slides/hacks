/* Make text page images float right */
$(document).ready(function() {
$('#main').addClass('wide');
$('#sidebar img').prependTo('#main').css({ float: 'right', width: '50%', margin: '0 0 20px 20px' });
});