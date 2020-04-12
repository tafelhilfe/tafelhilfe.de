<template>
  <div>
    <myheader/>
    <nuxt/>
    <myfooter/>
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
