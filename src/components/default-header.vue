<template>
    <header class="fixed-top bg-light pt-1 pt-sm-3 pb-1 pb-sm-3">
      <div class="container">
        <b-navbar toggleable="sm" class="p-0">
          <b-navbar-brand to="/">
            <span class="text-primary barcelony small">Tafel</span>
            <Logo class="logo small"/>
            <span class="text-primary barcelony small">hilfe</span>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" class="shadow-none"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="#" class="font-weight-bold mr-2 mr-md-4">Wer sind wir?</b-nav-item>
              <b-nav-item to="#" class="font-weight-bold mr-2 mr-md-4">Influencer</b-nav-item>
              <b-nav-item to="helfer" class="btn-sm btn-secondary shadow rounded-pill font-weight-bold text-center text-white">Tafelsuche</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
</template>

<script>
  import Logo from "~/assets/images/tafelhilfe.svg"

  export default {
      name: "myheader",
      components: {
        Logo
      },
  }
</script>
