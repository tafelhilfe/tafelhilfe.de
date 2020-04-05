<template>
    <div class="container content">
        <div class="row" v-if="tafeln.progress.step == 1">
            <div class="col-12">
                <h1 class="text-primary mb-4">{{tafeln.headline}}</h1>
            </div>
        </div>
        <div class="row mt-5" v-if="tafeln.progress.step == 1">
            <div class="col-12 col-md">
                <h5>{{tafeln.colLeft.headline}}</h5>
                <p v-html="tafeln.colLeft.text"/>
            </div>
            <div class="col-12 col-md">
                <h5>{{tafeln.colRight.headline}}</h5>
                <p v-html="tafeln.colRight.text"/>
            </div>
        </div>
        <div class="row" v-if="tafeln.progress.step == 2">
            <div class="col">
                my next step
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <h5 class="text-primary">{{tafeln.progress.label}} {{tafeln.progress.step}}/{{tafeln.progress.max}}</h5>
                <b-progress :max="tafeln.progress.max" show-value>
                    <b-progress-bar :value="tafeln.progress.step" variant="primary" striped="striped"></b-progress-bar>
                </b-progress>
            </div>
        </div>
        <div class="row mt-4 mb-4">
            <div class="col">
                <b-button pill variant="light" size="lg" class="float-left shadow-lg" @click="prevStep" v-if="tafeln.progress.step > 1"> <b-icon icon="caret-left-fill"></b-icon> {{tafeln.backButton}}</b-button>
                <b-button pill variant="primary" size="lg" class="float-right shadow-lg" @click="nextStep">{{tafeln.startButton}} <b-icon icon="caret-right-fill"></b-icon></b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tafeln",
        props: ['tafeln'],
        data() {
            return {

            }
        },
        methods: {
            nextStep() {
                this.tafeln.progress.step += 1;
            },
            prevStep() {
                this.tafeln.progress.step -= 1;
            }
        }
    }
</script>
