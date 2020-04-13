<template>
  <div id="main">
    <myheader/>
    <nuxt id="content"/>
    <myfooter id="footer"/>
  </div>
</template>
<script>
  import Myfooter from '../components/footer'
  import Myheader from '../components/default-header'

  export default {
    components: {
      Myheader,
      Myfooter
    },
  }
</script>

<style>
  #main {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  #content {
    flex: 1 0 auto;
  }
  #footer {
    flex-shrink: 0;
  }
</style>
