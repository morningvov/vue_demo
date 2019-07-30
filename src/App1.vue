<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data (){
      return{
        repoName:'',
        repoUrl:''
      }
    },
    mounted () { //在vue初始化时就进行ajax请求
      //发送ajax请求数据
      const url='https://api.github.com/search/repositories?q=vu&sort=stars'
      /*this.$http.get(url).then( //两个回调函数
        //返回成功的结果
        response  =>{
          const result=response.data
         //获取最受欢迎的repo
          const mostRepo=result.items[0]
          this.repoName=mostRepo.name
          this.repoUrl=mostRepo.html_url
       },
        response =>{
          alert("请求失败")
      })*/
      axios.get(url).then(
        response =>{
          const result=response.data
          //获取最受欢迎的repo
          const mostRepo=result.items[0]
          this.repoName=mostRepo.name
          this.repoUrl=mostRepo.html_url
      }).catch(
        error =>{
          alert('请求失败了呀，真惨！')
        })

    }
  }
</script>

<style scoped>

</style>
