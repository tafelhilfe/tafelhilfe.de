<template>
  <div class="bar"></div>
</template>
<script>
import { TimelineLite } from 'gsap'
export default {
  name: 'FormProgress',
  inject: ['formState'],
  computed: {
    percent() {
      return (this.formState.activeField / this.formState.formLength) * 100
    }
  },
  watch: {
    percent(newVal) {
      const el = document.getElementsByClassName('bar')
      const tl = new TimelineLite()
      tl.to(el, 1, {
        width: newVal + '%'
      })
    }
  }
}
</script>

<style scoped>
.bar {
  height: 7px;
  width: 0px;
  background-color: #fefaa1;
  border-radius: 2px;
  position: fixed;
  bottom: 66px;
}
</style>
