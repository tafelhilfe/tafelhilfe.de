<template>
  <div class="container content">
    <stage-voluneers/>
    <TafelnMapComponent />
    <faqs-volunteers/>
  </div>
</template>

<script>
import StageVoluneers from './stage_volunteers'
import FaqsVolunteers from './faqs_volunteers'
import TafelnMapComponent from "./tafelnMapComponent"

export default {
  name: 'volunteerContent',
  components: {
    TafelnMapComponent,
    FaqsVolunteers,
    StageVoluneers
  }
}
</script>
