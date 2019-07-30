/*
使用Localstorage存储数据的工具模块

1、函数
2、对象
需要向外暴露一个功能还是多个功能
* */

const TODOS_KEY='title_key'

export default {

  saveTodos (todos) {
    //将todos最新的值的JSON数据，保存到LocalStorage
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }

}
