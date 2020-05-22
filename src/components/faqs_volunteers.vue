<template>
  <div class="faqsVolunteers">
    <faqs :faqs="faqs" />
  </div>
</template>
<script>
import Faqs from './faqs'
export default {
  name: 'FaqsVolunteers',
  components: { Faqs },
  data() {
    return {
      faqs: {
        headline: 'Häufig gestellte Fragen',
        borderColor: 'secondary',
        faq: [
          {
            opened: false,
            id: '0',
            header: 'Warum brauchen die Tafeln gerade jetzt meine Hilfe?',
            content:
              'COVID-19 zwingt viele erfahrene ehrenamtliche Helfer*innen der Tafel dazu, zuhause zu bleiben, da sie altersbedingt häufig zur Risikogruppe gehören. Mit Deiner Unterstützung leistest Du einen wertvollen Beitrag, dass die Tafeln weiterhin geöffnet bleiben, um Bedürftige mit Lebensmitteln versorgen zu können.'
          },
          {
            opened: false,
            id: '1',
            header: 'Welche Aufgaben erwarten mich?',
            content:
              'Es gibt vier Aufgabenbereiche:<br />' +
              "<ol class='mb-0'>" +
              "<li class='mb-2'>Als Fahrer*in/ bzw. Begleitperson holst Du die Lebensmittel von den Supermärkten und Bäckereien, die mit der örtlichen Tafel kooperieren, mit dem Auto der Tafel ab und bringst sie zur Tafel. Dort lädst du zusammen mit anderen Helfer*innen der Vorgruppe die Lebensmittelkisten aus.<br/></li>" +
              "<li class='mb-2'>Als Helfer*in der Vorgruppe nimmst Du die Lebensmittelkisten der Fahrer*innen entgegen, sortierst diese nach Kategorien (z.B. Kühlware, Obst und Gemüse, Brot, Backwaren und Süßigkeiten), entsorgst ungenießbare Ware und räumst die auszugebenden Lebensmittel in die dafür vorgesehenen Regale ein, oder packst sie in Rationen für die spätere Abholung.<br/></li>" +
              '<li>Als Helfer*in der Ausgabe verteilst du die Ware an die Bedürftigen, die zur Tafel kommen. Dabei bekommen Personen, die einen Schein für eine 6-köpfige Familie haben mehr Ware als eine einzelne Person. Bei manchen Tafeln nehmen sich die Kund*innen auch selbst die Lebensmittel aus den Regalen. Aufgrund des Coronavirus liefern immer mehr Tafeln die Lebensmittel an die Bedürftigen. In diesem Fall würde es zu Deinen Aufgaben gehören, die vorbereiteten Pakete an bedürftige Personen auszuliefern.<br/></li>' +
              '<li>Viele Tafeln verfügen noch über keinen Internetauftritt oder Instagram-Account und würden das gerne ändern. Dazu benötigen sie Unterstützung. In gemeinsamer Absprache mit den Verantwortlichen vor Ort kannst du das auch von zuhause aus übernehmen.<br/></li>' +
              '</ol>'
          },
          {
            opened: false,
            id: '2',
            header:
              'Wie kann ich mich als Helfer*in vor der Ansteckung mit dem Coronavirus schützen?',
            content:
              'Es wird bei allen Aufgabenbereichen auf den Mindestabstand von 1,5 m geachtet und jede*r muss sich die Hände desinfizieren (Helfer*innen und Kund*innen). Die Helfer*innen arbeiten im Abstand zueinander und die Ware wird auf einen Tisch gelegt, wo der*die Kund*in sie sich nimmt. Je nach Bundesland kann es sein, dass bei der Arbeit in der Tafel auch ein Mundschutz vorgeschrieben wird.<br/><br/>Wenn die Lebensmittel an die Kund*innen ausgeliefert werden, gibt es eine logische Route, nach der vorgegangen wird. '
          },
          {
            opened: false,
            id: '3',
            header: 'Wie hoch ist der Arbeitsaufwand?',
            content:
              'Je nach Einteilung und Bedarf ist der Aufwand bei den Tafeln unterschiedlich. Julia aus unserem Team arbeitet beispielsweise alle 3 Wochen samstags 3,5 h bei einer Tafel auf dem Land.'
          },
          {
            opened: false,
            id: '4',
            header: 'Wie viele Helfer*innen gibt es bei einer Tafel?',
            content:
              'Das kommt sehr auf die Größe der Tafel und die Anzahl der bedürftigen Personen an. Das können pro Tafelausgabe insgesamt ca. 20 Helfer*innen sein.'
          },
          {
            opened: false,
            id: '5',
            header: 'Wie viele Hilfsbedürftige gibt es bundesweit?',
            content:
              'Im Jahr 2019 waren 1,65 Millionen Menschen regelmäßig Kund*innen bei der Tafel.'
          },
          {
            opened: false,
            id: '6',
            header: 'Wie wird man Tafelkund*in?',
            content:
              'Wenn eine Person ihre Bedürftigkeit beim örtlichen Tafelträger nachgewiesen hat, erhält sie einen Tafelschein. Dieser läuft nach einer gewissen Zeit ab und kann wieder neu beantragt werden.'
          },
          {
            opened: false,
            id: '7',
            header: 'Müssen die Kund*innen für die Lebensmittel zahlen?',
            content:
              'Die Tafel ist quasi wie ein Supermarkt für Menschen, die bedürftig sind. Je nach dem, wie viele Personen in einem Haushalt leben, zahlen die Bedürftigen einen Betrag zwischen 2,50 und 5 Euro.'
          },
          {
            opened: false,
            id: '8',
            header: 'Wie ist die Verteilung der Ware geregelt?',
            content:
              'Jede*r Tafelkund*in sind z.B. in Gruppen eingeteilt und bekommen einen Zeitplan, wann ihre Gruppe an der Reihe ist. Die Gruppe rotiert dann, sodass jede*r einmal in der ersten Gruppe dran ist.<br/><br/>' +
              'Je nach Tafel werden Kund*innen verschiedenen Gruppen zugeordnet. Jede Gruppe erhält ein Zeitfenster, in dem sie Zugang zu den Lebensmitteln erhält. Die Reihenfolge rotiert in regelmäßigen Abständen.'
          },
          {
            opened: false,
            id: '9',
            header:
              'Welche Voraussetzungen sollte ich als Helfer*in mitbringen?',
            content:
              'Aufgrund der aktuellen Corona-Krise gelten auch bei den Tafeln besondere Schutzmaßnahmen. Daher solltest Du nicht zur Risikogruppe von COVID-19 gehören, wenn Du vor Ort helfen möchtest. Bei manchen Tafeln gibt es außerdem ein Mindestalter. Frag einfach bei der Tafel in Deiner Nähe nach und nutze dafür unsere Postleitzahlensuche weiter oben.'
          }
        ]
      }
    }
  }
}
</script>
