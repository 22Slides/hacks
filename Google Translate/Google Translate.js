/* Google Translate */
$('footer').append('<div id="google_translate_element"></div>');

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

</script><script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script><script>
