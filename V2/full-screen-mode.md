Adds a small button the bottom-left of the screen, which enables users to enter full screen mode.

```html
<style>
	.fullscreen {
		position: fixed;
		left: 10px;
		bottom: 10px;
		appearance: none;
		border: none;
		padding: 5px;
		color: inherit;
		background: transparent;
		font-size: .8em;
	}
</style>
<script>
	custom = window.custom || {}
	custom.markup = custom.markup || []
	custom.markup.push(() => {
		const fullscreen = document.createElement('button')
		fullscreen.classList.add('fullscreen')
		fullscreen.innerText = "Full Screen"
		fullscreen.addEventListener('click', e => document.documentElement.requestFullscreen())
		document.body.append(fullscreen)
	})
</script>
```