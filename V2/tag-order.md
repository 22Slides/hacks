Allows you to set the order in which tags appear in the navigation bar above sub pages.

```html
<style>
	.collection__tag {
		&[data-name^="weddings"] { order: 1; }
		&[data-name^="portraits"] { order: 2; }
		&[data-name^="maternity"] { order: 3; }
	}
</style>
```
