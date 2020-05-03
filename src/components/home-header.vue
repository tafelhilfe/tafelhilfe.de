<template>
  <div>
    <header>
      <div class="d-none d-md-block fixed-top mt-2 mt-sm-4 text-center">
        <Logo
          class="px-4 py-2 rounded-pill text-secondary shadow-lg bg-white logo"
        />
      </div>
      <div class="d-md-none d-flex justify-content-center bg-light">
        <Logo style="height: 10vh" class="text-secondary w-50 py-2" />
      </div>
    </header>
  </div>
</template>

<script>
import Logo from '~/assets/images/tafelhilfe_logo_fance_green.svg?inline'

export default {
  name: 'Myheader',
  components: {
    Logo
  },
  props: {
    variant: {
      default: 'light'
    }
  }
}
</script>
