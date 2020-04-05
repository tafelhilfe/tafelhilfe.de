<template>
    <div>
        <Header variant="primary"/>
        <Tafeln :tafeln="tafeln"/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../views/header";
    import Footer from "../views/footer";
    import Tafeln from "../components/tafeln";

    export default {
        name: "tafeln",
        components: {
            Header,
            Footer,
            Tafeln
        },
        data() {
            return {
                tafeln: {
                    headline: 'Wir bringen Tafeln und Freiwillige schnell und einfach zusammen',
                    colLeft: {
                        headline: 'Sie benötigen Unterstützung?',
                        text: 'Mit unserem Formular können Sie schnell und einfach anzeigen, in welchen Bereichen Sie dringend Unterstützung brauchen. Diese Informationen können dann in Form von Anzeigen von allen Menschen in ganz Deutschland gesehen werden. So bringen wir Sie schnell und einfach mit Freiwilligen zusammen.'
                    },
                    colRight: {
                        headline: 'Sie haben derzeit genug Helfer?',
                        text: 'Auch wenn bei Ihnen gerade alles in Ordnung ist, ist das eine Meldung wert. So erkennen engagierte Freiwillige sofort, ob sie unterstützen können oder nicht. Sollte wieder ein Bedarf entstehen, können Sie das Formular einfach erneut ausfüllen und wir schalten die Anzeige für Sie.'
                    },
                    progress: {
                        label: 'Schritt',
                        step: 1,
                        max: 5
                    },
                    startButton: 'Los geht\'s',
                    backButton: 'Vorheriger Schritt',
                }
            }
        }
    }
</script>
