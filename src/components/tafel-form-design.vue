<template>
<div>
    <div class="relative bg-gray-50 overflow-hidden">
        <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
            <div class="relative h-full max-w-screen-xl mx-auto">
                <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                    width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                            patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                    width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20"
                            patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
                </svg>
            </div>
        </div>

        <div x-data="{ open: false }" class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
                <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
                    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div class="flex items-center justify-between w-full md:w-auto">
                            tafelhilfe.de
                            <div class="-mr-2 flex items-center md:hidden">
                                <button @click="open = true" type="button"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <a href="/"
                            class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Home</a>
                        <a href="/anfrage.html"
                            class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Helfer
                            finden</a>
                        <a href="#"
                            class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Ressourcen</a>
                    </div>
                </nav>
            </div>

            <div x-show="open" style="display: none;" class="absolute top-0 inset-x-0 p-2 md:hidden">
                <div class="rounded-lg shadow-md transition transform origin-top-right" x-show="open"
                    x-transition:enter="duration-150 ease-out" x-transition:enter-start="opacity-0 scale-95"
                    x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
                    x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95">
                    <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                        <div class="px-5 pt-4 flex items-center justify-between">
                            <div>
                                tafelhilfe.de
                            </div>
                            <div class="-mr-2">
                                <button @click="open = false" type="button"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="px-2 pt-2 pb-3">
                            <a href="/"
                                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Home</a>
                            <a href="/anfrage.html"
                                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Helfer
                                finden</a>
                            <a href="#"
                                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Ressourcen</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                <div class="text-center">
                    <h2
                        class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
                        Wir helfen euch neue Helfer zu finden!
                    </h2>
                </div>
            </div>
        </div>
    </div>


    <div class="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:mt-12 xl:mt-16">
        <form class="mb-16">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Gebe bitte deine Postleizahl
                ein.</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input id="email" class="form-input block w-full sm:text-sm sm:leading-5" placeholder="PLZ" />
            </div>
            <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Ihre Daten
                    </h3>
                </div>
                <div class="mt-6 sm:mt-5">
                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="first_name"
                            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Name
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-xs rounded-md shadow-sm">
                                <input id="first_name"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>


                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="street_address"
                            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Addresse
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-lg rounded-md shadow-sm">
                                <input id="street_address"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="zip" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            PLZ
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-xs rounded-md shadow-sm">
                                <input id="zip"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="zip" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Ort
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-xs rounded-md shadow-sm">
                                <input id="zip"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="zip" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Ansprechpartner
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-xs rounded-md shadow-sm">
                                <input id="zip"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="zip" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Tel
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-xs rounded-md shadow-sm">
                                <input id="zip"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Mail
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-lg rounded-md shadow-sm">
                                <input id="email" type="email"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            URL
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <div class="max-w-lg rounded-md shadow-sm">
                                <input id="email" type="text"
                                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-12">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Sie suchen
                        </h3>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div class="sm:border-t sm:border-gray-200 sm:pt-5">
                            <fieldset>
                                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                    <div>
                                        <legend
                                            class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700">
                                            Details
                                        </legend>
                                    </div>
                                    <div class="mt-4 sm:mt-0 sm:col-span-2">
                                        <div class="max-w-lg">
                                            <div class="relative flex items-start">
                                                <div class="absolute flex items-center h-5">
                                                    <input id="comments" type="checkbox"
                                                        class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out">
                                                </div>
                                                <div class="pl-7 text-sm leading-5">
                                                    <label for="comments" class="font-medium text-gray-700">Abholung mit
                                                        Kühlfahrzeug</label>
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <div class="relative flex items-start">
                                                    <div class="absolute flex items-center h-5">
                                                        <input id="candidates" type="checkbox"
                                                            class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out">
                                                    </div>
                                                    <div class="pl-7 text-sm leading-5">
                                                        <label for="candidates"
                                                            class="font-medium text-gray-700">Lieferung</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <div class="relative flex items-start">
                                                    <div class="absolute flex items-center h-5">
                                                        <input id="offers" type="checkbox"
                                                            class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out">
                                                    </div>
                                                    <div class="pl-7 text-sm leading-5">
                                                        <label for="offers"
                                                            class="font-medium text-gray-700">Lebensmittel sortieren,
                                                            säubern, entsorgen, vorpacken</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                            <fieldset>
                                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                    <div>
                                        <legend
                                            class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700">
                                            Wie möchten Sie kontaktiert werden?
                                        </legend>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <div class="max-w-lg">
                                            <div class="mt-4">
                                                <div class="mt-4 flex items-center">
                                                    <input id="push_email" name="form-input push_notifications"
                                                        type="radio"
                                                        class="form-radio h-4 w-4 text-green-600 transition duration-150 ease-in-out">
                                                    <label for="push_email" class="ml-3">
                                                        <span
                                                            class="block text-sm leading-5 font-medium text-gray-700">Mail</span>
                                                    </label>
                                                </div>
                                                <div class="mt-4 flex items-center">
                                                    <input id="push_nothing" name="form-input push_notifications"
                                                        type="radio"
                                                        class="form-radio h-4 w-4 text-green-600 transition duration-150 ease-in-out">
                                                    <label for="push_nothing" class="ml-3">
                                                        <span
                                                            class="block text-sm leading-5 font-medium text-gray-700">Telefon</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 border-t border-gray-200 pt-5">
                <div class="flex justify-end">
                    <span class="inline-flex rounded-md shadow-sm">
                        <button type="button"
                            class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                            Cancel
                        </button>
                    </span>
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Save
                        </button>
                    </span>
                </div>
            </div>
        </form>
    </div>

    <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Offizielle Tafel Website
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Tafel Jugend
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        LEFAT
                    </a>
                </div>

            </nav>
            <div class="mt-8 flex justify-center">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </a>
            </div>
            <div class="mt-8">
                <p class="text-center text-base leading-6 text-gray-400">
                    &copy; 2020 tafelhilfe @ #WirVsVirus Hackathon
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import tafeln from '@/assets/tafeln.json'
    import resources from '@/assets/resources.json'

    export default {
        name: "tafel-form",
        data () {
            return {
                data: tafeln,
                plz: '',
                show: false,
                send: false,
                error: false,
                options: resources,
                address: {},
                selectedCheckbox: []
            }
        },
        methods: {
            getAddress() {
                if (this.plz.length === 5) {
                    this.address = {
                        "name": "",
                        "adresse": "",
                        "plz": this.plz,
                        "ort": "",
                        "ansprechpartner": "",
                        "tel": "",
                        "fax": "",
                        "mail": "",
                        "url": ""
                    };
                    for (let i=0; i < this.data.length; i++) {
                        if (this.data[i]['plz'] === this.plz) {
                            this.address = this.data[i];
                            break
                        }
                    }
                    this.send = false;
                    this.show = true
                }
            },
            sendData() {
                for (let i=0; i < this.selectedCheckbox.length; i++) {
                    this.address["option" + (i+1)] = this.selectedCheckbox[i]
                }
                this.$http.post('https://aiw6w7f673.execute-api.eu-west-1.amazonaws.com/prod/anfrage', this.address,{
                   headers: {
                       'x-api-key': 'MQEZ4icN9737oFYkGqmFO1r3e5YvzzU67LmJFave'
                   }
                })
                .then(() => {
                    this.show = false;
                    this.send = true
                })
                .catch((error) => {
                    this.error = true;
                    console.log(error)
                });
            }
        }
    }
</script>
