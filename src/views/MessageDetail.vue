<template>
    <ul>
      <p>{{$route.params.id}}</p>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
</template>

<script>
  export default {
    data(){
      return{
        messageDetail:[]
      }
    },
    mounted () {   //只是在初始化的时候进行异步操作，即只进行一次
      setTimeout(()=>{    //模拟ajax请求
        const allMessageDetails=[    //这些数据都是从后台得到的
          {
            id:1,
            title:'messages001',
            content: 'messages001 content....'
          },
          {
            id:2,
            title:'messages002',
            content: 'messages002 content....'
          },
          {
            id:4,
            title:'messages004',
            content: 'messages004 content....'
          }
        ]
        this.allMessageDetails=allMessageDetails      //初始化 allMessages，使其变成全局变量
        const id=this.$route.params.id*1    //获取当前路由中params参数中的id
        this.messageDetail=allMessageDetails.find(allMessage => allMessage.id===id)
      },1000)
    },

    watch:{   //监视路由路径的变化
      $route:function (value) {  //路由路径(param)发生了变化
        const id=value.params.id*1    //获取到的id可能为文本值，由于是url里面的，故乘以一
        this.messageDetail=this.allMessageDetails.find(allMessage => allMessage.id===id)
      }
    }

  }
</script>

<style scoped>

</style>
