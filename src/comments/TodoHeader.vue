<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
    v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
  export default {
    props:{
      addTodo:Function
    },
    data (){
      return{
        title:''
      }
    },
    methods:{
      add (){
        // 1.验证数据的合法性
       const title=this.title.trim()
        if (!title){
          alert("输入的值不能为空")
          return
        }
        // 2、将输入的数据封装成一个对象
        const todo={
          title,
          complete:false
        }
        // 3、将该对象放入到数组当中去
        this.addTodo(todo)
        // 4、清除输入框的值
        this.title=""
      }
    }
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>
