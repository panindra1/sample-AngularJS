(function() {
	var app = angular.module('store', []);

	//custom directives
	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'productInfo.html'
		};
	});


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

	app.controller('StoreController', ['$http', function($http) {
		var storeProducts = this;
		//this.products = gems;
		storeProducts.products = [];
		$http.get('products.json').success(function(data) {
			storeProducts.products = data;
		});
	}]);
})();