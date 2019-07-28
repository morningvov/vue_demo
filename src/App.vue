<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTool="deleteCompleteTool" :selectAllCheck="selectAllCheck"/>
    </div>
  </div>
</template>

<script>
  // import pubsub from 'pubsub-js'
  import TodoHeader from './comments/TodoHeader'
  import TodoList from './comments/TodoList'
  import TodoFooter from './comments/TodoFooter'

  export default {
    data (){
      return{
        //将字符串转换成JSON格式
        todos: JSON.parse(window.localStorage.getItem("title_key") || '[]')
      }
    },
    watch:{  //监视
      todos:{
        deep: true, //深度监视
        handler:function (value) {
          //将todos最新的值的JSON数据，保存到LocalStorage
          window.localStorage.setItem('title_key',JSON.stringify(value))
        }
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      selectAllCheck(Check){   //全选/全不选
        //遍历  将todos中所有todo的complete的值变为Check
        this.todos.forEach(todo => todo.complete = Check)
      },
      deleteCompleteTool(){   //清除掉所有complete为true的todo,filter过滤掉所有complete为true
        this.todos=this.todos.filter(todo => !todo.complete)
      }
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
