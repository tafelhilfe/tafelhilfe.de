<template>
  <div>
    <Header :variant="variant" />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/footer'
import Header from '../components/home-header'
export default {
  components: { Header, Footer },
  data() {
    return {
      variant: 'white'
    }
  }
}
</script>
