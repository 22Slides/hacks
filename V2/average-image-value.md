This is an unfinished script that attempts to get a portion of an image's average value, to be used in determining if overlaid elements should be light or dark.

It returns a value between 0 and 1, with 0 being black and 1 being white.

TODO: It doesn't work because of CORS issues with images downloaded from CloudFront.

```html

<!-- Average color detector -->
<script>
	
	const getAverageColor = (imgElement, x1, y1, x2, y2) => {
		
		// Create a canvas element
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		
		 // Set canvas dimensions
		canvas.width = imgElement.width
		canvas.height = imgElement.height
		
		// Draw image on canvas
		context.drawImage(imgElement, 0, 0)
		
		// Convert percentage to pixel values
		const x = Math.round(imgElement.width * x1)
		const y = Math.round(imgElement.height * y1)
		const width = Math.round(imgElement.width * x2)
		const height = Math.round(imgElement.height * y2)
		
		// Get the image data for the specified portion
		const imageData = context.getImageData(x, y, width, height)
		const data = imageData.data
		
		// Variable to acculumate the brightness
		let totalBrightness = 0
		
		// The number of pixels sampled
		const count = data.length / 4
		
		for (let i = 0; i < data.length; i += 4) {
			// Calculate brightness using a luminance formula
			let brightness = .299 * data[i] + .587 * data[i + 1] + .114 * data[i + 2]
			totalBrightness += brightness
		}
		
		// Calc average brightness
		let averageBrightness = totalBrightness / count
		
		return (averageBrightness / 255)
		
	}
	
	window.custom.styles = []
	window.custom.styles.push(() => {
		const img = document.querySelector('img')
		console.log({img})
		const averageColor = getAverageColor(img, 0, 0, 1, .25)
		alert(averageColor)
	})
	
	
</script>
```
