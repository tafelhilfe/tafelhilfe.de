<template>
  <div>
    <volunteer-content />
  </div>
</template>

<script>

  import VolunteerContent from '../components/helfer'
  export default {
    name: "helfer",
    transition: 'fadeLeft',
    components: {
      VolunteerContent
    }
  }
</script>
