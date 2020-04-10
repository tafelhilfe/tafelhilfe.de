<template>
    <hero-stage :catch-phrases="cp"
    :stage="stage"/>
</template>
<script>
    import HeroStage from "./stage";
    export default {
        name: 'stageVoluneers',
        components: {HeroStage},
        data() {
            return {
                cp: {
                    phrase: [
                        {
                            id: "0",
                            headline: "Lorem",
                            subHeadline: "Ipsum",
                            text: "Blindtext Wiederholung Blindtext Wiederholung Blindtext Wiederholung Blindtext Wiederholung "
                        }
                    ]
                },
              stage: {
                  image: {
                    one: {
                      src: 'http://placeimg.com/510/260/people'
                    },
                    two: {
                      src: 'https://placeimg.com/510/260/nature'
                    }
                  }
              }
            }
        }
    }
</script>
