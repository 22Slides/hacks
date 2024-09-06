<script>
	
	custom.markup.push(() => {
	
		// Inject PayPal script
		const PayPalClientId = "Aa1FT0LLZEMkt9dRFtyBv-mBuxIUz1zanJfmmGCE0YprgTs3rifQFWsNh6I5mdi04MfJddsWJJVun33H"
		const script = document.createElement('script')
		script.src = `https://www.paypal.com/sdk/js?client-id=${PayPalClientId}&currency=USD`
		document.head.appendChild(script)
		
		script.onload = () => {
							
			document.querySelectorAll('.gallery__item').forEach(item => {
				
				// Remove any existing captions
				item.querySelector('.gallery__caption')?.remove()
				
				// Create new caption element
				const caption = document.createElement('figcaption')
				caption.classList.add('gallery__caption')
				
				// Add button to caption
				const button = document.createElement('div')
				button.classList.add('paypal-button-container')
				
				// Add to page
				caption.append(button)
				item.appendChild(caption)
				
				// Get image name
				const description = item.querySelector('img').src.split('/').pop().split('.')[0]
				const value = 50
				
				paypal.Buttons({
					createOrder: (data, actions) => {
						return actions.order.create({
							purchase_units: [{
								description,
								amount: {
									currency_code: 'USD',
									value,
								},
							}]
						})
					},
					onApprove: (data, actions) => {
						return actions.order.capture().then(function(details) {
							alert(`Transaction completed by ${details.payer.name.given_name}!`)
						})
					}
				}).render(button)
				
			})
			
		}
	
	})
	
</script>



{site:ObjectId('6611bc3c5e78de6c9b838bd2'), type:"text", text: {$regex: "^<h2>Lorem ipsum</h2>"}}
