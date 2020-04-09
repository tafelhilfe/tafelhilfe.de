<template>
  <div>
    <Home :home="home"/>
  </div>
</template>

<script>
  import Home from "../components/home";

export default {
  components: {
    Home
  },
  data() {
    return {
      home: {
        tafeln: {
          headline: 'Für Tafeln',
          text: 'Sie haben Bedarf an Personal, Material und Logistik oder ist alles in Ordnung?<br/>Teilen Sie uns Ihren Status mit!',
          button: 'Hier entlang',
          href: '/tafeln'
        },
        helfer: {
          headline: 'Für Helfer',
          text: 'Du willst bei der Tafel unterstützen?<br/>Wir zeigen Dir, wo und wie Du Dich einbringen kannst.',
          button: 'Hier entlang',
          href: '/helfer'
        }
      }
    }
  }
};
</script>
