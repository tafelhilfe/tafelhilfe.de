<template>
    <div class="chris_testseite">
        <section>
            <textImage :tic="tic"/>
            <textImage :tic="tic2"/>
        </section>
    </div>
</template>
<script>
    import textImage from "../components/textImage";

    export default {
        components: {
            textImage
        },
        data() {
            return {
                tic: {
                    headline: "Lorem Ipsum",
                    image: {
                        src: require("../assets/images/dummy-400x400-color123456.jpg"),
                        alt: "test dummy image"
                    },
                    text: {
                        headline: "Weit hinten, hinter den Wortbergen",
                        paragraph: "fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik. Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata, wilden Fragezeichen und hinterhältigen Semikoli, doch das Blindtextchen ließ sich nicht beirren. Es packte seine sieben Versalien, schob sich sein Initial in den Gürtel und machte sich auf den Weg. Als es die ersten Hügel des Kursivgebirges erklommen hatte, warf es einen letzten Blick zurück auf die Skyline seiner Heimatstadt Buchstabhausen, die Headline von Alphabetdorf und die Subline seiner eigenen Straße, der Zeilengasse. Wehmütig lief ihm eine rhetorische Frage über die Wange, dann setzte es seinen Weg fort. Unterwegs traf es eine Copy.",
                        button: {
                            href: "/chris_testseite",
                            label: "Chris Testseiten Link"
                        }
                    }
                },
                tic2: {
                    headline: "Lorem Ipsum 2",
                    image: {
                        src: require("../assets/images/dummy-400x400-color123456.jpg"),
                        alt: "logo 2"
                    },
                    text: {
                        heading: "",
                        paragraph: "test1234 2",
                        button: {
                            href: "/",
                            label: "Button 2"
                        }
                    }
                }
            }
        }
    }
</script>

