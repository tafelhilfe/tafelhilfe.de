<template>
  <div v-if="faqs" class="faqs mb-3">
    <b-container>
      <h1
        v-if="faqs.headline !== ''"
        :class="
          'text-center bb-2 text-tertiary pb-2 mb-2 border-bottom border-' +
            faqs.borderColor
        "
        v-html="faqs.headline"
      />
      <b-row
        v-if="faqs.faq.length"
        class="faqs-tablist my-4"
        cols="1"
        role="tablist"
      >
        <b-col v-for="item in faqs.faq" :key="item.id">
          <b-card no-body class="mb-4 rounded-0">
            <b-card-header
              v-b-toggle="'faq-' + item.id"
              class="border-0 bg-white pl-0 pr-0"
              header-tag="header"
              role="tab"
              @click="changeIcon(item, faqs)"
            >
              <h5 class="faqs-card-headline mb-0">
                {{ item.header }}
              </h5>
              <b-icon-chevron-down
                v-if="!item.opened"
                slot="initial"
                class="faq-icon"
              />
              <b-icon-x v-else class="faq-icon" />
            </b-card-header>
            <b-collapse :id="'faq-' + item.id" accordion="faqs" role="tabpanel">
              <b-card-body class="pt-0 pl-0 mt-3 text-muted">
                <div class="card-text" v-html="item.content" />
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Faqs',
  props: ['faqs'],
  methods: {
    changeIcon(item, faqs) {
      if (item.opened === true) {
        item.opened = false
      } else {
        for (let i = 0; i < faqs.faq.length; i++) {
          faqs.faq[i].opened = false
        }
        const id = item.id
        faqs.faq[id].opened = true
      }
    }
  }
}
</script>
