const input = document.querySelector("#taskInput");
const addButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

// Add task on button click
addButton.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText !== "") {
    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add a CSS class for styling
    li.classList.add("task-item");

    // Add a 'completed' toggle on click
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Append to the task list
    taskList.appendChild(li);

    // Clear input
    input.value = "";
  }
});
🔑 Key points
li.classList.add("task-item") → gives each new task a default style.

li.classList.toggle("completed") → lets you click to mark as done (strikethrough, gray, etc.).

Example CSS (styles.css)
css
Copy code
.task-item {
  padding: 8px;
  margin: 5px 0;
  background: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
}

.task-item.completed {
  text-decoration: line-through;
  color: gray;
}