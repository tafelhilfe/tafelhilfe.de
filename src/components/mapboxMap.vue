<template>
  <client-only>
    <MglMap
      :interactive="true"
      :center="tafeln.length > 0 ? tafeln[0].coords : [10.0183, 51.1334]"
      :zoom="4"
      :max-bounds="[
        [5.391687, 46.930529],
        [15.614991, 55.662883]
      ]"
      :access-token="accessToken"
      :map-style="mapStyle"
      :attribution-control="false"
      @load="onMapLoaded"
    >
      <MglNavigationControl position="top-right" />
      <MglMarker
        v-for="(tafel, i) in tafeln"
        :key="tafel.id"
        :ref="tafel.id"
        :coordinates="[tafel.coords.lng, tafel.coords.lat]"
        @click="markerClicked"
      >
        <b-icon-house-fill
          v-if="tafel.currentStatus && tafel.currentStatus.open"
          slot="marker"
          variant="secondary"
        />
        <b-icon-house-fill
          v-else-if="tafel.currentStatus && !tafel.currentStatus.open"
          slot="marker"
          variant="danger"
        />
        <b-icon-house-fill v-else slot="marker" variant="warning" />
        <MglPopup>
          <div>{{ tafel.name }}</div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </client-only>
</template>

<script>
export default {
  name: 'MapboxMap',

  data() {
    return {
      accessToken: process.env.MAPBOX_API_KEY, // Mapbox access token
      mapStyle: 'mapbox://styles/lgastler/ck8ngh4k82kwh1io0d1mmajla',
      tafeln: [] // Mapbox style
    }
  },

  created() {
    this.map = null
    this.fetchTafeln()
  },
  methods: {
    onMapLoaded(event) {
      this.map = event.map
      if (process.browser) {
        this.promisify = require('map-promisified')
        this.actions = this.promisify(event.map)
      }
    },
    fetchTafeln() {
      this.$api.get('/status').then((res) => {
        this.addTafeln(res.data)
      })
    },
    findByPlz(plz) {
      this.$api
        .get('/tafeln/geo?plz=' + plz)
        .then((res) => {
          return res.data
        })
        .catch((e) => {
          this.$emit('errorFetching')
        })
        .then((data) => {
          // setup Coordinates of searched PLZ
          if (data !== undefined && data.tafeln.length > 0) {
            this.addTafeln(data.tafeln)
            this.flyToCoords(data.center) // move map to PLZ
            this.$emit('foundTafeln', data.tafeln) // return found Tafeln near PLZ
          } else {
            this.$emit('errorFetching')
          }
        })
    },
    markerClicked(e) {
      this.flyToCoords(e.marker._lngLat)
    },
    addTafeln(tafeln) {
      tafeln.forEach((tafel) => {
        if (!this.tafeln.find(el => el.id === tafel.id )) {
          this.tafeln.push(tafel)
        }
      })
    },
    togglePopup(tafel) {
      this.$refs[tafel.id][0].togglePopup()
    },
    /**
     * async method to move Mapbox card to new Position
     * @param coords Coordinates
     * @returns {Promise<void>}
     */
    async flyToCoords(coords, zoom = 9) {
      await this.actions.flyTo({
        center: coords,
        zoom,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      })
    }
  }
}
</script>
