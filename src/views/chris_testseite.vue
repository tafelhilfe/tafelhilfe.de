<template>
    <textImage :tic="tic" />
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
                        src: "@src/assets/images/dummy-400x400-color123456.jpg",
                        alt: "logo"
                    },
                    text: {
                        heading: "",
                        paragraph: "test1234",
                        button: {
                            href: "/",
                            label: "Button"
                        }
                    }
                }
            }
        }
    }
</script>

