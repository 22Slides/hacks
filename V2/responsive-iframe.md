Forces iframes to 100% of container's width and keep its aspect ratio.

```html
<style>
	.iframe__wrapper {
		width: 100%;
		aspect-ratio: var(--aspectRatio);
	}
	iframe.responsive {
		width: 100%;
		height: 100%;
		border: 0;
	}
}
</style>
<script>
	custom.markup.push(() => {
		document.querySelectorAll('iframe.responsive').forEach(iframe => {
			const className = "iframe__wrapper"
			// Stop if already processed
			if (iframe.parentElement?.classList.contains(className)) return
			// Get dimensions
			const width = iframe.getAttribute('width')
			const height = iframe.getAttribute('height')
			const aspectRatio = width / height
			// Wrap iframe in container
			const wrapper = document.createElement('div')
			wrapper.className = className
			iframe.parentNode.insertBefore(wrapper, iframe)
			wrapper.appendChild(iframe)
			// Set properties
			wrapper.style.setProperty('--aspectRatio', aspectRatio)
		})
	})
</script>
```