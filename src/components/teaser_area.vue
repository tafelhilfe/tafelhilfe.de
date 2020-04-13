<template>
    <b-container class="teaserComponent bg-tertiary text-white" fluid v-if="teaser">
        <div class="areaInfoField bg-white text-secondary text-center p-3" v-if="teaser.info.text">
            <span>{{teaser.info.text}}</span>
        </div>
        <b-container class="pb-5">
            <b-row class="teaserHeader pt-5 mb-4">
                <b-col v-if="teaser.header">
                    <h1 class="text-center" v-if="teaser.header.headline">{{teaser.header.headline}}</h1>
                    <!--<p class="text-center" v-if="teaser.header.text">{{teaser.header.text}}</p>-->
                </b-col>
            </b-row>
            <teaser_component :teaser="teaser"/>
        </b-container>
    </b-container>
</template>

<script>
    import Teaser_component from '@/components/teaser_component'

    export default {
        name: 'teaser_area',
        components: { Teaser_component },
        props: ['teaser']
    }
</script>