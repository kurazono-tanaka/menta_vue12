'use strict';

const addTask = ({ todos, task }) => {
  const todo = {
    id: todos.length,
    task,
    status: '作業中',
  };
  todos.push(todo);

  return {
    todosAdd: todos,
  };
};

const deleteTask = ({ todos, _index }) => {
  todos.splice(_index, 1);
  todos.forEach((todo, index) => {
    todo.id = index;
  });

  return {
    todosDelete: todos,
  };
};

export default { addTask, deleteTask };
