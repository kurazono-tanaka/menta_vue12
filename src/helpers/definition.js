'use strict';

const addTask = ({todos,task}) => {
  console.log("addTaskの引数確認");
  console.log(todos);
  console.log(task);
  const todo = {};
  todo.id = todos.length;
  todo.task = task;
  todo.status = '作業中';
  todos.push(todo);
  console.log("addTaskの返り値確認");
  console.log(todos);
  console.log(todo);
  console.log(todo.task);
  console.log(todo.id);
  console.log(todo.status);

  return {
    objTodos: todos,
  };
};


export default { addTask };