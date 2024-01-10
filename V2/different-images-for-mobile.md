Due to the wildly different aspect ratios of mobile devices vs. desktop monitors, it's sometimes desired to select different images to be displayed in slideshows depending on the viewers' device.

While there's currently no built-in way to select different images for different devices, there is a workaround that involves creating two adjacent slideshows, then hiding one of them on mobile devices and the other on desktops.

```html
<style>
	/* Hide the desktop-only slideshow on mobile */
	@media screen and (max-width: 699px) {
		#widget-659ee1b4b9af5508daa9a30e {
			display: none;
		}
	}
	/* Hide the mobile-only slideshow on desktop */
	@media screen and (min-width: 700px) {
		#widget-659ee1f8b9af5508daa9a584 {
			display: none;
		}
	}
</style>
```