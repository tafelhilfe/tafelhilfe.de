<template>
  <div v-if="isComplete" id="complete" class="form-complete">
    <h2 v-if="submitStatus !== 'DONE'">Vielen Dank für Ihre Rückmeldung.</h2>
    <div v-if="submitStatus === 'ERROR'">
      <h3 class="text-danger">Es ist beim übertragen leider ein Fehler aufgetreten, bitte versuchen Sie es erneut.</h3>
    </div>
    <div v-if="submitStatus === 'NOT'">
      <h5 class="mb-4">
        Bitte überprüfen Sie Ihre eingaben. Falls sie einen Fehler finden können
        Sie einfach zurück gehen und diesen ändern. Ansonsten können sie das
        Formular absenden.
      </h5>
      <h5 class="mb-4">
        Vielen Dank für Ihren Beitrag und dass Sie der Aufnahme, Verarbeitung und Weitergabe Ihrer Daten zustimmen. Dies dient dazu, Ihren Bedarf oder Ihr Angebot publik und einer breiteren Öffentlichkeit zugänglich zu machen. Dies umfasst Portale, auf denen sich Freiwillige registiert haben, die gerne bei einer Tafel unterstützen würden (z.B. Quarantänehelden). Sie können Ihren Datensatz jederzeit von Ihrem Widerrufsrecht Gebrauch machen.
      </h5>
      <template v-for="(item, key) in $store.state.lead.formData">
        <div class="font-weight-bolder">
          <span>{{ getNameForKey(key) }}</span>
          <div class="ml-4" v-html="getFormattedDataForKey(key, item)" />
        </div>
      </template>
      <div class="mt-4 d-flex align-items-center">
        <input
          type="checkbox"
          id="checkbox-1"
          name="checkbox-1"
          v-model="disclaimer"
        />
        <label for="checkbox-1" class="ml-1 mb-0"><h5 class="mb-0">Ich akzeptiere die Datenschutzhinweise.</h5></label>
      </div>
    </div>
    <div v-if="submitStatus === 'SENDING'">
      <b-spinner />
    </div>
    <div v-if="submitStatus === 'DONE'">
      <div class="d-flex align-items-center">
        <svg
          class="text-secondary"
          fill="currentColor"
          viewBox="0 0 20 20"
          style="width: 5rem; height: 5rem"
        >
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
        <h2 class="m-0">Die Daten wurden erfolgreich Übertragen</h2>
      </div>
      <b-button
        variant="primary"
        pill
        size="lg"
        class="form-button mt-4"
        @click="$router.push({ path: '/' })"
      >
        <span> Zurück zur Startseite </span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormResult',
  inject: ['formState'],
  data() {
    return {
      disclaimer: false
    }
  },
  watch: {
    disclaimer() {
      console.log(this.formState.disclaimer)
      this.formState.disclaimer = this.disclaimer
    }
  },
  computed: {
    isComplete() {
      return this.formState.isComplete
    },
    submitStatus() {
      return this.formState.submitStatus
    }
  },
  methods: {
    toggleDisclaimer() {
      this.formState.disclaimer = !this.formState.disclaimer
    },
    getNameForKey(key) {
      switch (key) {
        case 'open':
          return 'Aktuell geöffnet:'
        case 'openAgain':
          return 'Wollen Sie in Zukunft wieder öffnen:'
        case 'contactData':
          return 'Kontaktdaten:'
        case 'contactForm':
          return 'Kontaktart:'
        case 'kindOfHelp':
          return 'Brauchen Sie hilfe?'
      }
    },
    getFormattedDataForKey(key, item) {
      switch (key) {
        case 'open':
          return item ? 'Ja' : 'Nein'
        case 'openAgain':
          return item ? 'Ja' : 'Nein'
        case 'contactData':
          return `
            <div>
                <div>Name: ${item.name}</div>
                <div>Addresse: ${item.addresse}, ${item.plz} ${item.ort}</div>
                <div>Ansprechpartner: ${item.ansprechpartner}</div>
                <div>Telefon: ${item.tel}</div>
                <div>E-Mail: ${item.mail}</div>
                <div>Website: ${item.url}</div>
            </div>
          `
        case 'contactForm':
          return item
        case 'kindOfHelp':
          console.log(item.choices)
          return `
              <div>
                <div>${item.needHelp ? 'Ja, bei' : 'Nein'}</div>
                  ${
                    item.needHelp
                      ? `
                    <ul>
                      ${item.choices
                        .map((choice) => '<li>' + choice + '</li>')
                        .join('')}
                    </ul>
                  `
                      : ''
                  }
                </div>`
      }
    }
  }
}
</script>
