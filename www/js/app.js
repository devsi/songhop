// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('songhop', ['ionic', 'songhop.discover', 'songhop.favourites', 'songhop.shared'])

	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}


		});
	})

	.config(function($stateProvider, $urlRouterProvider) {
		// If none of the above states are matched, use this as the fallback:
		$urlRouterProvider.otherwise('/tab/discover');

	})

	.constant('SERVER', {
		// Local server
		//url: 'http://localhost:3000'

		// Public Heroku server
		url: 'https://ionic-songhop.herokuapp.com'
	});
