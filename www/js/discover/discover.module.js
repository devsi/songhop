angular.module('songhop.discover', ['ionic', 'songhop.shared'])

	.config(function($stateProvider) {
		$stateProvider
			// Set up an abstract state for the tabs directive:
			.state('tab.discover', {
				url: '/discover',
				views: {
					'tab-discover': {
						templateUrl: 'templates/discover.html',
						controller: 'DiscoverCtrl'
					}
				}
			});
	});