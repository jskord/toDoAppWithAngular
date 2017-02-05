/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {
    $scope.tasks = ["take out garbage", "walk the dog", "make dinner"];
    $scope.addTask = function(inputText) {
      $scope.tasks.push(inputText);
      $scope.newTaskText = "";
    };
    $scope.removeTask = function(inputTask) {
      var index = $scope.tasks.indexOf(inputTask);
      console.log(inputTask, index);
      $scope.tasks.splice(index, 1);
    };
  });

}());