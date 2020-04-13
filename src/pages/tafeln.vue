<template>
    <Tafeln :tafeln="tafeln"/>
</template>

<script>
  import Tafeln from "../components/tafeln";

  export default {
    name: "TafelnPage",
    transition: 'fadeRight',
    components: {
      Tafeln
    },
    data() {
      return {
        tafeln: {
          headline: 'Wir bringen Tafeln und Freiwillige schnell und einfach zusammen',
          colLeft: {
            headline: 'Sie benötigen Unterstützung?',
            text: 'Mit unserem Formular können Sie schnell und einfach anzeigen, in welchen Bereichen Sie dringend Unterstützung brauchen. Diese Informationen können dann in Form von Anzeigen von allen Menschen in ganz Deutschland gesehen werden. So bringen wir Sie schnell und einfach mit Freiwilligen zusammen.'
          },
          colRight: {
            headline: 'Sie haben derzeit genug Helfer?',
            text: 'Auch wenn bei Ihnen gerade alles in Ordnung ist, ist das eine Meldung wert. So erkennen engagierte Freiwillige sofort, ob sie unterstützen können oder nicht. Sollte wieder ein Bedarf entstehen, können Sie das Formular einfach erneut ausfüllen und wir schalten die Anzeige für Sie.'
          },
          progress: {
            label: 'Schritt',
            step: 0,
            max: 6
          },
          startButton: 'Los geht\'s',
          backButton: 'Zurück',
          icons: [
            'circle',
            'check-circle',
            'app',
            'check-box',
          ],
          q1: {
            selected: null,
            question: 'Wie ist Ihr Status?',
            options: [
              {
                text: 'Wir haben geöffnet',
                value: 'open',
                active: '',
              },
              {
                text: 'Wir haben leider geschlossen',
                value: 'closed',
                active: '',
              },
            ]
          },
          q2a: {
            // Open
            selected: null,
            question: 'Brauchen Sie derzeit Helfer?',
            options: [
              {
                text: 'Ja',
                value: 'required',
                active: '',
              },
              {
                text: 'Nein',
                value: 'needless',
                active: '',
              },
            ]
          },
          q2b: {
            // closed
            selected: null,
            question: 'Wollen Sie in naher Zukunft wieder öffnen?',
            options: [
              {
                text: 'Ja',
                value: 'openAgain',
                active: '',
              },
              {
                text: 'Nein',
                value: 'closedUntilFurther',
                active: '',
              },
            ]
          },
          q3a: {
            // needless / closedUntilFurther
            question: 'Geben Sie bitte Ihre Postleitzahl ein',
          },
          q3b: {
            // required / openAgain
            question: 'Wobei benötigen Sie Hilfe?',
            options: [
              {
                text: 'Lebensmittelabholung',
                value: 'Abholung',
                active: '',
                icon: 'app',
              },
              {
                text: 'Lebensmittel sortieren, säubern, verpacken',
                value: 'sortieren',
                active: '',
                icon: 'app',
              },
              {
                text: 'Lebensmittel liefern',
                value: 'liefern',
                active: '',
                icon: 'app',
              },
              {
                text: 'Lebensmittelausgabe',
                value: 'ausgabe',
                active: '',
                icon: 'app',
              },
              {
                text: 'Sonstiges',
                placeholder: 'Geben Sie hier Ihren zusätzlichen Bedarf an',
                value: '',
                active: '',
                icon: 'app',
              },
            ]
          },
        }
      }
    }
  }
</script>
