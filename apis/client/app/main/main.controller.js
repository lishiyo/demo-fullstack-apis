'use strict';

angular.module('apisApp')
  .controller('MainCtrl', function ($scope, $http) {
	
		$scope.awesomeDemos = [];

    $http.get('/api/demos').success(function(awesomeDemos) {
      $scope.awesomeDemos = awesomeDemos;
    });
	
	
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
