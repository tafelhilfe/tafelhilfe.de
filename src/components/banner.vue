<template>
  <div
    v-show="bannerVisible"
    class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"
  >
    <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-green-400 shadow-xl sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-green-500">
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                Infos zum Project (Hackathon)!
              </span>
              <span class="hidden md:inline">
                Alle Infos über unser Project beim #wirvsvirus Hackathon!
              </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <div class="rounded-md shadow-sm">
              <a
                href="https://devpost.com/software/13_tafel_reorganisation_freiwilligenorganisation"
                target="_blank"
                class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-green-400 bg-white hover:text-green-300 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
              >
                Zur Projektseite
              </a>
            </div>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              v-on:click="bannerVisible = false"
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-green-400 focus:outline-none focus:bg-green-400 transition ease-in-out duration-150"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerVisible: false
    };
  },
  created() {
    setTimeout(() => (this.bannerVisible = true), 5000);
  }
};
</script>

<style></style>
