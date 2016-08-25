(function () {
	'use strict';

	angular.module('songhop.shared')
		.factory('Recommendations', Recommendations);

	Recommendations.$inject = ['$http', 'SERVER']

	function Recommendations($http, SERVER) {
		var factory = {
			queue: [],
			getNextSongs: getNextSongs,
			nextSong: nextSong
		};

		/**
		 * Fetches the next few recommendations.
		 */
		function getNextSongs() {
			return $http({
				method: 'GET',
				url: SERVER.url + '/recommendations'
			}).success(function (data) {
				// merge new data in to queue
				factory.queue = factory.queue.concat(data);
			});
		}

		/**
		 * Pops the top song from the queue leaving a new one in index 0.
		 * Optionally fetches more songs.
		 */
		function nextSong() {
			factory.queue.shift();

			if (factory.queue.length <= 3) {
				factory.getNextSongs();
			}
		}

		return factory;
	}
}());