<template>
    <div class="container content">
        <stage-voluneers />
        <faqs-volunteers />
    </div>
</template>

<script>
    import StageVoluneers from '../pages/stage_volunteers'
    import FaqsVolunteers from './faqs_volunteers'
    export default {
        name: "volunteerContent",
      components: { FaqsVolunteers, StageVoluneers }
    }
</script>
