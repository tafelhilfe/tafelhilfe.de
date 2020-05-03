<template>
  <div v-if="isComplete" id="complete" class="form-complete">
    <h2>Vielen Dank für Ihre Rückmeldung.</h2>
    <h5 class="mb-4">
      Bitte überprüfen Sie Ihre eingaben. Falls sie einen Fehler finden können
      Sie einfach zurück gehen und diesen ändern. Ansonsten können sie das
      Formular absenden.
    </h5>
    <template v-for="(item, key) in $store.state.lead.formData">
      <div class="font-weight-bolder">
        <span>{{ getNameForKey(key) }}</span>
        <div class="ml-4" v-html="getFormattedDataForKey(key, item)"/>
      </div>
    </template>
    <b-button class="my-3" @click="submit">Absenden!</b-button>
  </div>
</template>

<script>
export default {
  name: 'FormResult',
  inject: ['formState'],
  computed: {
    isComplete() {
      return this.formState.isComplete
    }
  },
  methods: {
    submit() {
      console.log(this.$store.state.lead.formData)
      this.$api.post('/status', this.$store.state.lead.formData).then((res) => {
        this.$router.push({ path: '/'})
      })
    },
    getNameForKey(key) {
      switch(key) {
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
      switch(key) {
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
                  ${item.needHelp ? (`
                    <ul>
                      ${item.choices.map(choice => (
                        '<li>' + choice + '</li>'
                      )).join("")}
                    </ul>
                  `) : ''}
                </div>`
      }
    }
  }
}
</script>
