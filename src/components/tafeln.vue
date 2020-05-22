<template>
  <form @submit.prevent="sendData">
    <b-container class="content mt-0">
      <b-row>
        <div class="col-12">
          <h1 class="text-primary mb-4">{{ tafeln.headline }}</h1>
        </div>
      </b-row>
      <b-row class="mt-5">
        <div class="col-12 col-md">
          <h5>{{ tafeln.colLeft.headline }}</h5>
          <p v-html="tafeln.colLeft.text" />
        </div>
        <div class="col-12 col-md">
          <h5>{{ tafeln.colRight.headline }}</h5>
          <p v-html="tafeln.colRight.text" />
        </div>
      </b-row>
      <b-row class="mt-4 mb-4">
        <b-col>
          <b-button
            pill
            variant="primary"
            size="lg"
            class="float-right shadow-lg"
            @click="startForm"
            >{{ tafeln.startButton }}
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              style="height: 2rem; width: 2rem"
              class="mr-n1"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </form>
</template>

<script>
export default {
  name: 'Tafeln',
  props: ['tafeln'],
  methods: {
    startForm() {
      this.$router.push({ path: '/tafeln/formular' })
    }
  }
}
</script>
