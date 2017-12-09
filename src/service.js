app.service('TaskService', function () {
    var TASKLIST = [
        {
            title: "lorem",
            id: 1,
            isDone: false
        }
    ];
    this.addNewTask = function (taskName) {
        this.allTasks.push({
            id: this.allTasks[this.allTasks.length - 1].id + 1,
            title: taskName,
            isDone: false
        });
        console.log(this.allTasks[this.allTasks.length - 1].id);
    },
        this.getTasks = function () {
            this.allTasks = TASKLIST;
            return TASKLIST;
        };
});
