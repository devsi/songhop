(function () {
	'use strict';

	angular.module('songhop.discover')
		.controller('DiscoverCtrl', DiscoverCtrl);

	DiscoverCtrl.$inject = ['$scope', '$timeout', 'User', 'Recommendations'];

	function DiscoverCtrl($scope, $timeout, User, Recommendations) {

		$scope.currentSong = {};
		$scope.sendFeedback = sendFeedback;
		$scope.nextAlbumImg = nextAlbumImg;

		init();

		/**
		 * Engage
		 */
		function init() {
			Recommendations.getNextSongs()
				.then(function () {
					// set current song to first one in retrieved queue
					$scope.currentSong = Recommendations.queue[0];
				});
		}

		/**
		 * Send rating feedback to User factory.
		 */
		function sendFeedback(bool) {
			if (bool) {
				User.addFavourite($scope.currentSong);
			}

			$scope.currentSong.rated = bool;
			$scope.currentSong.hide = true;

			Recommendations.nextSong();

			$timeout(function () {
				$scope.currentSong = Recommendations.queue[0];
			}, 250);
		}

		/**
		 * Caches the album image in index 1 to circumvent slow loads
		 */
		function nextAlbumImg() {
			if (Recommendations.queue.length > 1) {
				return Recommendations.queue[1 ].image_large;
			}

			return '';
		}
	}
}());