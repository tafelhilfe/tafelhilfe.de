<template>
  <div class="container content">
    <stage-voluneers/>
    <!--<mapbox-map/>-->
    <faqs-volunteers/>
  </div>
</template>

<script>
  import StageVoluneers from './stage_volunteers'
  import FaqsVolunteers from './faqs_volunteers'
 // import MapboxMap from './mapboxMap'

  export default {
    name: 'volunteerContent',
    components: {
 //     MapboxMap,
      FaqsVolunteers,
      StageVoluneers
    }
  }
</script>
