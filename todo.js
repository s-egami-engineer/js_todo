'use strict';

const todo = document.getElementById('todo');
const addBtn = document.getElementById('addBtn');
const lists = document.getElementById('lists');

const addTodo = () => {
  if(todo.value) {
    const list = document.createElement('li');
    const deleteBtn = document.createElement('i');

    list.innerText = todo.value;

    deleteBtn.classList.add('fas', 'fa-trash-alt');
    deleteBtn.addEventListener('click', function() {
      deleteTodo(deleteBtn);
    });

    list.appendChild(deleteBtn);
    lists.appendChild(list);
    todo.value = '';

  } else {
    alert('ToDoを入力してください');
  }
}

const deleteTodo = (deleteBtn) => {
  const target = deleteBtn.closest('li');
  lists.removeChild(target);
}

addBtn.addEventListener('click', function() {
  addTodo();
});
