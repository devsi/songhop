(function () {
	'use strict';

	angular.module('songhop.shared')
		.factory('User', User);

	function User() {
		var factory = {
			favourites: [],
			addFavourite: addFavourite,
			removeFavourite: removeFavourite,
			newFavourites: 0,
			getNewFavourites: getNewFavourites
		};

		/**
		 * Add song to user favourites.
		 */
		function addFavourite(song) {
			if (!song) return false;

			factory.favourites.unshift(song);
			factory.newFavourites ++;
		}

		/**
		 * Remove song from user favourites.
		 */
		function removeFavourite(index) {
			factory.favourites.splice(index, 1);
		}

		/**
		 * Returns the new favourite count.
		 */
		function getNewFavourites() {
			return factory.newFavourites;
		}

		return factory;
	}
}());