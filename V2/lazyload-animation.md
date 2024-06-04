Adds images' filenames as captions. Useful for makeshift proofing setups. To enable this for a gallery, first paste this code into your "custom code" field, then add the caption "proofing" to the a gallery's first image's caption.

```html
<style>
	.gallery--masonry {
		.gallery {
			&__item {
				transform: translateY(50px);
				opacity: 0;
				&.custom-visible {
					opacity: 1;
					transform: translateY(0);
					transition: opacity 0.75s ease-out, transform 0.75s ease-out;
				}
			}
		}
	}
</style>
<script>
	window.custom = window.custom || {}
	window.custom.styles = window.custom.styles || []
	window.custom.styles.push(() => {
		return new Promise(resolve => {
			const items = [
				'.gallery--masonry .gallery__item',
			]
			const images = document.querySelectorAll(items.join(','))
			const className = "custom-visible"
			const position = () => {
				const windowArea = window.innerHeight * window.innerWidth
				for (const image of images) {
					const rectangle = image.getBoundingClientRect()
					const imageTop = rectangle.top
					if (imageTop > window.innerHeight) {
						image.classList.remove(className)
					} else {
						const delay = Math.random() * 0.5
						image.style.transitionDelay = `${delay}s`
						image.classList.add(className)
					}
				}
			}
			position()
			window.addEventListener('scroll', position)
			resolve()
		})
	})
</script>
```
