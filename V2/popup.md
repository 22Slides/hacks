Hides, then shows an element on the page after `x` seconds. Employs the use of cookies to make sure the element doesn't get displayed again after it's closed or submitted. Useful for email opt-in forms.

```html
<style>
@keyframes popupFade {
	from { opacity: 0; }
	to { opacity: 1; }
}
#mc_embed_signup {
	display: none;
	position: fixed;
	top: 50%;
	left: 50%;
	background: #fff;
	transform: translate(-50%, -50%);
	animation: popupFade 1s;
}
.popup__close {
	position: absolute;
	top: 0;
	right: 0;
	display: block;
	appearance: none;
	border: none;
	padding: 5px;
	cursor: pointer;
}
</style>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
<script>  
	const popupDelay = 5
	const cookieName = "noPopup"
	const popup = document.querySelector('#mc_embed_signup')
	if (!Cookies.get(cookieName)) {
		setTimeout(() => {
			popup.style.display = "block"
		}, popupDelay * 1000)
	}
	popup.querySelector('.popup__close').addEventListener('click', e => {
		e.preventDefault()
		popup.style.display = "none"
		Cookies.set(cookieName, 1)
	})
	popup.querySelector('form').addEventListener('submit', e => {
		Cookies.set(cookieName, 1)
	})
</script>
```