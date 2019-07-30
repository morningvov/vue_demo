import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

//注册成标签(全局) --全部主键都可以用
Vue.component(Button.name,Button)

new Vue({
  el:"#app",
  components:{App},
  template:'<App/>'
})
