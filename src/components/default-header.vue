<template>
  <header class="fixed-top px-1 py-sm-3 bg-white shadow">
    <div class="container">
      <b-navbar toggleable="md" class="p-0 m-2">
        <b-navbar-brand to="/">
          <Logo class="text-secondary logo small" />
        </b-navbar-brand>

        <b-navbar-toggle
          id="navbar-toggle"
          target="nav-collapse"
          class="shadow-none"
        >
          <template v-slot:default="{ expanded }">
            <div v-if="expanded">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                style="width: 2rem; height: 2rem"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div v-else>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                style="width: 2rem; height: 2rem"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link
              to="/ueberuns/"
              class="nav-bar-item text-tertiary font-weight-bold mt-2 mt-md-0 mr-md-2 mb-2 mb-md-0 py-2 px-2 px-lg-4 rounded-pill"
            >
              Wer sind wir?
            </router-link>
            <router-link
              to="/influencer/"
              class="nav-bar-item text-tertiary font-weight-bold mr-md-2 mb-2 mb-md-0 py-2 px-2 px-lg-4 rounded-pill"
            >
              Influencer
            </router-link>
            <a
              id="nav-bar-cta"
              v-scroll-to="'#tafelmap'"
              v-b-toggle="'nav-collapse'"
              href="#"
              class="cta btn-sm btn-secondary mb-4 mb-md-0 py-2 px-4 shadow rounded-pill font-weight-bold text-center text-white"
            >
              Tafelsuche
            </a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/images/tafelhilfe_logo_basic_green.svg?inline'

export default {
  name: 'Myheader',
  components: {
    Logo
  }
}
</script>
<style scoped>
#navbar-toggle {
  border: 0;
}

.nav-bar-item {
  font-size: 14pt;
}

#nav-bar-cta {
  font-size: 14pt;
}

.nav-bar-item:hover {
  background: #e5e7eb;
  cursor: pointer;
}

#nav-bar-cta:hover {
  background: #09714e;
  cursor: pointer;
}
</style>
