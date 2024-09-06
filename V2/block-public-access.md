This is a relatively insecure way of blocking access to a website for anyone who isn't logged into the site's admin area.

Useful for blocking casual public access, but may not stop advanced users or bots.

```html
<script>
	const placeholder = true
	// Block site
	custom.markup.push(() => {
		if (window === window.parent && placeholder) {
			const placeholder = document.createElement('h1')
			placeholder.innerText = "Coming Soon"
			placeholder.classList.add('comingsoon')
			document.body.prepend(placeholder)
		}
	})
</script>
<style>
	.comingsoon {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		transform: translateY(-50%);
	}
	.comingsoon + .container {
		display: none !important;
	}
</style>
```
