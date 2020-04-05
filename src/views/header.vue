<template>
    <header class="fixed-top text-center mt-2 mt-sm-4">
        <b-button to="/" pill :variant="variant" size="lg" class="shadow-lg">
            Tafelhilfe
        </b-button>
    </header>
</template>

<script>
    export default {
        name: "header",
        props: {
            'variant': {
                default:  'light'
            }
        },
    }
</script>
