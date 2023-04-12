By default, the `stack` layout automatically sets up diptchs for adjacent portrait-oriented images. The admin area offers an option to disable this behavior on both desktop and mobile, but if you'd like to disable the diptychs on just one or the other, you can use the following CSS snippet:

```html
<style>
	/* Kill auto diptychs on mobile */
	@media (max-width: 800px) {
		.gallery--stack {
			--diptychs: off
		}
	}
</style>
```