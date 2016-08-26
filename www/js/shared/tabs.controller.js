(function () {
	'use strict';

	angular.module('songhop.shared')
		.controller('TabsCtrl', TabsCtrl);

	TabsCtrl.$inject = ['$scope', 'Recommendations', 'User'];

	function TabsCtrl($scope, Recommendations, User) {

		$scope.onFavouritesSelected = onFavouritesSelected;
		$scope.onDiscoverSelected = onDiscoverSelected;
		$scope.favCount = User.getNewFavourites;

		/**
		 * Called when favourites tab is selected
		 */
		function onFavouritesSelected() {
			User.newFavourites = 0;
			Recommendations.pauseSong();
		}

		/**
		 * Called when discover tab is selected
		 */
		function onDiscoverSelected() {
			Recommendations.init();
		}
	}
}());