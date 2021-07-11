<template>
  <div class="home">
    <h1>ToDoリスト</h1>
    <label><input type="radio" value="すべて" v-model="filter" />すべて</label>
    <label><input type="radio" value="作業中" v-model="filter" />作業中</label>
    <label><input type="radio" value="完了" v-model="filter" />完了</label>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in filterTodos" :key="obj.id">
          <td>{{ obj.id }}</td>
          <td>{{ obj.task }}</td>
          <td>
            <button @click="statusTask(obj.id)">{{ obj.status }}</button>
          </td>
          <td>
            <button @click="deleteTask(obj.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>新規タスクの追加</h2>
    <input type="text" id="task" v-model="inputTask" ref="focusThis" />
    <button id="add" @click="addTask">追加</button>
  </div>
</template>

<script>
import definition from '@/helpers/definition';

export default {
  name: 'home',
  data() {
    return {
      inputTask: '',
      todos: [],
      id: '',
      task: '',
      status: '',
      deleteFlag: false,
      filter: 'すべて',
    };
  },
  methods: {
    addTask() {
      const obj = definition.addTask({
        todos: this.todos,
        task: this.inputTask,
      });
      this.todos = obj.addTodos;
      this.inputTask = '';
      this.$refs.focusThis.focus();
    },
    deleteTask(index) {
      const obj = definition.deleteTask({
        todos: this.todos,
        _index: index,
      });
      this.todos = obj.deleteTodos;
    },
    statusTask(index) {
      if (this.todos[index].status === '作業中') {
        this.todos[index].status = '完了';
      } else if (this.todos[index].status === '完了') {
        this.todos[index].status = '作業中';
      }
    },
  },
  computed: {
    filterTodos() {
      let todos = [];
      if (this.filter === 'すべて') {
        todos = this.todos;
      } else if (this.filter === '作業中') {
        todos = this.todos.filter((todo) => todo.status === '作業中');
      } else if (this.filter === '完了') {
        todos = this.todos.filter((todo) => todo.status === '完了');
      }
      return todos;
    },
  },
};
</script>
