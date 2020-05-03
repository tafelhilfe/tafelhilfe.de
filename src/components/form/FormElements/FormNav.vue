<template>
  <div>
    <div class="d-flex mt-2" :class="{ 'justify-content-end': !formState.activeField > 0, 'justify-content-between': formState.activeField > 0 }">
      <b-button v-if="formState.activeField > 0" variant="primary" class="form-button" @click="$emit('back')">Zurück</b-button>
      <b-button v-if="!formState.isComplete" variant="primary" class="form-button" @click="$emit('next')">{{ formState.isComplete ? 'Absenden' : 'Weiter'}}</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'form-nav',
  inject: ['formState']
}
</script>
