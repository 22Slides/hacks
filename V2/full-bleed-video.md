Turns a Vimeo video embed into a full-bleed background video.

HTML widget:

```html
<iframe 
class="bigvideo"
src="https://player.vimeo.com/video/1059710205" 
width="640"
height="360">
</iframe>
```

Custom code:

```html
<style>
	.bigvideo__wrapper {
		position: fixed;
		top: 50%;
		left: 50%;
		width: var(--proportionalWidth);
		height: 100vh;
		transform: translate(-50%, -50%);
		z-index: -1;
	}
	@media (min-aspect-ratio: 16/9) {
		.bigvideo__wrapper {
			width: 100vw;
			height: var(--proportionalHeight);
		}
	}
	.bigvideo {
		width: 100%;
		height: 100%;
		border: 0;
	}
}
</style>
<script>
	custom.styles.push(() => {
		// Get elements
		const className = 'bigvideo--processed'
		const iframe = document.querySelector('.bigvideo')
		if (!iframe || iframe.classList.contains(className)) return
		// Set attributes
		const url = new URL(iframe.src)
		url.searchParams.set('background', '1')
		url.searchParams.set('autoplay', '1')
		url.searchParams.set('muted', '1')
		url.searchParams.set('loop', '1')
		url.searchParams.set('controls', '0')
		iframe.src = url.toString()
		iframe.setAttribute('allow', 'autoplay; fullscreen')
		iframe.setAttribute('allowfullscreen', true)
		// Get dimensions
		const width = iframe.getAttribute('width')
		const height = iframe.getAttribute('height')
		console.log({height})
		const aspectRatio = width / height
		const proportionalWidth = `${width / height * 100}vh`
		const proportionalHeight = `${height / width * 100}vw`
		// Wrap video in container
		const wrapper = document.createElement('div')
		wrapper.className = 'bigvideo__wrapper'
		iframe.parentNode.insertBefore(wrapper, iframe)
		wrapper.appendChild(iframe)
		// Set CSS vars
		wrapper.style.setProperty('--aspectRatio', aspectRatio)
		wrapper.style.setProperty('--proportionalWidth', proportionalWidth)
		wrapper.style.setProperty('--proportionalHeight', proportionalHeight)
		// Set class name
		iframe.classList.add(className)
	})
</script>
```
