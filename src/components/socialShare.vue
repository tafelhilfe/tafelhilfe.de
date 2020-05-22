<template>
  <div class="bg-secondary">
    <div
      class="container-lg py-8 content text-white text-center d-flex align-items-center flex-column mt-0 mt-lg-8"
    >
      <h1 class="mb-4">Verbreite unsere Message!</h1>
      <p style="font-size: 1.5rem; max-width: 50rem;" class="text-xl-center">
        Erzähl Deinen Freund*innen von #tafelhilfe und sammle Karma-Punkte.
      </p>
      <div>
        <div class="d-flex flex-wrap justify-content-center">
          <a
            v-for="item in items"
            :key="item.name"
            :href="item.link"
            :target="item.target ? item.target : '_blank'"
            class="text-white px-3 py-2 m-2 bg-secondary cursor-pointer shadow-lg rounded-pill"
          >
            <div class="d-flex align-items-center">
              <div
                class="text-white"
                style="height: 1.75rem; width: 1.75rem"
                v-html="item.icon"
              />
              <span class="ml-2" style="font-size: 1.25rem;">
                {{ item.name }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebookIcon from '@/assets/icons/social/facebook-brands.svg?raw'
import twitterIcon from '@/assets/icons/social/twitter-brands.svg?raw'
import instagramIcon from '@/assets/icons/social/instagram-brands.svg?raw'
import whatsAppIcon from '@/assets/icons/social/whatsapp-brands.svg?raw'
import mailIcon from '@/assets/icons/social/mail-brands.svg?raw'
import linkedinIcon from '@/assets/icons/social/linkedin-brands.svg?raw'

export default {
  name: 'SocialShare',
  data() {
    return {
      items: [
        {
          name: 'Twitter',
          icon: twitterIcon,
          link:
            'https://twitter.com/intent/tweet?text="Die Tafeln brauchen Deine Hilfe. Informiere Dich auf www.tafelhilfe.de, wie Du die Tafel in Deiner Nähe unterstützen kannst. Lass uns gemeinsam dafür sorgen, dass alle satt werden."&url=https://tafelhilfe.de'
        },
        {
          name: 'Instagram',
          icon: instagramIcon,
          link: 'https://instagram.com/tafelhilfe'
        },
        {
          name: 'Facebook',
          icon: facebookIcon,
          link:
            'https://www.facebook.com/sharer.php?u= https%3A%2F%2Ftafelhilfe.de'
        },
        {
          name: 'WhatsApp',
          icon: whatsAppIcon,
          link: 'whatsapp://send?text=The text to share!',
          target: '_top'
        },
        {
          name: 'Mail',
          icon: mailIcon,
          link: ' mailto:?subject=Die%20Tafeln%20brauchen%20Deine%20Hilfe!&body=Informiere%20Dich%20auf%20www.tafelhilfe.de%2C%20wie%20Du%20die%20Tafel%20in%20Deiner%20N%C3%A4he%20unterst%C3%BCtzen%20kannst.%20Lass%20uns%20gemeinsam%20daf%C3%BCr%20sorgen%2C%20dass%20alle%20satt%20werden.'
        },
        {
          name: 'LinkedIn',
          icon: linkedinIcon,
          link:
            'https://www.linkedin.com/shareArticle?mini=true&url=https://tafelhilfe.de&title=Tafelhilfe'
        }
      ]
    }
  }
}
</script>
