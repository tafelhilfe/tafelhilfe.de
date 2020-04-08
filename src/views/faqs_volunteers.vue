<template>
    <div class="faqsVolunteers">
        <faqs :faqs="faqs"/>
    </div>
</template>
<script>
    import Faqs from "../components/faqs";
    export default {
        name: "faqsVolunteers",
        components: {Faqs},
        data() {
            return {
                faqs: {
                    headline: "Häufig gestellte Fragen",
                    themeColor: 'secondary',
                    faq: [
                        {
                            opened: false,
                            id: "0",
                            header: "Wie groß ist der Arbeitsaufwand?",
                            content: "Alle 3 Wochen 3,5 h am Samstag. (ein Beispiel vom Land)"
                        },
                        {
                            opened: false,
                            id: "1",
                            header: "Welche Aufgaben erwarten mich?",
                            content: "Die Tafel ist quasi wie ein Supermarkt für Menschen, die bedürftig sind.<br />" +
                                "Es gibt 3 Aufgabenbereiche:<br/>" +
                                "<ol class='mb-0'>" +
                                "<li class='mb-2'>Als Fahrer*in/ bzw. Begleitperson holst du die Lebensmittel von den Supermärkten und Bäckereien, die mit der örtlichen Tafel kooperieren, mit dem Auto der Tafel ab und lieferst sie ans Tafelgebäude. Dort lädst du zusammen mit anderen Helfer*innen der Vorgruppe die Lebensmittelkisten aus.</li>" +
                                "<li class='mb-2'>Als Helfer*in der Vorgruppe nimmst du die Lebensmittelkisten der Fahrer*innen entgegen, sortierst diese nach Kategorien (z.B. Kühlware, Obst und Gemüse, Brot, Backwaren und Süßigkeiten), entsorgst schlechte Ware und räumst die guten Lebensmittel in die dafür vorgesehenen Regale ein, oder packst sie in Rationen für die spätere Abholung.</li>" +
                                "<li>Als Helfer*in der Ausgabe verteilst du die Ware an die Bedürftigen, die zur Tafel kommen. Dabei bekommen Personen, die einen Schein für eine 6-köpfige Familie haben mehr Ware als eine einzelne Person. Bei manchen Tafeln nehmen sich die Kund*innen auch selbst die Ware aus den Regalen.<br/>" +
                                "Aufgrund des Coronaviruses liefern immer mehr Tafeln die Lebensmittel an ihre Kund*innen, sodass dann statt der Ausgabe die Verteilung der vorgepackten Tüten deine Aufgabe wäre.</li>" +
                                "</ol>"

                        },
                        {
                            opened: false,
                            id: "2",
                            header: "Müssen die Kund*innen etwas zahlen?",
                            content: "Ja, es wird ein kleiner Beitrag von ca. 2,50€ - 5€ je nach Personenanzahl vom Helferteamleiter eingesammelt."
                        },
                        {
                            opened: false,
                            id: "3",
                            header: "Wie kann ich meiner örtlichen Tafel helfen und warum ist das jetzt wichtig?",
                            content: "Du kannst dich über unsere Homepage... bei deiner örtlichen Tafel anmelden und so Helfer*in der Tafel werden. <br/>" +
                                "Das gleiche geht auch über die Seite der Tafeljugend <a href='https://tafel-jugend.de/'>https://tafel-jugend.de/</a>. <br/>" +
                                "Das ist gerade jetzt in Zeiten des Corona Viruses wichtig, da du mit deiner Hilfe die älteren Helfer*innen, die zur Risikogruppe gehören, entlastest. Somit trägst du dazu bei, dass genau jetzt die Bedürftigen nicht auf der Strecke bleiben und zudem kannst du Spaß und Freude mit anderen motivierten Helfer*innen beim Retten von Lebensmitteln haben, die sonst in der Tonne gelandet wäre!"
                        },
                        {
                            opened: false,
                            id: "4",
                            header: "Wie wird man Tafelkunde?",
                            content: "Die Bedürftigkeit wird beim örtlichen Tafelträger nachgewiesen und man erhält einen Tafelschein, den man vorlegen muss. Dieser läuft nach einer gewissen Zeit ab und muss wieder neu beantragt werden."
                        },
                        {
                            opened: false,
                            id: "5",
                            header: "Wie viele Helfer*innen gibt es?",
                            content: "Das kommt sehr auf die Größe der Tafel und die Anzahl der Kund*innen an. Das können pro Tafelausgabe in allen Teams zusammen ca. 20 Personen sein."
                        },
                        {
                            opened: false,
                            id: "6",
                            header: "Wie wird die Verteilung der Ware geregelt?",
                            content: "Die Tafelkund*innen sind z.B. in Gruppen eingeteilt und bekommen einen Zeitplan, wann ihre Gruppe an der Reihe ist. Die Gruppe rotiert dann, sodass jede*r einmal in der ersten Gruppe dran ist."
                        },
                        {
                            opened: false,
                            id: "7",
                            header: "Wie kann ich mich als Helfer*in vor der Ansteckung mit dem Coronavirus schützen?",
                            content: "Es wird bei allen Aufgabenbereichen auf den Mindestabstand von 1,5m geachtet und jede*r muss sich die Hände desinfizieren (Helfer*innen und Kund*innen). Die Helfer*innen arbeiten im Abstand zueinander und die Ware wird auf einen Tisch gelegt, wo der*die Kund*in sie sich nimmt.<br/>" +
                                "Wenn die Lebensmittel an die Kund*innen ausgeliefert werden, gibt es eine logische Route, nach der vorgegangen wird."
                        },
                        {
                            opened: false,
                            id: "8",
                            header: "Welche Voraussetzungen muss ich als Helfer*in mitbringen?",
                            content: "Das ist von Tafel zu Tafel verschieden. Aber alle Tafeln freuen sich über Helfer*innen und es bedarf keiner besonderer Voraussetzungen."
                        },
                        {
                            opened: false,
                            id: "9",
                            header: "Wie viele Hilfsbedürftige gibt es?",
                            content: "Stand 2019 sind 1,65 Millionen Menschen regelmäßige Kunden bei der Tafel."
                        },
                    ]

                }
            }
        }
    }
</script>