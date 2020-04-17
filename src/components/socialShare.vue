<template>
  <div class="bg-secondary">
    <div
      id=""
      class="container-lg py-8 content text-white text-center d-flex align-items-center flex-column"
    >
      <h1 class="mb-4">Verbreite unsere Message!</h1>
      <p style="font-size: 1.5rem; max-width: 50rem;" class="text-xl-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nisi odit
        consequuntur soluta, praesentium deleniti ipsum natus.
      </p>
      <div>
        <div class="d-flex flex-wrap justify-content-center">
          <a v-for="item in items" :key="item.name" class="bg-secondary cursor-pointer shadow-lg rounded-pill px-3 py-2 m-2 ">
            <div class="d-flex align-items-center">
              <div
                class="text-white"
                style="height: 1.75rem; width: 1.75rem"
                v-html="item.icon"
              />
              <span class="ml-2" style="font-size: 1.25rem;">{{ item.name }}</span>
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
          icon: twitterIcon
        },
        {
          name: 'Instagram',
          icon: instagramIcon
        },
        {
          name: 'Facebook',
          icon: facebookIcon
        },
        {
          name: 'WhatsApp',
          icon: whatsAppIcon
        },
        {
          name: 'Mail',
          icon: mailIcon
        },
        {
          name: 'LinkedIn',
          icon: linkedinIcon
        }
      ]
    }
  }
}
</script>
