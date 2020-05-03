<template>
  <div class="container d-flex align-items-center justify-content-center">
    <FormConfigProvider />
  </div>
</template>

<script>
import FormConfigProvider from "@/components/form/FormConfigProvider";

export default {
  name: 'TafelnForm',
  components: {
    FormConfigProvider
  }
}
</script>
