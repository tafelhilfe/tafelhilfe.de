<template>
  <div class="">
    <type-based-transition transition-type="fadeUpDown">
      <button
        v-if="formState.isValid"
        v-colorswatch:bg="formState.activeField"
        class=""
      >
        Ok
      </button>
      <span v-else> <slot /> </span>
    </type-based-transition>
  </div>
</template>
<script>
import TypeBasedTransition from '../Transitions/TypeBasedTransition.vue'
export default {
  name: 'FieldError',
  inject: ['formState'],
  components: {
    TypeBasedTransition
  }
}
</script>
