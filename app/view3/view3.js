'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3/:quizID', {
    templateUrl: '/view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $scope.quiz = "Angular Drains Me";
  $scope.hint = "Ugh";
  $scope.image = "image";
  $scope.questions = "questions";
  $scope.answer = "";
  $scope.clock = "Clock";
  
}]);
