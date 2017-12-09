// import  { taskList } from './taskList';
var taskList = [
    {
        title: "lorem",
        id: 1,
        isDone: false
    }, {
        title: "ipsum",
        id: 2,
        isDone: true
    }, {
        title: "dolor",
        id: 3,
        isDone: false
    }
];
app.service('TaskService', function () {
    var _task = '';
    this.addNewTask = function (task) {
        _task = task;
    };
    this.getTasks = function () {
        this.allTasks = taskList;
        return this.allTasks;
    };
});
