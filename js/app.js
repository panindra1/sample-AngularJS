(function() {
	var app = angular.module('store', []);

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	
	app.controller("PanelController", function() {
		//alert("In panel");
		this.tab = 1;
		this.selectTab = function(setTab) {
			
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

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
				full: 'images/image0.jpg'
			}],
			reviews: [
			{
				stars:5,
				body: "I Love this product",
				author: "joe@example.com"
			}
			],
			soldOut: true
		},
		{
			name: 'Pygmy Gold Fish',
			price: 4.9,
			description: 'This is a new gem',
			canPurchase: true,
			images : [{
				full: 'images/image1.jpg'
			}],

			reviews: [
			{
				stars:3,
				body: "This is good product and i really like it. It is the best",
				author: "joe@example.com"
			}
			],
			soldOut: true
		},
		{
			name: 'Salmon',
			price: 3.95,
			description: 'This is a greaat gem',
			canPurchase: true,
			images : [{
				full: 'images/image2.jpg'
			}],
			reviews: [
			{
				stars:3,
				body: "This is a great product",
				author: "pani@example.com"
			}
			],
			soldOut: true
		}

	]
})();