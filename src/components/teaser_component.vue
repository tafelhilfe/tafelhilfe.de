<template>
    <b-row class="teaserItemContainer" v-if="teaser.item">
        <b-col lg class="bg-white teaserItem" v-for="item in teaser.item" :key="item.id">
            <div class="teaserIconContainer bg-secondary" v-if="item.icon">
                <div class="teaserIcon" :style="'background-image: url('+item.icon.url+')'"/>
            </div>
            <div class="teaserContent text-tertiary" v-if="item.content">
                <h3 class="mr-5" v-if="item.content.headline" v-html="item.content.headline"/>
                <p v-if="item.content.text" v-html="item.content.text"/>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'teaser_component',
        props: ['teaser']
    }
</script>

<style scoped