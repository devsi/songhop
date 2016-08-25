(function () {
	'use strict';

	angular.module('songhop.favourites')
		.controller('FavoritesCtrl', FavoritesCtrl);

	FavoritesCtrl.$inject = ['$scope', 'User'];

	function FavoritesCtrl($scope, User) {

		$scope.favourites = User.favourites;
		$scope.removeSong = removeSong;

		/**
		 * Remove song from user favourites list
		 */
		function removeSong(index) {
			User.removeFavourite(index);
		}

	}
}());