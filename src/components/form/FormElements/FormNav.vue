<template>
  <div>
    <div
      class="d-flex mt-4"
      :class="{
        'justify-content-end': !formState.activeField > 0,
        'justify-content-between': formState.activeField > 0
      }"
    >
      <b-button
        v-if="formState.activeField > 0 && formState.submitStatus !== 'DONE'"
        variant="primary"
        pill
        size="lg"
        class="form-button"
        @click="$emit('back')"
        >
        <div class="d-flex align-items-center">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            style="height: 2rem; width: 2rem"
            class="ml-n3"
          >
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span> Zurück </span>
        </div>
      </b-button>
      <b-button
        v-if="formState.submitStatus !== 'DONE'"
        variant="primary"
        pill
        size="lg"
        class="form-button"
        :disabled="formState.isComplete && formState.disclaimer === false"
        @click="$emit('next')"
        >
        <div class="d-flex align-items-center">
          <span> {{ formState.isComplete ? 'Absenden' : 'Weiter' }} </span>
          <svg
            v-if="!formState.isComplete"
            fill="currentColor"
            viewBox="0 0 20 20"
            style="height: 2rem; width: 2rem"
            class="mr-n3"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            v-if="formState.isComplete"
            fill="currentColor"
            viewBox="0 0 20 20"
            style="height: 2rem; width: 2rem"
            class="ml-1 mr-n1"
          >
            <path
              d="M2 10a4 4 0 004 4h3v3a1 1 0 102 0v-3h3a4 4 0 000-8 4 4 0 00-8 0 4 4 0 00-4 4zm9 4H9V9.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 9.414V14z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>

      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormNav',
  inject: ['formState']
}
</script>
