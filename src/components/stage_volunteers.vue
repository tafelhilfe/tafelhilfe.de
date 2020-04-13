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
                      src: 'https://tafel-jugend.de/fileadmin/user_upload/ueber_uns/vor_ort_2_intro.jpg'
                    },
                    two: {
                      src: 'https://tafel-jugend.de/fileadmin/_processed_/b/e/csm_nachbarschaftschallenge_47d6b0a700.png'
                    }
                  }
              }
            }
        }
    }
</script>
