Defines a different gallery layout for a given section on mobile devices.

```html
<script>
	custom = window.custom || {}
	custom.markup = custom.markup || []
	custom.markup.push(() => {
		const from = "cobblestone"
		const to = "stack"
		const mediaQuery = window.matchMedia('(max-width: 900px)')
		if (mediaQuery.matches) {
			document.querySelectorAll(`.gallery--${from}`).forEach(section => {
				section.classList.remove(`gallery--${from}`)
				section.classList.add(`gallery--${to}`)
			})
		}
	})
</script>
```
