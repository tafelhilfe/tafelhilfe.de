<template>
  <div class="cnt d-flex flex-column-reverse flex-md-row">
    <div
      class="side d-flex align-items-center justify-content-center text-center text-white bg-tafeln"
    >
      <div class="p-4">
        <h2 class="h1">{{ home.tafeln.headline }}</h2>
        <p v-html="home.tafeln.text" />

        <b-button
          :to="home.tafeln.href"
          pill
          variant="dark"
          size="lg"
          class="shadow-lg"
        >
          <div class="d-flex align-items-center">
            <span> {{ home.tafeln.button }} </span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              style="height: 2rem; width: 2rem"
              class="mr-n3"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </b-button>
      </div>
    </div>
    <div
      class="side d-flex align-items-center justify-content-center flex-grow-1 text-center text-white bg-helfer"
    >
      <div class="p-4">
        <h2 class="h1">{{ home.helfer.headline }}</h2>
        <p v-html="home.helfer.text" />

        <b-button
          :to="home.helfer.href"
          pill
          variant="dark"
          size="lg"
          class="shadow-lg"
        >
          <div class="d-flex align-items-center">
            <span> {{ home.helfer.button }} </span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              style="height: 2rem; width: 2rem"
              class="mr-n3"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeVue',
  props: ['home']
}
</script>

<style scoped>
.cnt {
  height: 90vh;
}
.cnt .side {
  height: 50%;
}
@media (min-width: 768px) {
  .cnt {
    height: 100vh;
  }
  .cnt .side {
    width: 50vw;
    height: 100%;
  }
}
</style>
