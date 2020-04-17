/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import {
  MglMap,
  MglMarker,
  MglNavigationControl,
  MglGeolocateControl,
  MglPopup
} from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.component('MglMap', MglMap)
Vue.component('MglMarker', MglMarker)
Vue.component('MglNavigationControl', MglNavigationControl)
Vue.component('MglGeolocateControl', MglGeolocateControl)
Vue.component('MglPopup', MglPopup)

Vue.prototype.$mapbox = Mapbox
