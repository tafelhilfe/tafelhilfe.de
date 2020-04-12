<template>
    <header class="fixed-top text-center mt-2 mt-sm-4">
        <b-button to="/" pill :variant="variant" size="lg" class="shadow-lg px-4">
          <span class="text-secondary barcelony">tafel</span>
          <Logo class="logo"/>
          <span class="text-secondary barcelony">hilfe</span>
        </b-button>
    </header>
</template>

<script>
  import Logo from "~/assets/images/tafelhilfe.svg"

  export default {
      name: "myheader",
      props: {
          'variant': {
              default:  'light'
          }
      },
      components: {
        Logo
      },
  }
</script>
