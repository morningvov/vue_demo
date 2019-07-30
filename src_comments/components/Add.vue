<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="context"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      addComment: {   //属性名、属性值类型、必要性
        type: Function,
        required: true
      }
    },
    data () {
      return {
        name: '',
        context: ''
      }
    },
    methods: {
      add () {
        // 1、检查输入的合法性
        const name = this.name.trim()
        const context = this.context.trim()
        if (!name || !context) {
          alert('姓名或内容不能为空')
          return
        }
        //2、根据输入的数据封装成一个comment对象
        const comment = {
          name,
          context
        }
        //3、添加到comments中
        this.addComment(comment)

        //4、清除输入
        this.name=''
        this.context=''
      }
    }
  }
</script>

<style scoped>

</style>
