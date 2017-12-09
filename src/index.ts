var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, TaskService){
    // console.log(TaskService.getTasks());
    
    $scope.taskName = '';
    
    $scope.addNewTask = function (taskName) {
        if ($scope.taskName) {
            TaskService.addNewTask($scope.taskName);
            $scope.taskName = '';
        }
    }
    
    $scope.taskList = TaskService.getTasks();
});