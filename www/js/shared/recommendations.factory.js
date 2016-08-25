(function () {
	'use strict';

	angular.module('songhop.shared')
		.factory('Recommendations', Recommendations);

	Recommendations.$inject = ['$http', 'SERVER', '$q']

	function Recommendations($http, SERVER, $q) {
		var factory = {
			queue: [],
			init: init,
			getNextSongs: getNextSongs,
			nextSong: nextSong,
			playSong: playSong,
			pauseSong: pauseSong
		};

		var media;

		/**
		 * Initialise the service
		 */
		function init() {
			if (factory.queue.length === 0) {
				return factory.getNextSongs();
			} else {
				return factory.playSong();
			}
		}

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

			// end song
			factory.pauseSong();

			if (factory.queue.length <= 3) {
				factory.getNextSongs();
			}
		}

		/**
		 * Begin playing the current recommendation
		 */
		function playSong() {
			var defer = $q.defer();

			// load audio from preview url
			media = new Audio(factory.queue[0].preview_url);

			// when song has loaded, resolve the promise to let the controller know
			media.addEventListener('loadeddata', function () {
				defer.resolve();
			});

			media.play();

			return defer.promise;
		}

		/**
		 * Pause the current recommendation
		 */
		function pauseSong() {
			if (media)
				media.pause();
		}

		return factory;
	}
}());