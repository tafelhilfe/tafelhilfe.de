<template>
    <div>
        <Header variant="primary"/>
        <Helfer  :helfer="helfer"/>
        <stage-voluneers />
        <faqs-volunteers />
        <Footer/>
    </div>
</template>

<script>
    import Header from "../views/header";
    import Footer from "../views/footer";
    import Helfer from '../components/helfer';
    import FaqsVolunteers from "./faqs_volunteers";
    import StageVoluneers from "./stage_volunteers";

    export default {
        name: "helfer",
        components: {
            StageVoluneers,
            FaqsVolunteers,
            Header,
            Footer,
            Helfer,
        },
        data() {
            return {
                show: "0",
                helfer: {
                    topContent: {
                        catchPhrases: {
                            headline: 'Die Mensa hat zu?',
                            subheadline: 'Dann teil doch selber Essen aus!',
                            introText: 'Mit #tafelhilfe kannst du dich schnell und unkompliziert bei Tafeln in deiner Nähe engagieren.',
                        },

                    }
                }
            }
        },
    }
</script>
