document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => addTask(taskText, false)); // prevent duplicate save
  }

  // Save tasks array to Local Storage
  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(li => {
      tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add task function
  function addTask(taskText, save = true) {
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create new li
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove functionality
    removeButton.onclick = function () {
      taskList.removeChild(li);
      saveTasks();
    };

    // Append button to li, then li to list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Save to Local Storage if not loading from it
    if (save) {
      saveTasks();
    }
  }

  // Event listeners
  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks on page load
  loadTasks();
});