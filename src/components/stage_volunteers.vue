<template>
    <hero-stage :catch-phrases="cp" :stage="stage"/>
</template>
<script>
    import HeroStage from "./stage";
    export default {
        name: 'stageVoluneers',
        components: {HeroStage},
        data() {
            return {
                cp: {
                    text: 'Mit #tafelhilfe kannst du dich schnell und einfach bei Tafeln in deiner Nähe engagieren.',
                    phrase: [
                        {
                            id: "0",
                            headline: "Die Mensa hat zu?",
                            subHeadline: "Dann teil doch selber Essen aus!"
                        },
                        {
                            id: "1",
                            headline: "Dein Fitnessstudio hat zu?",
                            subHeadline: "Wir brauchen deine starken Arme!"
                        },
                        {
                            id: "2",
                            headline: "Du musst gerade dein Studium nicht organisieren?",
                            subHeadline: "Dann organisiere Lebensmittel für Andere!"
                        }
                    ]
                },
              stage: {
                  image: {
                    one: {
                      src: 'assets/images/home_tafeln.jpg'
                    },
                    two: {
                      src: 'assets/images/home_volunteer.jpg'
                    }
                  }
              }
            }
        }
    }
</script>
