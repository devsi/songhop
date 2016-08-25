(function () {
	'use strict';

	angular.module('songhop.shared')
		.controller('TabsCtrl', TabsCtrl);

	TabsCtrl.$inject = ['$scope', 'Recommendations'];

	function TabsCtrl($scope, Recommendations) {

		$scope.onFavouritesSelected = onFavouritesSelected;
		$scope.onDiscoverSelected = onDiscoverSelected;

		/**
		 * Called when favourites tab is selected
		 */
		function onFavouritesSelected() {
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