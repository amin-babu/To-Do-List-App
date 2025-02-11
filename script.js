function addTask(){
  let textInput = document.getElementById('taskInput');
  let taskText = textInput.value;

  let ul = document.getElementById('taskList');
  // console.log(ul);
  let li = document.createElement('li');
  li.innerHTML = `
  <span>${taskText}</span>
  `;
  ul.appendChild(li);
};