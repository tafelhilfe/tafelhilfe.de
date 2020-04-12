<template>
  <footer class="container-fluid bg-light">
    <b-container>
      <b-row class="pt-5 pb-5 justify-content-between">
        <div class="col-6 col-sm">
          <h6 class="text-capitalize border-bottom border-dark">{{footer.col1.headline}}</h6>
          <p v-html="footer.col1.text"></p>
        </div>
        <div class="col-6 col-sm">
          <h6 class="text-capitalize border-bottom border-dark">{{footer.col2.headline}}</h6>
          <ul class="list-unstyled">
            <li v-for="item in footer.col2.links" :key="item.href">
              <div v-html="item.text"></div>
              <b-link :href="`mailto:${item.href}`">{{item.href}}</b-link>
            </li>
          </ul>
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
            <li v-for="item in footer.col4.links" :key="item.href" class=" float-left mr-3">
              <b-link :href="item.href" :target="item.target" v-if="item.target !== ''"><fa :icon="item.icon" size="2x" :class="item.color"/></b-link>
              <router-link :to="item.href" v-else>{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-sm">
          <Slogan class="tk-flood-std float-right"/>
        </div>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  import Slogan from "../assets/images/slogan.svg"

  export default {
    name: "myfooter",
    components: {
      Slogan
    },
    data() {
      return {
        footer: {
          col1: {
            headline: 'Unsere Mission',
            text: 'Wir bringen Tafeln und Freiwillige schnell und einfach zusammen.'
          },
          col2: {
            headline: 'Kontakt',
            links: [
              {
                text: 'Tafelhilfe e.V.i.G.',
                href: 'kontakt@tafelhilfe.de'
              },
              {
                text: 'Presseanfragen',
                href: 'presse@tafelhilfe.de'
              },
            ],
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
                icon: ['fab', 'instagram'],
                color: 'text-dark',
                href: 'https://www.instagram.com/tafelhilfe',
                target: '_blank'
              },
              {
                icon: ['fab', 'youtube'],
                color: 'text-dark',
                href: 'https://www.youtube.com/channel/UCpl1ayPGtdPIWZyNDTQCv0w/featured',
                target: '_blank'
              }
            ]
          },
          col5: {
            src: ''
          }
        }
      }
    }

  }
</script>
