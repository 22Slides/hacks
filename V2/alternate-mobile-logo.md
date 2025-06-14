```html
<script>
	custom.markup.push(() => {
		const newLogoSrc = "https://m2.22slides.com/samuelmorrison/sm-creative-logo-2-phone-539.png?f=webp&w=1261&s=d57f24c664a833a64f1ace4b40a0e089"
		const img = document.querySelector('.logo__image > img')
		if (img) {
			const newImg = img.cloneNode(true)
			newImg.src = newLogoSrc
			newImg.classList.add('mobile')
			img.parentNode.appendChild(newImg)
		}
	})
</script>
<style>
	.logo__image > .mobile { display: none; }
	@media (max-width: 899px) {
		.logo__image > img { display: none !important; }
		.logo__image > img.mobile { display: block !important; }
		img.mobile + img.mobile { display: none !important; }
	}
</style>
```