<template>
    <header class="fixed-top text-center mt-2 mt-sm-4">
        <b-button to="/" pill :variant="variant" size="lg" class="shadow-lg px-4">
          <Logo class="text-secondary logo"/>
        </b-button>
    </header>
</template>

<script>
  import Logo from "~/assets/images/tafelhilfe_logo_fance_green.svg?inline"

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
