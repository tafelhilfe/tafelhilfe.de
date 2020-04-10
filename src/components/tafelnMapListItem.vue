<template>
    <li class="p-2 list-group-item bg-light no-border border-top-0 border-left-0 border-right-0 border-bottom border-gray-300">
       <div class="d-block text-tertiary">
           <div class="d-flex flex-row flex-content-between align-items-center">
               <div class="flex-grow-0">
                   <!--Currenty temporary until we get real data-->
                   <svg v-if="random === 0" class="mr-2 text-secondary" fill="currentColor" style="width: 2rem; height: 2rem" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                   <svg v-else-if="random === 1" class="mr-2 text-danger" fill="currentColor" style="width: 2rem; height: 2rem" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                   <svg v-else-if="random === 2" class="mr-2 text-warning" fill="currentColor" style="width: 2rem; height: 2rem" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
               </div>
               <div class="flex-grow-1 text-left">
                   <h5 class="text-secondary">{{tafel.name}}</h5>
                   <span>{{tafel.addresse}}, {{tafel.ort}}</span>
               </div>
               <!--Displayed only on big screens (xl)-->
               <div class="flex-grow-0 mr-4 text-left d-none d-xl-block">
                   <div>
                       Entfernung: ca. <strong>{{Math.floor(tafel.dist * 100) / 100}}</strong> km
                   </div>
               </div>
                <div>
                    <b-button class="rounded-full mr-2" v-on:click="toggelModal">
                        <svg v-bind:style="[visible ? {transform: `rotate(180deg)`} : {}]" style="height: 1.5rem; width: 1.5rem" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                    </b-button>
                </div>
           </div>
           <div v-if="visible" class="text-left mt-2 border-top" style="margin-left: 2.5rem">
               <div class="my-2 font-weight-bold">
                   <div>Ansprechpartner: {{tafel.ansprechpartner}}</div>
                   <div>Tel: {{tafel.tel}}</div>
               </div>
               <div class="font-medium border-top">
                   <h6 class="my-2 font-weight-bolder">Unterstützung benötigt bei:</h6>
                   <ul>
                       <!--Currenty temporary until we get real data-->
                       <li class="ml-n4">Abholung mit Kühlfahrzeug</li>
                       <li class="ml-n4">Sortieren und Zusammenpacken</li>
                       <li class="ml-n4">Auslieferungen</li>
                   </ul>
               </div>
           </div>
       </div>
    </li>
</template>

<script>
    export default {
        name: "TafelnMapListItem",
        props: {
            tafel: Object,
            index: Number,
        },
        methods: {
            toggelModal() {
                this.visible = !this.visible
            }
        },
        data() {
            return {
                random: Math.floor(Math.random() * 3), //currentyl temporary only for displaying the current status of a Tafel
                visible: false
            }
        },
    }
</script>