// IP Blocker
var ip = ['167.206.244.21', '167.206.244.10'];
$.each(ip, function(key, value) {
	if (clientIP == value) window.location = "http://google.com";
});