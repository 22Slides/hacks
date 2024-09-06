Adds an invisible audio player to a single page. Please keep in mind that some web browsers will only play audio at their discretion. Automatically-playing audio is seen as overly-intrusive and is often blocked.

```html
<script>
	// Adds audio to a specific page
	custom.markup.push(() => {
		const page = document.querySelector('#page-name')
		if (page) {
			const audio = document.createElement('audio')
			audio.src = "AUDIO_FILE_URL_HERE"
			audio.type = "audio/mp3"
			audio.autoplay = true
			page.appendChild(audio)
		}
	})
</script>
```
