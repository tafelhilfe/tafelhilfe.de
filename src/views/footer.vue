<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div class="px-5 py-2">
          <a
            href="https://tafel.de"
            target="_blank"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Offizielle Tafel Website
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="https://tafel-jugend.de"
            target="_blank"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Tafel Jugend
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="https://lefat.de"
            target="_blank"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            LEFAT
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center">
        <router-link to="/impressum" class="text-gray-400 hover:text-gray-500">
          Impressum
        </router-link>
        <router-link
          to="/datapolicy"
          class="ml-6 text-gray-400 hover:text-gray-500"
        >
          Datenschutzerklärung
        </router-link>
      </div>
      <div class="mt-8">
        <p class="text-center text-base leading-6 text-gray-400">
          &copy; 2020 tafelhilfe @ #wirvsvirus Hackathon
        </p>
      </div>
    </div>
  </div>
</template>
