Disabling right-click is not recommended, as it's one of the least effective ways of preventing malicious visitors from stealing images, and one of the most effective ways of annoying regular visitors.

```html
<script>
	document.addEventListener('contextmenu', event => event.preventDefault())
</script>
```