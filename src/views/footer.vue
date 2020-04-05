<template>
  <footer class="container-fluid bg-light">
    <div class="container">
      <div class="row pt-5 pb-5 justify-content-between">
        <div class="col-6 col-sm">
          <h6 class="text-capitalize border-bottom border-dark">{{footer.col1.headline}}</h6>
          <p v-html="footer.col1.text"></p>
        </div>
        <div class="col-6 col-sm">
          <h6 class="text-capitalize border-bottom border-dark">{{footer.col2.headline}}</h6>
          <p v-html="footer.col2.text"></p>
          <b-link :href="`mailto:${footer.col2.href}`">{{footer.col2.href}}</b-link>
        </div>
        <div class="col-6 col-sm">
          <h6 class="text-capitalize border-bottom border-dark">{{footer.col3.headline}}</h6>
          <ul class="list-unstyled">
            <li v-for="item in footer.col3.links" :key="item.href">
              <b-link :href="item.href" :target="item.target" v-if="item.target !== ''">{{item.text}}</b-link>
              <router-link :to="item.href" v-else>{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-sm">
          <h6 class="text-capitalize border-bottom border-dark">{{footer.col4.headline}}</h6>
          <ul class="list-unstyled">
            <li v-for="item in footer.col4.links" :key="item.href">
              <b-link :href="item.href" :target="item.target" v-if="item.target !== ''">{{item.text}}</b-link>
              <router-link :to="item.href" v-else>{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-sm">
          #wir für die Tafeln
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {
        footer: {
          col1: {
            headline: 'Unsere Mission',
            text: 'Wir bringen Tafeln und Freiwillige schnell und einfach zusammen.'
          },
          col2: {
            headline: 'Kontakt',
            text: 'Tafelhilfe e.V.i.G.<br/>Presseanfragen',
            href: 'kontakt@tafelhilfe.de'
          },
          col3: {
            headline: 'Links',
            links: [
              {
                text: 'Impressum',
                href: '/impressum',
                target: ''
              },
              {
                text: 'Datenschutzerklärung',
                href: '/datapolicy',
                target: ''
              },
              {
                text: 'Offizielle Tafel Website',
                href: 'https://tafel.de',
                target: '_blank'
              },
              {
                text: 'Tafel Jugend',
                href: 'https://tafel-jugend.de',
                target: '_blank'
              }
            ]
          },
          col4: {
            headline: 'Social Media',
            links: [
              {
                text: 'Instagram',
                href: 'https://www.instagram.com/tafelhilfe',
                target: '_blank'
              },
              {
                text: 'Youtube',
                href: 'https://www.youtube.com/channel/UCpl1ayPGtdPIWZyNDTQCv0w/featured',
                target: '_blank'
              }
            ]
          },
          col5: {
            headline: ''
          }
        }
      }
    }

  }
</script>
