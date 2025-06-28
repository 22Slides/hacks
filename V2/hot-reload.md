In progress...

```html
<script>
	custom.actions.push(() => {
		tt.on('click', 'a[href^="/"]', async function(e) {
			log('woo')
			e.preventDefault()
			const url = this.getAttribute('href')
			const content = await fetch(url)
			const html = await content.text()
			document.documentElement.innerHTML = html
			document.body.classList.remove('body--loading')
			
			document.dispatchEvent(new Event('DOMContentLoaded', {
				bubbles: true,
				cancelable: true
			}))
			
		})
	})
</script>
```
