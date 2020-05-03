<template>
  <div class="volunteers">
    <stage-voluneers />
    <teaser_volunteers />
    <TafelnMapComponent />
    <SocialShare />
    <faqs-volunteers />
  </div>
</template>

<script>
import Teaser_volunteers from '@/components/teaser_volunteers'
import SocialShare from '@/components/socialShare'
import StageVoluneers from './stage_volunteers'
import FaqsVolunteers from './faqs_volunteers'
import TafelnMapComponent from './tafelnMapComponent'

export default {
  name: 'VolunteerContent',
  components: {
    SocialShare,
    Teaser_volunteers,
    TafelnMapComponent,
    FaqsVolunteers,
    StageVoluneers
  }
}
</script>


