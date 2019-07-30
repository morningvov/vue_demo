<template>
  <div id="app">
    <div class="container">
      <search/>
      <UsersMain/>
    </div>
  </div>
</template>

<script>
  import Main from './components/Main'
  import Search from './components/Search'
  export default {
    components:{
      UsersMain:Main,
      Search
    }
  }
</script>

<style scoped>

</style>
