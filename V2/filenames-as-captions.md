Adds images' filenames as captions. Useful for makeshift proofing setups. To enable this for a gallery, first paste this code into your "custom code" field, then add the caption "proofing" to the a gallery's first image's caption.

```html
<script>
	custom.markup.push(() => {
		const elements = Array.from(document.querySelectorAll('figcaption')).filter(el => el.innerText.toLowerCase() === 'proofing')
		elements.forEach(caption => {
			gallery = caption.closest('.gallery')
			if (gallery) {
				gallery.querySelectorAll('.gallery__item').forEach(item => {
					item.querySelector('.gallery__caption')?.remove()
					let filename = item.querySelector('img').src.split('/').pop().split('.')[0]
					filename = filename.replace(/-\d{3}$/, '')
					const caption = document.createElement('figcaption')
					caption.classList.add('gallery__caption')
					caption.textContent = filename
					item.appendChild(caption)
				})
			}
		})
	})
</script>
```
