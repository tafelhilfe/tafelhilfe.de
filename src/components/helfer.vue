<template>
  <div class="volunteers">
    <stage-voluneers class="mt-8 mt-md-4" />
    <teaser_volunteers />
    <TafelnMapComponent />
    <SocialShare />
    <faqs-volunteers/>
  </div>
</template>

<script>
import StageVoluneers from './stage_volunteers'
import FaqsVolunteers from './faqs_volunteers'
import TafelnMapComponent from "./tafelnMapComponent"
import Teaser_volunteers from '@/components/teaser_volunteers'
import SocialShare from "@/components/socialShare";

export default {
  name: 'volunteerContent',
  components: {
    SocialShare,
    Teaser_volunteers,
    TafelnMapComponent,
    FaqsVolunteers,
    StageVoluneers
  }
}
</script>
