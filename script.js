document.addEventListener('DOMContentLoaded', loadTask);

function loadTask(){
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDom(task));
};

function addTask(){
  let textInput = document.getElementById('taskInput');
  let taskText = textInput.value;

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  addTaskToDom(taskText);

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  textInput.value = '';
};

function addTaskToDom(taskText){
  let ul = document.getElementById('taskList');
  let li = document.createElement('li');
  li.innerHTML = `
  <span>${taskText}</span>
  <span>
    <span class="btn btn-warning btn-sm" onclick="editTask(this)">Edit</span>
    <span class="delete btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</span>
  </span>
  `;
  ul.appendChild(li);
};

function editTask(element) {
  let li = element.parentElement.parentElement;
  let oldTaskText = li.firstElementChild.innerHTML;
  let newTaskText = prompt("Edit your task:", oldTaskText);

  if (newTaskText && newTaskText.trim() !== "") {
      li.firstElementChild.innerHTML = newTaskText.trim();
      updateLocalStorage(oldTaskText, newTaskText.trim());
  }
}

function deleteTask(element){
  let li = element.parentElement.parentElement;
  let taskText = li.firstElementChild.innerHTML;
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  li.remove();
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks",JSON.stringify(tasks));
};

function updateLocalStorage(oldTask, newTask) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let index = tasks.indexOf(oldTask);
  if (index !== -1) {
      tasks[index] = newTask;
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

