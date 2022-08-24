Makes links that point to external websites (determined by whether or not their 'href' attributes begin with "http") open in new windows.

```html
<script>
	// Make external links open in new windows
	custom = {}
	custom.markup = [() => {
		document.querySelectorAll('a[href^="http"]').forEach(element => element.target = "_blank")
	}]
</script>
```