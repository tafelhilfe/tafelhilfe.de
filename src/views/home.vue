<template>
  <div>
    <Header/>
    <Home :home="home"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../views/header";
  import Footer from "../views/footer";
  import Home from "../components/home";

export default {
  components: {
    Header,
    Footer,
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
