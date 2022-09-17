Makes links that point to external websites (determined by whether or not their 'href' attributes begin with "http") open in new windows.

```html
<script>
	// Create custom code arrays, if they don't already exist
	custom = window.custom || {}
	custom.markup = custom.markup || []
	// Make external links open in new windows
	custom.markup.push(() => {
		document.querySelectorAll('a[href^="http"]').forEach(element => element.target = "_blank")
	})
</script>
```