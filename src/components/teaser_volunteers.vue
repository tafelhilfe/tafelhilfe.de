<template>
  <teaser_area :teaser="teaser" />
</template>

<script>
// eslint-disable-next-line camelcase
import teaser_area from '@/components/teaser_area'
import hundredIcon from '@/assets/icons/icon_100.svg?raw'
import handsIcon from '@/assets/icons/icon_hands.svg?raw'
import affeIcon from '../assets/icons/icon_affe.svg?raw'

export default {
  name: 'TeaserVolunteers',
  components: {
    teaser_area
  },
  data() {
    return {
      teaser: {
        info: {
          text: 'DU KANNST HELFEN!'
        },
        header: {
          headline: 'Die Tafeln suchen...' //,
          // text: 'Du willst den Tafeln helfen, weißt aber nicht wo und wie?'
        },
        item: [
          {
            id: 0,
            icon: hundredIcon,
            content: {
              headline: '… Deine Power',
              text:
                'Die Lebensmittel für die Tafeln müssen natürlich erstmal abgeholt werden. Hier benötigst Du nicht nur Ausdauer und Kraft, sondern auch ein gutes Auge, um in dem Kühltransporter so viele Kisten wie möglich unterzubringen. Das perfekte Workout für Körper und Geist.'
            }
          },
          {
            id: 1,
            icon: handsIcon,
            content: {
              headline: '… Deine Organisation',
              text:
                'Wenn die Lebensmittel bei der Tafel ankommen, gilt es gründlich zu sortieren. Verdorbene Lebensmittel müssen entsorgt werden. Genießbare Lebensmittel bekommen eine reinigende Dusche und werden für die Verteilung vorverpackt.'
            }
          },
          {
            id: 2,
            icon: affeIcon,
            content: {
              headline: '… Dein Lächeln',
              text:
                'Aktuell sind die Tafeln darauf angewiesen, dass die Lebensmittel zu den Bedürftigen gebracht werden können. Und vor allem, wenn man nicht mit einem freundlichen Händedruck “Danke” sagen kann, ist ein Lächeln unbezahlbar.'
            }
          }
        ]
      }
    }
  }
}
</script>
