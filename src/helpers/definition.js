'use strict';

const addTask = ({ todos, task }) => {
  const todo = {};
  todo.id = todos.length;
  todo.task = task;
  todo.status = '作業中';
  todos.push(todo);

  return {
    addTodos: todos,
  };
};

const deleteTask = ({ todos, _index }) => {
  todos.splice(_index, 1);
  todos.forEach((todo, index) => {
    todo.id = index;
  });

  return {
    deleteTodos: todos,
  };
};

export default { addTask, deleteTask };
