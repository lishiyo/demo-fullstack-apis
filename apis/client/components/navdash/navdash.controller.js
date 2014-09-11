'use strict';

angular.module('apisApp')
  .controller('NavDashCtrl', function ($scope, $http) {
	
		$scope.awesomeDemos = [];

    $http.get('/api/demos').success(function(awesomeDemos) {
      $scope.awesomeDemos = awesomeDemos;
    });
	
  });
