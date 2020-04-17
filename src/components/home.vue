<template>
  <b-container fluid>
    <b-row>
      <div
        class="col-12 col-sm col-md-12 col-lg d-flex align-items-center justify-content-center text-center text-white vp bg-tafeln"
      >
        <div class="flex-row">
          <h2 class="h1">{{ home.tafeln.headline }}</h2>
          <p v-html="home.tafeln.text" />
          <div>

          </div>
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
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </b-button>


        </div>
      </div>
      <div
        class="col-12 col-sm col-md-12 col-lg d-flex align-items-center justify-content-center text-center text-white bg-helfer vp"
      >
        <div class="flex-row">
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
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                style="height: 2rem; width: 2rem"
                class="ml-n3"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span> {{ home.helfer.button }} </span>
            </div>
          </b-button>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HomeVue',
  props: ['home']
}
</script>
