<template>
    <header class="fixed-top bg-light pt-3 pb-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <b-link to="/">
              <span class="text-primary barcelony small">Tafel</span>
              <Logo class="logo small"/>
              <span class="text-primary barcelony small">hilfe</span>
            </b-link>
          </div>
          <div class="col">
            <nav class="float-right">
              <b-link to="" class="mr-5 text-dark font-weight-bold">Wer sind wir?</b-link>
              <b-link to="" class="mr-5 text-dark font-weight-bold">Influencer</b-link>
              <b-button to="helfer" pill class="shadow">Tafelsuche</b-button>
            </nav>
          </div>
        </div>
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
