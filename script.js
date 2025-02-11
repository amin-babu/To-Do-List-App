document.addEventListener('DOMContentLoaded', loadTask);

function loadTask(){
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDom(task));
};

function addTask(){
  let textInput = document.getElementById('taskInput');
  let taskText = textInput.value;
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
      <span class="delete btn btn-danger fs-6" onclick="deleteTask(this)">Delete</span>
  </span>
  `;
  ul.appendChild(li);

  
};

function deleteTask(element){
  let li = element.parentElement.parentElement;
  let taskText = li.firstElementChild.innerHTML;
  li.remove();
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks",JSON.stringify(tasks));
};