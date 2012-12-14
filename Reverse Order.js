<script>
/* Reverse Thumbnail Order for iPhones */
if (navigator.userAgent.match(/iPhone/i)) $('ul.images > li').each(function() { $(this).prependTo($(this).parent()); });
</script>