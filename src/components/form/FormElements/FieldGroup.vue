<template>
    <div v-if="active" :key="fieldId" class="">
      <slot />
    </div>
</template>
<script>
import DataDrivenTransition from '../Transitions/DataDrivenTransition.vue'
export default {
  name: 'FieldGroup',
  components: {
    DataDrivenTransition
  },
  props: ['fieldId'],
  inject: ['formState'],
  computed: {
    active() {
      return this.formState.activeField === this.fieldId
    },
    isNext() {
      return this.formState.isNext
    }
  }
}
</script>
