<template>
  <div>
    <myheader :variant="variant"/>
    <nuxt />
    <myfooter/>
  </div>
</template>
<script>
  import Myfooter from '../components/footer'
  import Myheader from '../components/home-header'
  export default {
    components: { Myheader, Myfooter },
    data() {
      return {
        variant: 'white'
      }
    }
  }
</script>
