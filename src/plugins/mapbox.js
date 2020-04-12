/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { MglMap, MglMarker } from 'vue-mapbox'
import Mapbox from 'mapbox-gl'
import promisify from 'map-promisified'

Vue.component('MglMap', MglMap)
Vue.component('MglMarker', MglMarker)

Vue.prototype.$mapbox = Mapbox
Vue.prototype.$promisify = promisify
