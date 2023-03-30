By default, solo portrait-oriented images in the "stack" layout are displayed at full-width, which can cause the image to be much taller than the browser window.

Sometimes this is desireable, but for the times it's not, this code can be used to constrain the image height to match the browser window.

```html
<style>
	.gallery--stack .gallery__images > .gallery__item--portrait .gallery__img {
		width: auto;
		max-height: 100vh;
	}
</style>
```