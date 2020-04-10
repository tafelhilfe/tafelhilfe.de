import Vue from 'vue';
import Mapbox from "mapbox-gl";
import promisify from 'map-promisified';
import { MglMap, MglMarker } from "vue-mapbox";

Vue.component('MglMap', MglMap);
Vue.component('MglMarker', MglMarker);
Vue.component('promisify', promisify);
Vue.component('Mapbox', Mapbox);

export default {
  methods: {
    onMapLoaded(event) {
      this.map = event.map;
      this.actions = promisify(event.map)
    },
    findByPlz(plz) {
      fetch(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=postleitzahlen-deutschland&q=${plz}&facet=note&facet=plz`
      )
        .then(res => {
          return res.json()
        }).then(data => {
        // setup Coordinates of searched PLZ
        var coords = {}
        coords.lat = data.records[0].geometry.coordinates[1]
        coords.lng = data.records[0].geometry.coordinates[0]

        //filter and sort all Tafeln by distance between searched PLZ and Tafel
        var nearTafeln = tafeln
          .map(tafel => ({...tafel, dist: this.radiusBetweenCoords(coords, tafel.coords)}))
          .sort((a,b) => a.dist - b.dist)
          .slice(0,30)

        this.flyToCoords(coords)    // move map to PLZ
        this.$emit('foundTafeln', nearTafeln ) // return found Tafeln near PLZ
      })
    },

    /**
     * Calculates the distance between 2 Positions based on their Coordinates using the haversine formula
     * @param coords1 first Position
     * @param coords2 second Position
     * @returns {number} Distance bewteen the two Positions
     */
    radiusBetweenCoords(coords1, coords2) {
      var R = 6371 // the earths radius in km
      var phi1 = this.d2r(coords1.lat)
      var phi2 = this.d2r(coords2.lat)
      var deltaPhi = this.d2r(coords2.lat - coords1.lat)
      var deltaLambda = this.d2r(coords2.lng - coords1.lng)

      var a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda /
        2) * Math.sin(deltaLambda / 2)
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      var dist = R * c
      return dist
    },

    /**
     * Converting degrees to radians
     * @param degree
     * @returns {number}
     */
    d2r(degree) {
      var pi = Math.PI;
      return degree / (180 / pi);
    },

    /**
     * async method to move Mapbox card to new Position
     * @param coords Coordinates
     * @returns {Promise<void>}
     */
    async flyToCoords (coords) {
      await this.actions.flyTo({
        center: coords,
        zoom: 9,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  },

  created() {
    this.map =null;
    this.mapbox = Mapbox;
  }
}
