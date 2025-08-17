document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add new task
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Create <li>
        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("task-item"); // ✅ required

        // Toggle completed state
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Reset input
        taskInput.value = "";
    });
});