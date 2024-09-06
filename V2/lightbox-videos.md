

```html
<script>
	custom.actions.push(() => {
		// Define lightbox thumbnails
		const targets = [
			'.gallery--cobblestone .gallery__item',
			'.gallery--grid .gallery__item',
			'.gallery--masonry .gallery__item',
			'.gallery--collage .gallery__item',
		]
		const lightboxVideo = function(e) {
			const video = this.querySelector('figcaption iframe')
			const image = this.querySelector('.overlay__img')
			const parent = image.parentNode
			
			
			if (!video || !image) return
			parent.replaceChild(video, image)

			
		}
		document.querySelectorAll(targets.join(',')).forEach(thumb => thumb.addEventListener('click', lightboxVideo))
	})
</script>
```


