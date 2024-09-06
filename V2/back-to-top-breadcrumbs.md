Adds a "top of page" link to breadcrumbs sections.

```html
<style>
	.breadcrumbs__top {
		font-weight: bold;
		margin-left: auto;
		padding: .5em .4em;
	}
</style>
<script>
	// Add "top of page" button to breadcrumbs widget
	custom.markup.push(() => {
		document.querySelectorAll('.breadcrumbs__container').forEach(breadcrumbs => {
			if (breadcrumbs.querySelector('.breadcrumbs__top')) return
			const link = document.createElement('a')
			link.classList.add('breadcrumbs__top')
			link.innerHTML = "Top of Page ↑"
			link.setAttribute('href', '#top')
			breadcrumbs.appendChild(link)
			breadcrumbs.addEventListener('click', e => {
				e.preventDefault()
				window.scrollTo({ top: 0, behavior: 'smooth' })
			})
		})
	})
</script>
```
