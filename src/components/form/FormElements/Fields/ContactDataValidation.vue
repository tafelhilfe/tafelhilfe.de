<template>
  <div>
    <div v-if="state === 'ERROR'">
      <p class="text-danger">{{ errorMsg }}</p>
    </div>
    <div class="d-flex justify-content-center" v-if="state === 'LOADING'">
      <b-spinner label="Laden..." />
    </div>
    <b-form v-if="state === 'LOADED' || state === 'ERROR'">
      <b-form-group id="tafel-data-name" label="Name" label-for="name">
        <b-form-input class="b-form"
          id="name"
          :value="tafel.name"
          key="name"
          type="text"
          placeholder="Name der Tafel"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group id="tafel-data-adresse" label="Adresse" label-for="adresse">
        <b-form-input class="b-form"
          id="addresse"
          :value="tafel.addresse"
          key="addresse"
          type="text"
          placeholder="Musterstraße 12"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group id="tafel-data-plz" label="Postleizahl" label-for="plz">
        <b-form-input class="b-form"
          id="plz"
          :value="tafel.plz"
          key="plz"
          type="text"
          placeholder="12345"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group id="tafel-data-ort" label="Ort" label-for="ort">
        <b-form-input class="b-form"
          id="ort"
          :value="tafel.ort"
          key="ort"
          type="text"
          placeholder="Musterstadt"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group
        id="tafel-data-contact"
        label="Ansprechpartner"
        label-for="contact"
      >
        <b-form-input class="b-form"
          id="contact"
          :value="tafel.ansprechpartner"
          type="text"
          key="ansprechpartner"
          placeholder="Frau Musterfrau"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group id="tafel-data-tel" label="Telefon" label-for="tel">
        <b-form-input class="b-form"
          id="tel"
          :value="tafel.tel"
          key="tel"
          type="text"
          placeholder="0711/123456789"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group id="tafel-data-mail" label="E-Mail" label-for="mail">
        <b-form-input class="b-form"
          id="mail"
          :value="tafel.mail"
          key="mail"
          type="email"
          placeholder="musterfrau@tafel.de"
          required
          @input.native="updateContact"
        />
      </b-form-group>
      <b-form-group id="tafel-data-url" label="Website" label-for="url">
        <b-form-input class="b-form"
          id="url"
          :value="tafel.url"
          key="url"
          type="text"
          placeholder="tafel-musterstadt.de"
          @input.native="updateContact"
        />
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
      state: 'LOADING',
      errorMsg: ''
    }
  },
  created() {
    this.$store.commit('lead/updateField', { key: 'contactData', value: {} })
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
        this.$store.commit('lead/updateField', {
          key: 'contactData',
          value: tafel
        })
        this.state = 'LOADED'
        this.$emit('validated')
      })
      .catch((e) => {
        this.state = 'ERROR'
        this.errorMsg = `Wir konnten leider keine Tafel mit der PLZ: ${this.plz} finden. Bitte geben Sie Ihre Daten unten ein.`
      })
  },
  computed: {
    ...mapGetters({
      plz: 'lead/plz'
    }),
    tafel: {
      get() {
        return this.$store.state.lead.formData.contactData || {}
      }
    }
  },
  methods: {
    updateContact(e) {
      console.log(e.target)
      this.$store.commit('lead/updateContact', {
        key: e.target.id,
        value: e.target.value
      })
      this.$emit('validated')
    },
    ...mapMutations({
      updateField: 'lead/updateField'
    })
  }
}
</script>
