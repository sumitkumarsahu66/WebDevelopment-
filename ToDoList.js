let todoList = [];

document.addEventListener("DOMContentLoaded", function() {
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const todoListElement = document.getElementById("todo-list");

    addTaskButton.addEventListener("click", function() {
        const newTask = newTaskInput.value.trim();
        if (newTask) {
            todoList.push({ task: newTask, done: false });
            newTaskInput.value = "";
            renderTodoList();
        }
    });

    todoListElement.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const taskIndex = Array.prototype.indexOf.call(todoListElement.children, event.target);
            todoList[taskIndex].done = !todoList[taskIndex].done;
            renderTodoList();
        }
    });

    function renderTodoList() {
        todoListElement.innerHTML = "";
        todoList.forEach(function(task, index) {
            const taskElement = document.createElement("LI");
            taskElement.textContent = task.task;
            if (task.done) {
                taskElement.classList.add("done");
            }
            taskElement.addEventListener("click", function() {
                todoList[index].done = !todoList[index].done;
                renderTodoList();
            });
            todoListElement.appendChild(taskElement);
        });
    }
});