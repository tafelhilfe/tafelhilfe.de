<template>
  <header class="fixed-top bg-white shadow">
    <div class="container px-1 py-sm-3">
      <b-navbar toggleable="md" class="p-2">
        <b-navbar-brand to="/">
          <Logo class="text-secondary text-left logo small" />
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
            <router-link v-slot="{ href, navigate }" to="/ueberuns/">
              <b-nav-item
                :href="href"
                style="color: white"
                class="nbi text-tertiary font-weight-bold mt-2 mt-md-0 mr-md-2 mb-2 mb-md-0 p-2 px-lg-4 rounded-pill"
                @click="navigate"
              >
                <span class="pl-3 pl-lg-0">Wer sind wir?</span>
              </b-nav-item>
            </router-link>
            <!--
            <b-nav-item
              class="nav-bar-item text-tertiary font-weight-bold mr-md-2 mb-2 mb-md-0 py-2 px-2 px-lg-4 rounded-pill"
            >
              <router-link to="/influencer/" class="text-tertiary">
                Influencer
              </router-link>
            </b-nav-item>
            -->
            <router-link
              v-slot="{ href, navigate }"
              v-scroll-to="'#tafelmap'"
              to="/helfer/#tafelmap"
              class="text-white"
            >
              <b-nav-item
                id="nav-bar-cta"
                :href="href"
                class="nbcta text-white font-weight-bold bg-secondary mt-2 mt-md-0 mr-md-2 mb-2 mb-md-0 p-2 px-lg-4 rounded-pill"
                @click="navigate"
              >
                <span class="pl-4 pl-md-0">Tafelsuche</span>
              </b-nav-item>
            </router-link>
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

.nbi {
  font-size: 14pt;
}

.nbcta {
  font-size: 14pt;
}

.nbi:hover {
  background: #e5e7eb;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nbi {
    background: #e5e7eb;
  }
}
.nav-link:hover {
  color: white;
}

.nbcta:hover {
  background: #0a6a49 !important;
  color: white !important;
  cursor: pointer;
}
</style>
