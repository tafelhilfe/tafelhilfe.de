<template>
  <footer class="container-fluid bg-light">
    <b-container>
      <b-row class="pt-5 pb-5 justify-content-between">
        <div class="col-12 col-sm-12 col-md">
          <h6 class="pb-2 text-uppercase border-bottom border-dark">
            {{ footer.col1.headline }}
          </h6>
          <p v-html="footer.col1.text"></p>
        </div>
        <div class="col-12 col-sm">
          <h6 class="pb-2 text-uppercase border-bottom border-dark">
            {{ footer.col2.headline }}
          </h6>
          <ul class="list-unstyled">
            <li class="mb-3" v-for="item in footer.col2.links" :key="item.href">
              <div v-html="item.text"></div>
              <b-link :href="`mailto:${item.href}`">{{ item.href }}</b-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm">
          <h6 class="pb-2 text-uppercase border-bottom border-dark">
            {{ footer.col3.headline }}
          </h6>
          <ul class="list-unstyled">
            <li v-for="item in footer.col3.links" :key="item.href">
              <b-link
                v-if="item.target !== ''"
                :href="item.href"
                :target="item.target"
                >{{ item.text }}</b-link
              >
              <router-link v-else :to="item.href">{{ item.text }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm">
          <h6 class="pb-2 text-uppercase border-bottom border-dark">
            {{ footer.col4.headline }}
          </h6>
          <ul class="list-unstyled">
            <li
              v-for="item in footer.col4.links"
              :key="item.href"
              class="float-left mr-2"
            >
              <b-link
                v-if="item.target !== ''"
                :href="item.href"
                :target="item.target"
              >
                <div class="bg-white shadow p-2 rounded-circle">
                  <fa
                    :icon="item.icon"
                    size="2x"
                    :class="item.color"
                    class="fa-fw fa-fh"
                    style="height: 40px; width: 40px"
                  />
                </div>
              </b-link>
              <router-link v-else :to="item.href">{{ item.text }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-sm d-none d-lg-block">
          <Slogan class="text-tertiary tk-flood-std float-right" />
        </div>
      </b-row>
      <div class="border-top border-gray-700 p-4">
        <p class="text-gray-400 text-center">
          &copy; 2020 tafelhilfe.de
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script>
import Slogan from '../assets/images/tafelhilfe_slogan.svg?inline'

export default {
  name: 'Myfooter',
  components: {
    Slogan
  },
  data() {
    return {
      footer: {
        col1: {
          headline: 'Unsere Mission',
          text:
            'Wir bringen Tafeln und Freiwillige schnell und einfach zusammen.'
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
            }
          ]
        },
        col3: {
          headline: 'Links',
          links: [
            {
              text: 'Offizielle Tafel Website',
              href: 'https://tafel.de',
              target: '_blank'
            },
            {
              text: 'Tafel Jugend',
              href: 'https://tafel-jugend.de',
              target: '_blank'
            },
            {
              text: 'Impressum',
              href: '/impressum/',
              target: ''
            },
            {
              text: 'Datenschutzerklärung',
              href: '/datapolicy/',
              target: ''
            }
          ]
        },
        col4: {
          headline: 'Social Media',
          links: [
            {
              icon: ['fab', 'instagram'],
              color: 'text-tertiary',
              href: 'https://www.instagram.com/tafelhilfe',
              target: '_blank'
            },
            {
              icon: ['fab', 'youtube'],
              color: 'text-tertiary',
              href:
                'https://www.youtube.com/channel/UCpl1ayPGtdPIWZyNDTQCv0w/featured',
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
