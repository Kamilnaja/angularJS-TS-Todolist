interface ITask {
    id: number;
    title: string;
    isDone: boolean;
}

const TASKS: ITask[] = [
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


class TaskComponentController implements ng.IComponentController {
    public task: ITask[];

    constructor() {}

    public $onInit() {
        this.task = TASKS;
    }
}

class TaskComponent implements ng.IComponentOptions {
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;

    constructor(){
        this.controller = TaskComponentController;
        this.controllerAs = "$ctrl";
        this.template = `
            <ul>
                <li ng-repeat="task in $ctrl.task">{{task.title}}</li>
            </ul>
        `
    }
}

angular
.module("mySuperAwesomeApp", [])
.component("task", new TaskComponent());

angular.element(document).ready(function() {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
})