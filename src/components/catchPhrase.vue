<template>
    <div v-if="catchPhrases.phrase">
        <div class="catchPhrase">
            <VueSlickCarousel v-bind="slickOptions">
                <div v-for="item in catchPhrases.phrase" :key="item.id">
                    <h1 class="text-secondary">{{item.headline}}</h1>
                    <hr class="border-2 rounded border-primary "/>
                    <h2 class="text-tertiary">{{item.subHeadline}}</h2>
                    <p v-html="catchPhrases.text" />
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'catchPhrase',
        props: ['catchPhrases'],
        data() {
            return {
                slickOptions: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false
                }
            }
        }
    }
</script>
