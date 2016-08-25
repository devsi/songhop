angular.module('songhop.shared', ['ionic'])

	.config(function($stateProvider) {
		$stateProvider
			// Set up an abstract state for the tabs directive:
			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html',
				controller: 'TabsCtrl'
			});
	});