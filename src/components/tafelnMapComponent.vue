<template>
  <div class="container-lg content">
    <div class="row mb-5">
      <div
        class="d-flex flex-column flex-column-reverse flex-lg-row justify-content-center"
      >
        <div class="mt-8">
          <AspectRatio :ar="mapAspectRatio" :width="mapWidth">
            <div
              id="offset-bg"
              class="d-none d-lg-block bg-light shadow-lg"
            ></div>
            <TafelnMap
              ref="map"
              class="shadow-lg"
              @errorFetching="showPLZError"
              @foundTafeln="foundTafeln"
            />
          </AspectRatio>
        </div>
        <div class="text-center text-tertiary my-auto">
          <div class="m-4 m-md-8">
            <h1>Sieh mal, wo du helfen kannst!</h1>
            <p class="mt-4">
              Durch die Rückmeldungen der Tafeln können wir dir genau sagen, wo
              überhaupt Hilfe benötigt wird. Halte nach den gelben und roten
              Flaggen Ausschau, denn dort wird deine Hilfe gerade dringend
              gebraucht.
            </p>
            <div class="mt-4">
              <b-form @submit.prevent="findByPlz">
                <div class="d-flex flex-column flex-lg-row input-group mb-3">
                  <b-form-input
                    ref="plzInput"
                    v-model="plz"
                    size="lg"
                    class="shadow rounded-pill border-0 font-light pl-4"
                    placeholder="Postleizahl"
                  />
                  <b-button
                    type="submit"
                    size="lg"
                    pill
                    class="ml-lg-4 mt-2 mt-lg-0 px-4 py-2 shadow"
                    >Tafel finden</b-button
                  >
                </div>
                <div v-if="errorVisible" class="text-danger">
                  <p>
                    Die eingegebene Postleizahl konnte nicht gefunden werden.
                    <br class="d-md-none" />Bitte versuche es erneut!
                  </p>
                </div>
              </b-form>
            </div>
          </div>
          <div v-if="visibleTafeln.length > 0" class="mx-md-8">
            <h3>Tafeln in deiner Nähe</h3>
            <div class="mb-4">
              <ul class="list-group shadow mt-4">
                <TafelListItem
                  v-for="(tafel, index) in visibleTafeln"
                  :key="tafel.name"
                  :index="index"
                  :tafel="tafel"
                  @selected="selectedTafel"
                  @togglePopup="togglePopup"
                />
              </ul>
            </div>
            <b-button
              v-if="visibleTafeln.length < 15"
              pill
              class="ml-lg-4 mt-2 mt-lg-0 px-4 py-2 shadow"
              @click="loadTafeln"
              >Mehr laden...</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AspectRatio from './tools/aspectRatio'
import TafelnMap from './mapboxMap'
import TafelListItem from './tafelnMapListItem'

export default {
  name: 'TafelnMapComponent',
  components: {
    TafelListItem,
    TafelnMap,
    AspectRatio
  },
  data() {
    return {
      plz: '',
      nearTafeln: [], // all Tafeln near the current PLZ
      visibleTafeln: [], // all Tafeln visible in the table
      errorVisible: false
    }
  },
  computed: {
    /**
     * Aspect ratio for the map based on the current view size
     * @returns {string} Aspect ratio
     */
    mapAspectRatio() {
      if (this.$mq === 'lg' || this.$mq === 'sm' || this.$mq === 'md') {
        console.log('SMALL')
        return '5:3'
      } else {
        console.log('LARGE')
        return '2:3'
      }
    },

    /**
     * map width for the map based on the current view size
     * @returns {string} width
     */
    mapWidth() {
      if (this.$mq === 'lg' || this.$mq === 'sm' || this.$mq === 'md') {
        return '100%'
      } else {
        return '350px'
      }
    }
  },
  methods: {
    findByPlz() {
      this.errorVisible = false
      this.nearTafeln = []
      if(this.plz.length > 0 && this.plz.length < 6) {
        this.$refs.map.findByPlz(this.plz)
      } else {
        this.showPLZError()
      }
    },
    foundTafeln(value) {
      this.visibleTafeln = []
      this.nearTafeln = value
      this.loadTafeln()
    },
    // adds new Tafeln to the visible array
    loadTafeln() {
      try {
        this.visibleTafeln = this.visibleTafeln.concat(
          this.nearTafeln.splice(0, 3)
        )
      } catch(e) {
        console.log(e)
      }
    },
    showPLZError() {
      this.errorVisible = true
      this.$refs.plzInput.focus()
      this.plz = ''
    },
    selectedTafel(tafel) {
      this.$refs.map.flyToCoords(tafel.coords, 12)
    },
    togglePopup(tafel) {
      this.$refs.map.togglePopup(tafel)
    }
  }
}
</script>

<style scoped>
#offset-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translate(1rem, 1rem);
}
</style>
