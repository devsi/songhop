angular.module('songhop.favourites', ['ionic', 'songhop.shared'])

	.config(function($stateProvider) {
		$stateProvider
			// Set up an abstract state for the tabs directive:
			.state('tab.favorites', {
				url: '/favorites',
				views: {
					'tab-favorites': {
						templateUrl: 'templates/favorites.html',
						controller: 'FavoritesCtrl'
					}
				}
			})
	});