Randomizes the order of the images in the sections defined by the "randomSections" array.

```html
<script>
	custom.markup.push(() => {
		const randomSections = ["6632c559e4f4be5324d6b7a9"]
		randomSections.forEach(sectionId => {
			document.querySelectorAll(`#widget-${sectionId}`).forEach(section => {
				const container = section.querySelector('.gallery__images')
				for (let i = container.children.length; i >= 0; i--) {
					container.appendChild(container.children[Math.floor(Math.random() * i)])
				}
			})
		})
	})
</script>
```
