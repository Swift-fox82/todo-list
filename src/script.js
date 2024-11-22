const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className =
    "flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.className = "text-gray-800";

  const doneButton = addButton(taskContent);
  const editButton = editTask(taskContent);
  const removeTask = deleteTask(taskList, taskItem);

  const btnContainer = document.createElement("div");
  btnContainer.className = "space-x-2";

  btnContainer.appendChild(doneButton);
  btnContainer.appendChild(editButton);
  btnContainer.appendChild(removeTask);

  taskItem.appendChild(taskContent);
  taskItem.appendChild(btnContainer);
  taskList.appendChild(taskItem);

  taskInput.value = "";
});

function addButton(taskContent) {
  const doneButton = document.createElement("button");

  doneButton.textContent = "✔️";
  doneButton.className = "text-green-500 hover:text-green-600";
  doneButton.addEventListener("click", () => {
    taskContent.classList.toggle("line-through");
    taskContent.classList.toggle("text-gray-400");
  });
  return doneButton;
}

function editTask(taskContent) {
  const editButton = document.createElement("button");
  editButton.textContent = "✏️";
  editButton.className = "text-blue-500 hover:text-blue-600";
  editButton.addEventListener("click", () => {
    const editInput = prompt("new text", taskContent.textContent);
    if (editInput) taskContent.textContent = editInput.trim();
  });
  return editButton;
}

function deleteTask(taskList, taskItem) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.className = "text-red-500 hover:text-red-600";

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
  return deleteButton;
}
