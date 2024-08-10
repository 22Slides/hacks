Disables the lightbox feature only on mobile for the designated gallery styles.

```html
<style>
	@media (max-width: 900px) {
		.gallery {
			&--grid,
			&--masonry,
			&--cobblestone {
				.gallery__item {
					--cursor: default;
				}
			}
		}
	}
</style>
```
