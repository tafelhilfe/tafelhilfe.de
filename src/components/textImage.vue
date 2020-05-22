<template>
    <b-container class="text-image-component">
        <h2 class="text-center" v-if="tic.headline !== ''" v-html="tic.headline"/>
        <b-row>
            <b-col lg v-if="tic.image && tic.image.src !== ''">
                <div class="image-container">
                    <b-img-lazy center fluid :src="tic.image.src" :alt="tic.image.alt"/>
                </div>
            </b-col>
            <b-col lg v-if="tic.text">
                <h3 class="text-center" v-if="tic.text.headline !== ''" v-html="tic.text.headline"/>
                <p v-if="tic.text.paragraph !== ''" v-html="tic.text.paragraph" />
                <b-button v-if="tic.text.button && tic.text.button.href !== '' && tic.text.button.label !== ''"
                          :href="tic.text.button.href">{{ tic.text.button.label }}
                </b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: "textImage",
        props: ['tic']
    }
</script>
<!-- how to use this component + example

Naming tic = text image component
Usage:
to fill this component with content:
    Give the component an name like this:
        <textImage :tic="yourGivenName"/>
    then in the script part you can fill the fields with this syntax:
        yourGivenName: {
            headline: "",
            image: {
                src: require(""),
                alt: ""
            },
            text: {
                headline: "",
                paragraph: "",
                button: {
                    href: "",
                    label: ""
                }
            }
        }

As complete .vue example:
<template>
    <section>
        <textImage :tic="yourGivenName"/>
    </section>
</template>
<script>
    import textImage from "../components/textImage";
    export default {
        components: {
            textImage
        },
        data() {
            return {
                yourGivenName: {
                    headline: "",
                    image: {
                        src: require(""),
                        alt: ""
                    },
                    text: {
                        headline: "",
                        paragraph: "",
                        button: {
                            href: "",
                            label: ""
                        }
                    }
                }
            }
        }
    }
</script>
-->