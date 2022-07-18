Randomizes images of first "takeover" image gallery found on the home page, or the page with the "index" slug:

```html
<script>
	// Randomize homepage images
	custom = {
		markup: [() => {
			let i, container = document.querySelector('#page-index .gallery--takeover .gallery__images')
			for (i = container.children.length; i >= 0; i--) container.appendChild(container.children[Math.random() * i | 0])
		}]
	}
</script>
```

Removes all but the first image in the first "takeover" gallery found on the home page:

```html
<script>
	// Only show one random home page image
	custom = {
		markup: [() => {
			const container = document.querySelector('#page-index .gallery--takeover .gallery__images')
			while (container.children.length > 1) container.removeChild(container.lastChild)
		}]
	}
</script>
```

This code combines the previous two and removes all but one random image:

```html
<script>
	// Only show one random home page image
	custom = {
		markup: [() => {
			let i, container = document.querySelector('#page-index .gallery--takeover .gallery__images')
			for (i = container?.children.length; i >= 0; i--) container.appendChild(container.children[Math.random() * i | 0])
			while (container.children.length > 1) container.removeChild(container.lastChild)
		}]
	}
</script>
```
