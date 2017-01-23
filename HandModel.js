var HandModel = function () {
     this.cards = [];
     //this.selectedTasks = [];
     this.addTaskEvent = new Event(this);
 };

 HandModel.prototype = {

     addCards: function (card) {
         this.cards.push({
             card: card,
             taskStatus: 'uncompleted'
         });
         this.addTaskEvent.notify();
     },

     getCards: function () {
         return this.cards;
     }

    //  setSelectedTask: function (taskIndex) {
    //      this.selectedTasks.push(taskIndex);
    //  },

    //  unselectTask: function (taskIndex) {
    //      this.selectedTasks.splice(taskIndex, 1);
    //  },

    //  setTasksAsCompleted: function () {
    //      var selectedTasks = this.selectedTasks;
    //      for (var index in selectedTasks) {
    //          this.tasks[selectedTasks[index]].taskStatus = 'completed';
    //      }

    //      this.setTasksAsCompletedEvent.notify();

    //      this.selectedTasks = [];

    //  },


    //  deleteTasks: function () {
    //      var selectedTasks = this.selectedTasks.sort();

    //      for (var i = selectedTasks.length - 1; i >= 0; i--) {
    //          this.tasks.splice(this.selectedTasks[i], 1);
    //      }

    //      // clear the selected tasks
    //      this.selectedTasks = [];

    //      this.deleteTasksEvent.notify();

    //  }


 };
export default function() {}