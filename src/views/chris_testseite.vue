<template>
    <section>
        <textImage :tic="tic"/>
        <textImage :tic="tic2"/>
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
                tic: {
                    headline: "<h3>Lorem Ipsum</h3>",
                    image: {
                        src: "",
                        alt: ""
                    },
                    text: {
                        heading: "",
                        paragraph: "test1234",
                        button: {
                            href: "/",
                            label: "Button"
                        }
                    }
                },
                tic2: {
                    headline: "Lorem Ipsum 2",
                    image: {
                        src: "~/assets/images/dummy-400x400-color123456.jpg",
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

