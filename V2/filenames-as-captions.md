Adds images' filenames as captions. Useful for makeshift proofing setups.

```html
<script>
	custom = window.custom || {}
	custom.markup = custom.markup || []
	custom.markup.push(() => {
		const elements = Array.from(document.querySelectorAll('figcaption')).filter(el => el.innerText.toLowerCase() === 'proofing')
		elements.forEach(caption => {
			gallery = caption.closest('.gallery')
			if (gallery) {
				gallery.querySelectorAll('.gallery__item').forEach(item => {
					item.querySelector('.gallery__caption')?.remove()
					const filename = item.querySelector('img').src.split('/').pop().split('.')[0]
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