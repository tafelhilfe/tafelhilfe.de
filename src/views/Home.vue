<template>
  <div class="home">
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div class="relative h-full max-w-screen-xl mx-auto">
          <svg
            class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
          >
            <div
              class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <router-link to="/" class="text-3xl font-bold"
                  >tafelhilfe.de</router-link
                >
                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    v-on:click="mobileNavOpen = true"
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <router-link
                class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                to="/"
                >Home</router-link
              >
              <router-link
                class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                to="/anfrage"
                >Helfer finden</router-link
              >
            </div>
          </nav>
        </div>

        <div
          v-show="mobileNavOpen"
          style="display: none;"
          class="absolute top-0 inset-x-0 p-2 md:hidden"
        >
          <div
            class="rounded-lg shadow-md transition transform origin-top-right"
            v-show="mobileNavOpen"
            x-transition:enter="duration-150 ease-out"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="duration-100 ease-in"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
          >
            <div class="rounded-lg bg-white shadow-xs overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <p class="font-bold">tafelhilfe.de</p>
                </div>
                <div class="-mr-2">
                  <button
                    v-on:click="mobileNavOpen = false"
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <router-link
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  to="/"
                  >Home</router-link
                >
                <router-link
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  to="/anfrage"
                  >Helfer finden</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
        >
          <div class="text-center">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl"
            >
              Die Mensa hat zu?
              <br class="xl:hidden" />
              <span class="text-green-500"
                >Dann teil doch selber Essen aus!</span
              >
            </h2>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Mit #tafelhilfe unterstützen wir lokale Tafeln, junge und
              engagierte Helfer aus eurer Umgebung zu finden.
            </p>
            <div
              class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div class="rounded-md shadow">
                <router-link
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  to="/anfrage"
                  >Helfer finden!</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-12 bg-white">
          <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div class="lg:text-center mb-16">
              <p
                class="text-base leading-6 text-green-500 font-semibold tracking-wide uppercase"
              >
                Du kannst helfen!
              </p>
              <h3
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              >
                Die Tafeln suchen...
              </h3>
            </div>
            <div class="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5">
                  <h5
                    class="text-2xl font-bold leading-6 font-medium text-gray-900"
                  >
                    ... deine Tetris-Skills
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Die gespendeten Lebensmittel für die Tafeln müssen natürlich
                    erstmal abgeholt werden. Auch bei der Tafel kannst du allen
                    deine Fähigkeiten zeigen und den Kühltransporter mit so
                    vielen Lebensmitteln wie möglich beladen. Das perfekte
                    Workout für Körper und Geist.
                  </p>
                </div>
              </div>
              <div class="mt-10 lg:mt-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="mt-5">
                  <h5
                    class="text-2xl font-bold leading-6 font-medium text-gray-900"
                  >
                    .. deine Organisation
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Wenn die Lebensmittel schließlich bei der Tafel ankommen,
                    gilt es gründlich zu sortieren. Verdorbene Lebensmittel
                    müssen entsorgt werden. Genießbare Lebensmittel genießen
                    eine reinigende Dusche und werden anschließend für die
                    Ausgabe vorgepackt.
                  </p>
                </div>
              </div>
              <div class="mt-10 lg:mt-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div class="mt-5">
                  <h5
                    class="text-2xl font-bold  leading-6 font-medium text-gray-900"
                  >
                    ... deine Stärke
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Nicht nur bei der Abholung braucht die Tafel starke Arme,
                    auch bei der Verteilung der Lebensmittelpakete. Denn zur
                    Zeit ist es notwendig, die Lebensmittel direkt zu den
                    Familien zu bringen und eine volle Kiste braucht deine Kraft
                    und Ausdauer, um es in den 5. Stock zu schaffen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-green-600">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10"
        >
          Finde eine Tafel in deiner Nähe!
          <br class="hidden sm:inline" />
          <span class="text-gray-900 text-3xl"
            >Gib einfach deine Postleizahl ein und wir suchen die nächste Tafel
            für dich raus.</span
          >
        </h2>
        <form class="mt-8 sm:flex">
          <input
            ref="plz"
            aria-label="Postleizahl"
            type="text"
            required
            class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
            placeholder="PLZ eingeben"
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="button"
              v-on:click="findTafel"
              class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-900 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Tafel finden!
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div
        class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
      >
        <svg
          class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div class="relative">
          <h3
            class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Ihr als Tafel wollt weiter offen bleiben oder sogar wieder öffnen?
          </h3>
          <p
            class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"
          >
            Mit #tafelhilfe unterstützen wir lokale Tafeln, junge und engagierte
            Helfer aus eurer Umgebung zu finden. Dafür bieten wir Werbung für
            Plattformen, die vor allem von jungen Menschen zwischen 15 und 25 in
            Anspruch genommen werden, aber auch Vorlagen für Poster, die ihr vor
            Ort, zB in Supermärkten, aushängen könnt.
            <br />
            <br />
            Für geschlossene Tafeln: Wir als #tafelhilfe wollen die Auswirkungen
            von COVID19 auf die bedürftigen Menschen aufhalten und minimieren.
            Deswegen ist eines unserer Hauptziele geschlossene Tafeln wieder zu
            öffnen, indem wir die notwendigen Helfer finden und zu euch bringen.
            <br />
            <br />
            Wenn ihr als Tafel schon konkrete Anfragen für Helfende stellen
            wollt, könnt ihr über das Formular eine Anzeige aufgeben.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2
            class="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Häufig gestellte Fragen
          </h2>
          <div class="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              <div>
                <dt class="text-lg leading-7">
                  <button
                    v-on:click="toggleFAQItem(1)"
                    class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                  >
                    <span class="font-medium text-gray-900">
                      Wie groß ist der Arbeitsaufwand?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                      <svg
                        class="h-6 w-6 transform"
                        :class="{ '-rotate-180': openPanel === 1 }"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" v-show="openPanel === 1">
                  <p class="text-base leading-6 text-gray-500">
                    Alle 3 Wochen 3,5 h am Samstag.
                  </p>
                </dd>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(2)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Welche Aufgaben erwarten mich?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 2 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 2">
                    <p class="text-base leading-6 text-gray-500">
                      Die Tafel ist quasi wie ein Supermarkt für Menschen, die
                      bedürftig sind. Es gibt 3 Aufgabenbereiche: Als Fahrer*in/
                      bzw. Begleitperson holst du die Lebensmittel von den
                      Supermärkten und Bäckereien, die mit der örtlichen Tafel
                      kooperieren, mit dem Auto der Tafel ab und lieferst sie
                      ans Tafelgebäude. Dort lädst du zusammen mit anderen
                      Helfer*innen der Vorgruppe die Lebensmittelkisten aus. Als
                      Helfer*in der Vorgruppe nimmst du die Lebensmittelkisten
                      der Fahrer*innen entgegen, sortierst diese nach Kategorien
                      (z.B. Kühlware, Obst und Gemüse, Brot, Backwaren und
                      Süßigkeiten), entsorgst schlechte Ware und räumst die
                      guten Lebensmittel in die dafür vorgesehenen Regale ein,
                      oder packst sie in Rationen für die spätere Abholung. Als
                      Helfer*in der Ausgabe verteilst du die Ware an die
                      Bedürftigen, die zur Tafel kommen. Dabei bekommen
                      Personen, die einen Schein für eine 6-köpfige Familie
                      haben mehr Ware als eine einzelne Person. Bei manchen
                      Tafeln nehmen sich die Kund*innen auch selbst die Ware aus
                      den Regalen. Aufgrund des Coronaviruses liefern immer mehr
                      Tafeln die Lebensmittel an ihre Kund*innen, sodass dann
                      statt der Ausgabe die Verteilung der vorgepackten Tüten
                      deine Aufgabe wäre.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(3)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Müssen die Kund*innen etwas zahlen?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 3 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 3">
                    <p class="text-base leading-6 text-gray-500">
                      Ja, es wird ein kleiner Beitrag von ca. 2,50€ - 5€ je nach
                      Personenanzahl vom Helferteamleiter eingesammelt.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(4)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Wie kann ich meiner örtlichen Tafel helfen und warum ist
                        das jetzt wichtig?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 4 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 4">
                    <p class="text-base leading-6 text-gray-500">
                      SDu kannst dich über unsere Homepage... bei deiner
                      örtlichen Tafel anmelden und so Helfer*in der Tafel
                      werden. Das gleiche geht auch über die Seite der
                      Tafeljugend https://tafel-jugend.de/
                      <br />
                      Das ist gerade jetzt in Zeiten des Corona Viruses wichtig,
                      da du mit deiner Hilfe die älteren Helfer*innen, die zur
                      Risikogruppe gehören, entlastest. Somit trägst du dazu
                      bei, dass genau jetzt die Bedürftigen nicht auf der
                      Strecke bleiben und zudem kannst du Spaß und Freude mit
                      anderen motivierten Helfer*innen beim Retten von
                      Lebensmitteln haben, die sonst in der Tonne gelandet wäre!
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(5)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Wie wird man Tafelkunde?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 5 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 5">
                    <p class="text-base leading-6 text-gray-500">
                      Die Bedürftigkeit wird beim örtlichen Tafelträger
                      nachgewiesen und man erhält einen Tafelschein, den man
                      vorlegen muss. Dieser läuft nach einer gewissen Zeit ab
                      und muss wieder neu beantragt werden.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(6)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Wie viele Helfer*innen gibt es?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 6 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 6">
                    <p class="text-base leading-6 text-gray-500">
                      Das kommt sehr auf die Größe der Tafel und die Anzahl der
                      Kund*innen an. Das können pro Tafelausgabe in allen Teams
                      zusammen ca. 20 Personen sein.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(7)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Wie wird die Verteilung der Ware geregelt?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 7 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 7">
                    <p class="text-base leading-6 text-gray-500">
                      Die Tafelkund*innen sind z.B. in Gruppen eingeteilt und
                      bekommen einen Zeitplan, wann ihre Gruppe an der Reihe
                      ist. Die Gruppe rotiert dann, sodass jede*r einmal in der
                      ersten Gruppe dran ist.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(8)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Wie kann ich mich als Helfer*in vor der Ansteckung mit
                        dem Coronavirus schützen?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 8 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 8">
                    <p class="text-base leading-6 text-gray-500">
                      Es wird bei allen Aufgabenbereichen auf den Mindestabstand
                      von 1,5m geachtet und jede*r muss sich die Hände
                      desinfizieren (Helfer*innen und Kund*innen). Die
                      Helfer*innen arbeiten im Abstand zueinander und die Ware
                      wird auf einen Tisch gelegt, wo der*die Kund*in sie sich
                      nimmt.
                      <br />
                      Wenn die Lebensmittel an die Kund*innen ausgeliefert
                      werden, gibt es eine logische Route, nach der vorgegangen
                      wird.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(9)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Welche Voraussetzungen muss ich als Helfer*in
                        mitbringen?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 9 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 9">
                    <p class="text-base leading-6 text-gray-500">
                      Das ist von Tafel zu Tafel verschieden. Aber alle Tafeln
                      freuen sich über Helfer*innen und es bedarf keiner
                      besonderer Voraussetzungen.
                    </p>
                  </dd>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt class="text-lg leading-7">
                    <button
                      v-on:click="toggleFAQItem(10)"
                      class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span class="font-medium text-gray-900">
                        Wie komme ich als Tafel an neue/junge Helfer*innen?
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <svg
                          class="h-6 w-6 transform"
                          :class="{ '-rotate-180': openPanel === 10 }"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd class="mt-2 pr-12" v-show="openPanel === 10">
                    <p class="text-base leading-6 text-gray-500">
                      Über unsere Homepage kannst du ein Formular ausfüllen und
                      ein Helfergesuch einstellen mit der Helfer-Wunschkategorie
                      (Fahrer*in, Verteiler*in, ...)
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <footerNav />
    <banner />
  </div>
</template>

<script>
import footerNav from "../views/footer";
import banner from "../components/banner";

export default {
  components: {
    footerNav,
    banner
  },
  data() {
    return {
      openPanel: 0,
      mobileNavOpen: false,
      quotes: []
    };
  },
  methods: {
    toggleFAQItem(index) {
      this.openPanel = this.openPanel === index ? null : index;
    },
    findTafel() {
      window.open(
        `https://www.tafel.de/ueber-uns/die-tafeln/tafel-suche/?tx_wwmap_map%5Baction%5D=list&tx_wwmap_map%5Bcontroller%5D=Locations&tx_wwmap_map%5Bsearch%5D=${this.$refs.plz.value}`
      );
    }
  }
};
</script>
