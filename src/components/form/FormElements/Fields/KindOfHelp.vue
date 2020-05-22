<template>
  <div>
    <h3>Ja, wir benötigen hilfe bei:</h3>
    <template v-for="(option, key) in options">
      <div :key="key" class="d-flex flex-column">
        <input
          :id="option"
          v-model="selectedValues"
          v-checked:[option]="selectedValues"
          type="checkbox"
          :value="option"
          class="d-none"
        />
        <label
          :for="option"
          class="btn btn-outline-primary btn-lg mb-4 rounded text-left cursor-pointer"
          :class="{ 'bg-primary text-white': selectedValues.includes(option) }"
        >
          <div class="d-flex align-items-center">
            <svg
              class="flex-shrink-0"
              :class="{ 'd-none': selectedValues.includes(option) }"
              style="width: 1.5rem; height: 1.5rem"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M15 17H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z"
              ></path>
            </svg>
            <svg
              class="flex-shrink-0"
              :class="{ 'd-none': !selectedValues.includes(option) }"
              style="width: 1.5rem; height: 1.5rem"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 9.8L6.85714 13L14 5" />
              <path
                d="M15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17Z"
              />
            </svg>
            <div class="ml-2">{{ option }}</div>
          </div>
        </label>
      </div>
    </template>
    <div class="border border-top mb-4"></div>
    <input id="needsHelp" v-model="noHelp" type="checkbox" class="d-none" />
    <label
      for="needsHelp"
      class="btn btn-outline-primary btn-lg mb-4 rounded text-left cursor-pointer"
      :class="{ 'bg-primary text-white': noHelp }"
    >
      <div class="d-flex align-items-center">
        <svg
          class="flex-shrink-0"
          :class="{ 'd-none': noHelp }"
          style="width: 1.5rem; height: 1.5rem"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M15 17H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z"
          ></path>
        </svg>
        <svg
          class="flex-shrink-0"
          :class="{ 'd-none': !noHelp }"
          style="width: 1.5rem; height: 1.5rem"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 9.8L6.85714 13L14 5" />
          <path
            d="M15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17Z"
          />
        </svg>
        <div class="ml-2">Aktuell benötigen wir keine Hilfe</div>
      </div>
    </label>
    <h3>Sonstige Infos:</h3>
    <b-textarea v-model="text" />
  </div>
</template>
<script>
export default {
  directives: {
    checked(el, binding) {
      return binding.value.includes(binding.arg)
        ? (el.checked = true)
        : (el.checked = false)
    }
  },
  props: {
    value: {
      required: false,
      default: () => []
    },
    data: {
      required: false
    }
  },
  data() {
    return {
      selectedValues:
        this.$store.state.lead.formData.kindOfHelp.choices === undefined
          ? []
          : this.$store.state.lead.formData.kindOfHelp.choices,
      text: '',
      options: this.data.choices,
      noHelp:
        !this.$store.state.lead.formData.kindOfHelp.needHelp === false ? false : ''
    }
  },
  watch: {
    selectedValues(newVal) {
      if (newVal.length > 0) {
        this.noHelp = false
      }
      this.selectedValues = newVal
      this.update()
    },
    text(newVal) {
      this.text = newVal
      this.update()
    },
    noHelp(newVal) {
      if(newVal === true) {
        this.selectedValues = []
      }
      this.update()
    }
  },
  methods: {
    update() {
      if(this.text.length > 0 && this.selectedValues.length > 0) {
        this.$emit('input', {
          text: this.text,
          choices: this.selectedValues,
          needHelp: !this.noHelp
        })
      } else if (this.selectedValues.length > 0) {
        this.$emit('input', {
          choices: this.selectedValues,
          needHelp: !this.noHelp
        })
      } else {
        this.$emit('input', { needHelp: !this.noHelp })
      }
    }
  },
  created() {
    if (this.value.length > 0) this.selectedValues = this.value
  }
}
</script>
<style>
label {
  display: block;
}
</style>
