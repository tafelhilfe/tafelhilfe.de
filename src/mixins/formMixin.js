import { TimelineLite, Elastic } from 'gsap'

export default {
  data() {
    return {
      // local object variable to store form data
      formData: {},

      // Reactive object to be used for Provide/Inject
      formState: {
        activeField: 0,
        isNext: true,
        formLength: this.formFields.length,
        isComplete: false,
        submitStatus: 'NOT',
        disclaimer: false,
        isValid: false,
        nextField: 0,
        backStack: []
      }
    }
  },
  computed: {
    activeFieldName() {
      return this.fields[this.formFields[this.formState.activeField].name]
    },
    isCurrentFieldValid() {
      if (this.isLastField) {
        return this.activeFieldName && this.activeFieldName.valid
      }
    },
    isLastField() {
      return this.formState.activeField < this.formState.formLength
    }
  },
  watch: {
    isLastField(newValue) {
      !newValue
        ? (this.formState.isComplete = true)
        : (this.formState.isComplete = false)
    },
    isCurrentFieldValid(newValue) {
      newValue
        ? (this.formState.isValid = true)
        : (this.formState.isValid = false)
    }
  },
  methods: {
    next() {
      this.formState.isNext = true
      if (this.formState.activeField === 6 && this.formState.isComplete) {
        this.submit()
      } else {
        this.checkData()
        this.isCurrentFieldValid ? this.proceed() : this.decline('.field-area')
      }
    },
    back() {
      this.formState.isNext = false
      this.formState.activeField = this.formState.backStack.pop()
    },
    submit() {
      this.formState.isNext = true
      this.isCurrentFieldValid ? this.proceed() : ''
      this.formState.submitStatus = 'SENDING'
      this.$api
        .post('/status', this.$store.state.lead.formData)
        .then((res) => {
          this.formState.submitStatus = 'DONE'
        })
        .catch((e) => {
          this.formState.submitStatus = 'ERROR'
        })
    },
    proceed() {
      this.formState.backStack.push(this.formState.activeField)
      if (this.formState.activeField < this.formState.nextField) {
        this.formState.activeField = this.formState.nextField
      } else {
        this.isLastField ? this.formState.activeField++ : ''
      }
    },
    checkData() {
      if (this.formData.open === true) {
        delete this.formData.openAgain
        delete this.$store.state.lead.formData.openAgain
      }
    },
    decline(element) {
      // Shake form area when the field is invalid
      const tl = new TimelineLite()
      tl.to(element, 0.1, { x: 30 })
      tl.to(element, 3, {
        x: 0,
        color: '#ef6574',
        ease: Elastic.easeOut.config(0.9, 0.1)
      })
    }
  }
}
