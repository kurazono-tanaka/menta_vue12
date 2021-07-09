<template>
  <div class="home">
    <h1>ToDoリスト</h1>
    <label><input type="radio" name="work" checked>すべて</label>
    <label><input type="radio" name="work" >作業中</label>
    <label><input type="radio" name="work" >完了</label>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <!-- 1行の繰り返し -->
        <tr v-for="(obj,index) in todos" :key="index">
          <td>{{obj.id}}</td>
          <td>{{obj.task}}</td>
          <td>{{obj.status}}</td>
          <td>{{obj}}</td>
        </tr>

      </tbody>

    </table>
  <h2>新規タスクの追加</h2>
  <input type="text" id="task" v-model="inputTask">
  <button id="add" v-on:click="addTask">追加</button>
  </div>
</template>

<script>
import definition from '@/helpers/definition';

export default {
  name: 'home',
  data() {
    return {
      inputTask:'',
      todos:[],
      id:'',
      task: '',
      status:'',
    };
  },
  methods: {
    addTask() {
      const obj = definition.addTask({
        todos: this.todos,
        task: this.inputTask
      });
      console.log("objの中身");
      console.log(obj);
      console.log(obj.todos);
      this.todos = obj.todos;
    }
  },
};
</script>


