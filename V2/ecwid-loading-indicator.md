Adds a loading indicator to Ecwid widgets

```html
<style>
	.custom-loading {
		background: url('/images/loading.svg') center center no-repeat;
	}
</style>
<script>
	custom.styles.push(() => {
		const className = 'custom-loading'
		const widget = document.querySelector(`.${className}`)
		if (widget) {
			widget.classList.add(className)
			Ecwid.OnPageLoaded.add(() => widget.classList.remove(className))
		}
	})
</script>
```
