<template>
  <header class="fixed-top pt-1 pt-sm-3 pb-1 pb-sm-3 bg-white">
    <div class="container">
      <b-navbar toggleable="md" class="p-0">
        <b-navbar-brand to="/">
          <span class="text-primary barcelony small">tafel</span>
          <Logo class="logo small" />
          <span class="text-primary barcelony small">hilfe</span>
        </b-navbar-brand>

        <b-navbar-toggle id="navbar-toggle" target="nav-collapse" class="shadow-none">
          <template v-slot:default="{ expanded }">
            <div>
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
            <a
              to="#"
              class="nav-bar-item font-weight-bold mr-2 py-2 px-4 rounded-pill"
            >
              Wer sind wir?
            </a>
            <a
              to="#"
              class="nav-bar-item font-weight-bold mr-2 mr-md-4 py-2 px-4 rounded-pill"
            >
              Influencer
            </a>
            <a
              id="nav-bar-cta"
              to="#"
              class="cta btn-sm btn-secondary py-2 px-4 shadow rounded-pill font-weight-bold text-center text-white"
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
import Logo from '~/assets/images/tafelhilfe.svg'

export default {
  name: 'Myheader',
  components: {
    Logo
  }
}
</script>
<style scoped>
#navbar-toggle {
  border: 0
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
  background: #09714E;
  cursor: pointer;
}
</style>
