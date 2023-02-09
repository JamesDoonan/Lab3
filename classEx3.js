var myTasks = /** @class */ (function () {
    function myTasks() {
        this.Tasks = [];
    }
    myTasks.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log('To do item: ' + task + ' has been added to your list');
        return this.Tasks.length;
    };
    myTasks.prototype.listAddTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log(this.Tasks[i]);
        }
    };
    myTasks.prototype.deleteTasks = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log('Remove task: ' + task + ' has been deleted from your list');
        }
        else {
            console.log('UPDATE MESSAGE : ' + task + ' is not from your list');
        }
        return this.Tasks.length;
    };
    return myTasks;
}());
var myTasks1 = new myTasks();
myTasks1.addTask("School");
myTasks1.addTask("Something else");
myTasks1.listAddTasks();
myTasks1.deleteTasks("School");
myTasks1.listAddTasks();
