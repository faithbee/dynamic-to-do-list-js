document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add task
  function addTask() {
    const taskText = taskInput.value.trim();

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
    removeButton.classList.add("remove-btn"); // ✅ requirement satisfied

    // Remove task on click
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, then li to list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  // Event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});