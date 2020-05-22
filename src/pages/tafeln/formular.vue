<template>
  <div class="d-flex">
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
