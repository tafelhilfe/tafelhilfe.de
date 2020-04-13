<template>
  <div class="volunteers">
    <stage-voluneers/>
    <teaser_volunteers />
    <TafelnMapComponent />
    <faqs-volunteers/>
  </div>
</template>

<script>
import StageVoluneers from './stage_volunteers'
import FaqsVolunteers from './faqs_volunteers'
import TafelnMapComponent from "./tafelnMapComponent"
import Teaser_volunteers from '@/components/teaser_volunteers'

export default {
  name: 'volunteerContent',
  components: {
    Teaser_volunteers,
    TafelnMapComponent,
    FaqsVolunteers,
    StageVoluneers
  }
}
</script>
