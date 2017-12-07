var TASKS = [
    {
        id: 1,
        title: 'Wynieść śmieci',
        isDone: false
    },
    {
        id: 2,
        title: 'Drink wine',
        isDone: false
    }
];
var TaskComponentController = /** @class */ (function () {
    function TaskComponentController() {
    }
    TaskComponentController.prototype.$onInit = function () {
        this.task = TASKS;
    };
    return TaskComponentController;
}());
var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.controller = TaskComponentController;
        this.controllerAs = "$ctrl";
        this.template = "\n            <ul>\n                <li ng-repeat=\"task in $ctrl.task\">{{task.title}}</li>\n            </ul>\n        ";
    }
    return TaskComponent;
}());
angular
    .module("mySuperAwesomeApp", [])
    .component("task", new TaskComponent());
angular.element(document).ready(function () {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
