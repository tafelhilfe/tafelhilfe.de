<template>
    <MglMap :interactive="false" @load="onMapLoaded" :center="[10.0183, 51.1334]" :zoom="4" :maxBounds="[
                            [5.391687, 46.930529],
                            [15.614991, 55.662883]
                        ]" :accessToken="accessToken" :mapStyle="mapStyle" >

        <MglMarker @click="markerClicked(index)" v-for="(tafel, index) in tafeln" :key="tafel.name" :coordinates="[tafel.coords.lng, tafel.coords.lat]">
            <b-icon-house-fill slot="marker" variant="secondary"/>
        </MglMarker>
    </MglMap>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import promisify from 'map-promisified'
    import tafeln from "@/assets/tafeln_geo.json";
    import { MglMap, MglMarker } from "vue-mapbox";

    export default {
        name: "MapboxMap",
        components: {
            MglMap,
            MglMarker
        },
        data() {
            return {
                accessToken: "pk.eyJ1IjoibGdhc3RsZXIiLCJhIjoiY2s2Y28wemVsMGNqeTNscXh3Ym9pbjc0OCJ9.GaJVlB5a2mEQ_PEu7qZ23A", // Mapbox access token
                mapStyle: "mapbox://styles/lgastler/ck8ngh4k82kwh1io0d1mmajla/draft", // Mapbox style
                tafeln: tafeln // currently loaded from JSON in the future loaded from DB
            };
        },
        methods: {
            onMapLoaded(event) {
                this.map = event.map;
                this.actions = promisify(event.map)
            },
            findByPlz(plz) {
                fetch(
                    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=postleitzahlen-deutschland&q=${plz}&facet=note&facet=plz`
                )
                    .then(res => {
                        return res.json()
                    }).then(data => {
                    // setup Coordinates of searched PLZ
                    var coords = {}
                    coords.lat = data.records[0].geometry.coordinates[1]
                    coords.lng = data.records[0].geometry.coordinates[0]

                    //filter and sort all Tafeln by distance between searched PLZ and Tafel
                    var nearTafeln = tafeln
                        .map(tafel => ({...tafel, dist: this.radiusBetweenCoords(coords, tafel.coords)}))
                            .sort((a,b) => a.dist - b.dist)
                            .slice(0,30)

                    this.flyToCoords(coords)    // move map to PLZ
                    this.$emit('foundTafeln', nearTafeln ) // return found Tafeln near PLZ
                })
            },

            /**
             * Calculates the distance between 2 Positions based on their Coordinates using the haversine formula
             * @param coords1 first Position
             * @param coords2 second Position
             * @returns {number} Distance bewteen the two Positions
             */
            radiusBetweenCoords(coords1, coords2) {
                var R = 6371 // the earths radius in km
                var phi1 = this.d2r(coords1.lat)
                var phi2 = this.d2r(coords2.lat)
                var deltaPhi = this.d2r(coords2.lat - coords1.lat)
                var deltaLambda = this.d2r(coords2.lng - coords1.lng)

                var a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda /
                    2) * Math.sin(deltaLambda / 2)
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
                var dist = R * c
                return dist
            },

            /**
             * Converting degrees to radians
             * @param degree
             * @returns {number}
             */
            d2r(degree) {
                var pi = Math.PI;
                return degree / (180 / pi);
            },

            /**
             * async method to move Mapbox card to new Position
             * @param coords Coordinates
             * @returns {Promise<void>}
             */
            async flyToCoords (coords) {
                await this.actions.flyTo({
                    center: coords,
                    zoom: 9,
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                });
            }
        },

        created() {
            this.map =null;
            this.mapbox = Mapbox;
        }
    };

</script>