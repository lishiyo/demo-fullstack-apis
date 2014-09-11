//define routes

'use strict';

angular.module('apisApp')
  .config(function ($stateProvider) {
	//main  index with two partials
    $stateProvider
			.state('twitter', {
        url: '/twitter',
        templateUrl: 'app/twitter/twitter.html',
				resolve: {
					demosPromise:  function($http){
            return $http({method: 'GET', url: '/api/demos'})
         	}     
				},
        controller: 'TwitterCtrl'
      })
      .state('twitter.search', {
        url: '/search',
        templateUrl: 'app/twitter/partials/search.html',
        controller: 'TwitterCtrl'
      })
      .state('twitter.timeline', {
        url: '/timeline',
        templateUrl: 'app/twitter/partials/timeline.html',
        controller: 'TwitterCtrl'
      });
		/**
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
			**/
  });