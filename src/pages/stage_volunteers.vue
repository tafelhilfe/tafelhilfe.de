<template>
    <hero-stage :catch-phrases="cp"/>
</template>
<script>
    import HeroStage from "../components/stage";
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
                }
            }
        }
    }
</script>
