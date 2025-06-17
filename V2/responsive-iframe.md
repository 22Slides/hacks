Forces iframes to 100% of container's width and keep its aspect ratio.

```html
<style>
	iframe.responsive {
		width: 100%;
		height: auto;
		aspect-ratio: var(--aspectRatio);
		border: 0;
	}
}
</style>
<script>
	custom.markup.push(() => {
		document.querySelectorAll('iframe.responsive').forEach(iframe => {
			// Get dimensions
			const width = iframe.getAttribute('width')
			const height = iframe.getAttribute('height')
			const aspectRatio = width / height
			// Set properties
			iframe.style.setProperty('--aspectRatio', aspectRatio)
		})
	})
</script>
```