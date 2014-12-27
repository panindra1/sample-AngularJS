(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Gold fish',
			price: 2.95,
			description: 'This is a rare gem',
			canPurchase: true,
			images : [{
				full: 'image0.jpg'
			}],
			soldOut: true
		},
		{
			name: 'Pygmy Gold Fish',
			price: 4.9,
			description: 'This is a new gem',
			canPurchase: true,
			images : [{
				full: 'image1.jpg'
			}],
			soldOut: true
		},
		{
			name: 'Salmon',
			price: 3.95,
			description: 'This is a greaat gem',
			canPurchase: true,
			images : [{
				full: 'image2.jpg'
			}],
			soldOut: true
		}

	]
})();