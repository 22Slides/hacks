Places "//" before each item in a site's navigation. "//" can be replaced with any other characters. To place the decoration at the end of each item, replace `::before` with `::after`.

```html
<style>
	.nav__link::before {
		content: "// ";
	}
</style>
```