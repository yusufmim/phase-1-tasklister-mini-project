document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Handle form submission
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      
      // Get task description from input field
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();
      
      if (taskText !== "") {
          addTask(taskText);
          taskInput.value = ""; // Clear input field after adding task
      }
  });

  // Function to add task to the list
  function addTask(taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      
      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => taskItem.remove());
      
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  }
});

