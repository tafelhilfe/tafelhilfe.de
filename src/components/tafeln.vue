<template>
    <form @submit.prevent="sendData">
        <b-container class="content">
            <b-row v-if="tafeln.progress.step == 0">
                <div class="col-12">
                    <h1 class="text-primary mb-4">{{tafeln.headline}}</h1>
                </div>
            </b-row>
            <b-row class="mt-5" v-if="tafeln.progress.step == 0">
                <div class="col-12 col-md">
                    <h5>{{tafeln.colLeft.headline}}</h5>
                    <p v-html="tafeln.colLeft.text"/>
                </div>
                <div class="col-12 col-md">
                    <h5>{{tafeln.colRight.headline}}</h5>
                    <p v-html="tafeln.colRight.text"/>
                </div>
            </b-row>
            <b-row v-if="tafeln.progress.step == 1">
                <b-col>
                    <h3 class="text-primary mb-5">{{tafeln.formSteps.step1.question}}</h3>
                    <b-form-radio class="mb-4" value="1" size="lg" button button-variant="outline-primary" v-model="q1.open">Wir haben geöffnet</b-form-radio>
                    <b-form-radio class="mb-4" value="0" size="lg" button button-variant="outline-primary" v-model="q1.open">Wir haben leider geschlossen</b-form-radio>
                </b-col>
            </b-row>
            <b-row v-if="tafeln.progress.step >= 1">
                <b-col>
                    <h5 class="text-primary">{{tafeln.progress.label}} {{tafeln.progress.step}}/{{tafeln.progress.max}}</h5>
                    <b-progress :max="tafeln.progress.max">
                        <b-progress-bar :value="tafeln.progress.step" variant="primary" striped="striped"></b-progress-bar>
                    </b-progress>
                </b-col>
            </b-row>
            <b-row class="mt-4 mb-4">
                <b-col>
                    <b-button pill variant="light" size="lg" class="float-left shadow-lg" @click="prevStep" v-if="tafeln.progress.step > 1"> <b-icon icon="caret-left-fill"></b-icon> {{tafeln.backButton}}</b-button>
                    <b-button pill variant="primary" size="lg" class="float-right shadow-lg" @click="nextStep">{{tafeln.startButton}} <b-icon icon="caret-right-fill"></b-icon></b-button>

                </b-col>
            </b-row>
        </b-container>
    </form>
</template>

<script>
    export default {
        name: "tafeln",
        props: ['tafeln'],
        data() {
            return {
                q1: {
                    open: null
                }
            }
        },
        methods: {
            nextStep() {
                this.tafeln.progress.step += 1;
                if(this.tafeln.progress.step >= 1) {
                    this.tafeln.startButton = 'Weiter'
                }
            },
            prevStep() {
                this.tafeln.progress.step -= 1;
            },
            sendData() {

            }
        }
    }
</script>
