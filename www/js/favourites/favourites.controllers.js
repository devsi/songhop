(function () {
	'use strict';

	angular.module('songhop.favourites')
		.controller('FavoritesCtrl', FavoritesCtrl);

	FavoritesCtrl.$inject = ['$scope', 'User', '$window'];

	function FavoritesCtrl($scope, User, $window) {

		$scope.favourites = User.favourites;
		$scope.removeSong = removeSong;
		$scope.openSong = openSong;

		/**
		 * Remove song from user favourites list
		 */
		function removeSong(index) {
			User.removeFavourite(index);
		}

		/**
		 * Open link to Spotify song track
		 */
		function openSong(song) {
			$window.open(song.open_url, "_system");
		}
	}
}());