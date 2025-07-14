function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "task-buttons";

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✓";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(taskSpan, editBtn);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  buttonGroup.appendChild(completeBtn);
  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(buttonGroup);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function editTask(taskSpan, button) {
  const currentText = taskSpan.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.className = "edit-input";
  input.value = currentText;

  taskSpan.replaceWith(input);
  button.innerHTML = "💾";

  button.onclick = () => {
    const newText = input.value.trim();
    if (newText === "") {
      alert("Task can't be empty.");
      return;
    }
    taskSpan.textContent = newText;
    input.replaceWith(taskSpan);
    button.innerHTML = "✏";
    button.onclick = () => editTask(taskSpan, button);
  };
}