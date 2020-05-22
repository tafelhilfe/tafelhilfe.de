<script>
export default {
  functional: true,
  props: {
    isNext: {
      default: true
    }
  },
  render(h, context) {
    const data = {
      props: {
        appear: true,
        appearActiveClass: 'animated fadeInRight',
        enterActiveClass: context.props.isNext
          ? 'animated fadeInRight'
          : 'animated fadeInLeft',
        leaveActiveClass: context.props.isNext
          ? 'animated fadeOutLeft'
          : 'animated fadeOutRight',
        name: 'data-driven-transition',
        duration: 1000,
        mode: 'out-in'
      }
    }
    return h('transition-group', data, context.children)
  }
}
</script>
