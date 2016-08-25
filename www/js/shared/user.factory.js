(function () {
	'use strict';

	angular.module('songhop.shared')
		.factory('User', User);

	function User() {
		var factory = {
			favourites: [],
			addFavourite: addFavourite,
			removeFavourite: removeFavourite
		};

		/**
		 * Add song to user favourites
		 */
		function addFavourite(song) {
			if (!song) return false;

			factory.favourites.unshift(song);
		}

		/**
		 * Remove song from user favourites
		 */
		function removeFavourite(index) {
			factory.favourites.splice(index, 1);
		}

		return factory;
	}
}());