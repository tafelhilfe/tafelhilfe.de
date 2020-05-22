<template>
  <b-row v-if="teaser.item" class="teaserItemContainer">
    <b-col
      v-for="item in teaser.item"
      :key="item.id"
      lg
      class="bg-white teaserItem"
    >
      <div v-if="item.icon" class="teaserIconContainer bg-secondary">
        <div class="teaserIcon" v-html="item.icon" />
      </div>
      <div v-if="item.content" class="teaserContent text-tertiary">
        <h3
          v-if="item.content.headline"
          class="mr-5"
          v-html="item.content.headline"
        />
        <p v-if="item.content.text" v-html="item.content.text" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'TeaserComponent',
  props: ['teaser']
}
</script>
