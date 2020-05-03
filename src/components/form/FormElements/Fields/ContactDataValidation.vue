<template>
  <div>
    <div v-show="error">
      <p class="text-danger">{{ errorMsg }}</p>
    </div>
    <b-form v-if="show">
      <b-form-group id="tafel-data-name" label="Name" label-for="name">
        <b-form-input
          id="name"
          v-model="tafel.name"
          type="text"
          placeholder="Name der Tafel"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="tafel-data-adresse" label="Adresse" label-for="adresse">
        <b-form-input
          id="name"
          v-model="tafel.addresse"
          type="text"
          placeholder="Musterstraße 12"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="tafel-data-plz" label="Postleizahl" label-for="plz">
        <b-form-input
          id="plz"
          v-model="tafel.plz"
          type="text"
          placeholder="12345"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="tafel-data-ort" label="Ort" label-for="ort">
        <b-form-input
          id="ort"
          v-model="tafel.ort"
          type="text"
          placeholder="Musterstadt"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="tafel-data-contact"
        label="Ansprechpartner"
        label-for="contact"
      >
        <b-form-input
          id="contact"
          v-model="tafel.ansprechpartner"
          type="text"
          placeholder="Frau Musterfrau"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="tafel-data-tel" label="Telefon" label-for="tel">
        <b-form-input
          id="tel"
          v-model="tafel.tel"
          type="text"
          placeholder="0711/123456789"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="tafel-data-mail" label="E-Mail" label-for="mail">
        <b-form-input
          id="mail"
          v-model="tafel.mail"
          type="email"
          placeholder="musterfrau@tafel.de"
          required
          @change="updated"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="tafel-data-url" label="Website" label-for="url">
        <b-form-input
          id="url"
          v-model="tafel.url"
          type="text"
          placeholder="tafel-musterstadt.de"
          @change="updated"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ContactDataValidation',
  data() {
    return {
      tafel: {},
      show: true,
      error: false,
      errorMsg: ''
    }
  },
  created() {
    this.$api
      .get(`/tafeln/filter?plz=${this.plz}`)
      .then((res) => {
        const data = res.data[0]
        const tafel = {}
        tafel.name = data.name
        tafel.addresse = data.addresse
        tafel.plz = data.plz
        tafel.ort = data.ort
        tafel.ansprechpartner = data.ansprechpartner
        tafel.tel = data.tel
        tafel.mail = data.mail
        tafel.url = data.url
        this.updateField({ key: 'tafelID', value: data.id })
        this.tafel = tafel
        this.updated()
      })
      .catch((e) => {
        this.error = true
        this.errorMsg = `Wir konnten leider keine Tafel mit der PLZ: ${this.plz} finden. Bitte geben Sie Ihre Daten unten ein.`
      })
  },
  methods: {
    updated() {
      this.$emit('input', this.tafel)
    },
    ...mapMutations({
      updateField: 'lead/updateField'
    })
  },
  computed: {
    ...mapGetters({
      plz: 'lead/plz'
    })
  }
}
</script>
