
```html
<script>
	custom.markup.push(() => {
		const storageKey = "verifiedAge"
		if (!localStorage.getItem(storageKey)) {
			const isOldEnough = confirm("Please confirm that you are 18 years of age. Click 'OK' to confirm, or 'Cancel' if you are not 18 or older.")
			if (isOldEnough) {
				localStorage.setItem(storageKey, true)
			} else {
				alert("You must be 18 or older to enter this site.")
				window.location.href = "https://google.com"
			}
		}
	})
</script>
```
