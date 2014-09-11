'use strict';

angular.module('apisApp')
  .controller('TwitterCtrl', function ($scope, $http, demosPromise) {
	
		$scope.awesomeDemos = demosPromise.data;
	
		// console.log("this is TwitterCtrl: " + Object.keys($scope.awesomeDemos));
  });
