import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 922,
    xl: Infinity
  },
  defaultBreakpoint: 'sm'
})
