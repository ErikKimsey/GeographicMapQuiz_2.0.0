'use strict';

angular.module('myApp.view3', ['ngRoute'])
.directive('quizQuestion', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});
