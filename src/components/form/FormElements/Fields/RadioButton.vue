<template>
  <div class="flex flex-row">
    <template v-for="(option, key) in options">
      <div :key="key" class="d-flex flex-column">
        <input
          :id="key"
          type="radio"
          :value="option"
          :checked="option === value"
          class="d-none"
          @input="$emit('input', $event.target.value)"
        />
        <label
          :for="key"
          class="btn btn-outline-primary btn-lg mb-4 rounded text-left cursor-pointer"
          :class="{ 'bg-primary text-white': option === value }"
        >
          <div class="d-flex align-items-center">
            <svg
              v-if="option === value"
              style="width: 1.5rem; height: 1.5rem"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <svg
              v-else
              style="width: 1.5rem; height: 1.5rem"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="ml-2">{{ option }}</span>
          </div>
        </label>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ['options', 'value']
}
</script>

<style scoped></style>
