Turns 'masonry' style galleries into 'stack' style galleries when the page is loaded on a small (mobile) screen.

```html
<script>
	// Turn 'masonry' galleries into 'stack' galleries on mobile
	custom.markup.push(() => {
		if (window.innerWidth < 600) {
			document.querySelectorAll('.gallery--masonry').forEach(gallery => {
				gallery.classList.remove('gallery--masonry')
				gallery.classList.add('gallery--stack')
			})
		}
	})
</script>
```
