var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, TaskService){
    $scope.taskName = '';

    $scope.addNewTask = function (taskName) {
        console.log(taskName);
    }

    $scope.taskList = TaskService.getTasks();

});