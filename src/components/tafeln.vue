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
                    <h3 class="text-primary mb-5">{{tafeln.q1.question}}</h3>
                    <div role="radiogroup" class="btn-group-vertical btn-group-lg">
                        <b-form-radio class="btn btn-outline-primary btn-lg mb-4 rounded text-left cursor-pointer" name="q1" :class="tafeln.q1.options[0].active" v-model="data.store" :value="tafeln.q1.options[0].value"><b-icon :icon="`${switchRadio('q1', 0)}`"></b-icon> {{tafeln.q1.options[0].text}}</b-form-radio>
                        <b-form-radio class="btn btn-outline-primary btn-lg mb-4 rounded text-left cursor-pointer" name="q1" :class="tafeln.q1.options[1].active" v-model="data.store" :value="tafeln.q1.options[1].value"><b-icon :icon="`${switchRadio('q1', 1)}`"></b-icon> {{tafeln.q1.options[1].text}}</b-form-radio>
                    </div>
                </b-col>
            </b-row>
            <b-row v-if="tafeln.progress.step == 2 && data.store === 'open'">
                <b-col>
                    <h3 class="text-primary mb-5">{{tafeln.q2a.question}}</h3>
                    <div role="radiogroup" class="btn-group-vertical btn-group-lg">
                        <b-form-radio class="btn btn-outline-primary btn-lg mb-4 rounded text-left" name="q2a" :class="tafeln.q2a.options[0].active" v-model="data.help" :value="tafeln.q2a.options[0].value"><b-icon :icon="`${switchRadio('q2a',0)}`"></b-icon> {{tafeln.q2a.options[0].text}}</b-form-radio>
                        <b-form-radio class="btn btn-outline-primary btn-lg mb-4 rounded text-left" name="q2a" :class="tafeln.q2a.options[1].active" v-model="data.help" :value="tafeln.q2a.options[1].value"><b-icon :icon="`${switchRadio('q2a', 1)}`"></b-icon> {{tafeln.q2a.options[1].text}}</b-form-radio>
                    </div>
                </b-col>
            </b-row>
            <b-row v-else-if="tafeln.progress.step == 2 && data.store === 'closed'">
                <b-col>
                    <h3 class="text-primary mb-5">{{tafeln.q2b.question}}</h3>
                    <div role="radiogroup" class="btn-group-vertical btn-group-lg">
                        <b-form-radio class="btn btn-outline-primary btn-lg mb-4 rounded text-left" name="q2b" :class="tafeln.q2b.options[0].active" v-model="data.prospektive" :value="tafeln.q2b.options[0].value"><b-icon :icon="`${switchRadio('q2b',0)}`"></b-icon> {{tafeln.q2b.options[0].text}}</b-form-radio>
                        <b-form-radio class="btn btn-outline-primary btn-lg mb-4 rounded text-left" name="q2b" :class="tafeln.q2b.options[1].active" v-model="data.prospektive" :value="tafeln.q2b.options[1].value"><b-icon :icon="`${switchRadio('q2b',1)}`"></b-icon> {{tafeln.q2b.options[1].text}}</b-form-radio>
                    </div>
                </b-col>
            </b-row>
            <b-row v-if="(tafeln.progress.step == 3 && (data.help === 'needless' || data.prospektive === 'closedUntilFurther')) || tafeln.progress.step == 4">
                <b-col>
                    <h3 class="text-primary mb-5">{{tafeln.q3a.question}}</h3>
                    <b-form-input type="text" size="lg" required class="border border-primary rounded mb-4 shadow" autofocus v-model="data.plz"></b-form-input>
                </b-col>
            </b-row>
            <b-row v-else-if="tafeln.progress.step == 3 && (data.help === 'required' || data.prospektive === 'openAgain')">
                <b-col>
                    <h3 class="text-primary mb-5">{{tafeln.q3b.question}}</h3>
                    <div role="checkboxgroup" class="btn-group-vertical btn-group-lg">
                        <b-form-checkbox class="btn btn-outline-primary btn-lg mb-4 rounded text-left" :class="tafeln.q3b.options[0].active" v-model="data.selectedCheckbox" :value="tafeln.q3b.options[0].value"><b-icon :icon="tafeln.q3b.options[0].icon"></b-icon> {{tafeln.q3b.options[0].text}}</b-form-checkbox>
                        <b-form-checkbox class="btn btn-outline-primary btn-lg mb-4 rounded text-left" :class="tafeln.q3b.options[1].active" v-model="data.selectedCheckbox" :value="tafeln.q3b.options[1].value"><b-icon :icon="tafeln.q3b.options[1].icon"></b-icon> {{tafeln.q3b.options[1].text}}</b-form-checkbox>
                        <b-form-checkbox class="btn btn-outline-primary btn-lg mb-4 rounded text-left" :class="tafeln.q3b.options[2].active" v-model="data.selectedCheckbox" :value="tafeln.q3b.options[2].value"><b-icon :icon="tafeln.q3b.options[2].icon"></b-icon> {{tafeln.q3b.options[2].text}}</b-form-checkbox>
                        <b-form-checkbox class="btn btn-outline-primary btn-lg mb-4 rounded text-left" :class="tafeln.q3b.options[3].active" v-model="data.selectedCheckbox" :value="tafeln.q3b.options[3].value"><b-icon :icon="tafeln.q3b.options[3].icon"></b-icon> {{tafeln.q3b.options[3].text}}</b-form-checkbox>
                        <b-form-textarea class="border-primary mb-4 rounded" rows="4" max-rows="6" :placeholder="tafeln.q3b.options[3].placeholder" v-if="textarea" v-model="data.sonstiges"></b-form-textarea>
                    </div>
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
                    <b-button pill variant="light" size="lg" class="float-left" @click="prevStep" v-if="tafeln.progress.step >= 1"> <b-icon icon="caret-left-fill"></b-icon> {{tafeln.backButton}}</b-button>
                    <b-button pill variant="primary" size="lg" class="float-right shadow-lg" @click="nextStep" :disabled="disableButton">{{tafeln.startButton}} <b-icon icon="caret-right-fill"></b-icon></b-button>

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
                textarea: false,
                data: {
                    store: '',
                    help: '',
                    prospektive: '',
                    selectedCheckbox: [],
                    sonstiges: '',
                    plz: '',
                }
            }
        },
        computed: {
            disableButton: function() {
                if (this.tafeln.progress.step == 1 && this.tafeln.q1.selected === null) {
                    return true
                } else if (this.tafeln.progress.step == 2 && this.tafeln.q2a.selected === null && this.data.store === 'open') {
                    return true
                } else if (this.tafeln.progress.step == 2 && this.tafeln.q2b.selected === null && this.data.store === 'closed') {
                    return true
                } else if (this.tafeln.progress.step == 3 && this.data.selectedCheckbox.length === 0) {
                    return true
                } else if(this.tafeln.progress.step == 4 || (this.tafeln.progress.step == 3 && (this.data.help === 'needless' || this.data.prospektive === 'closedUntilFurther'))) {
                    return !(this.data.plz.length === 5)
                } else {
                    return false
                }
            },
        },
        watch: {
            "data.store": function(changed) {
                this.updateRadio('q1', changed)
                this.data.help = '';
                this.data.prospektive = '';
            },
            "data.help": function(changed) {
                this.updateRadio('q2a', changed);
            },
            "data.prospektive": function(changed) {
                this.updateRadio('q2b', changed);
            },
            "data.selectedCheckbox": function(changed, oldValue) {
                this.switchCheckbox('q3b', changed, oldValue);
            },
        },
        methods: {
            arrDiff(a1, a2) {
                let a = [], diff = [];
                for (let i = 0; i < a1.length; i++) {
                    a[a1[i]] = true;
                }
                for (let i = 0; i < a2.length; i++) {
                    if (a[a2[i]]) {
                        delete a[a2[i]];
                    } else {
                        a[a2[i]] = true;
                    }
                }
                for (let k in a) {
                    diff.push(k);
                }
                return diff;
            },
            switchCheckbox(obj, changed, oldValue) {
                let vm = this;
                let index = null;
                let value = this.arrDiff(changed, oldValue)[0];
                vm.tafeln[obj].options.filter(
                    function(key, idx) {
                        return Object.keys(key).some(
                            function( cur ) {
                                if (key[cur] === value) {
                                    return index = idx;
                                }
                            }
                        )
                    }
                );
                if(this.tafeln[obj].options[index].active === '') {
                    this.tafeln[obj].options[index].active = 'active';
                    this.tafeln[obj].options[index].icon = this.tafeln.icons[3];
                    if(index == 3) {
                        this.textarea = true
                    }
                } else {
                    this.tafeln[obj].options[index].active = '';
                    this.tafeln[obj].options[index].icon = this.tafeln.icons[2];
                    if(index == 3) {
                        this.textarea = false
                    }
                }
            },
            switchRadio(obj, val) {
                if(val === this.tafeln[obj].selected) {
                    return this.tafeln.icons[1]
                } else {
                    return this.tafeln.icons[0]
                }
            },
            updateRadio(obj, changed) {
                let vm = this;
                vm.tafeln[obj].options.filter(
                    function(key, idx) {
                        vm.tafeln[obj].options[idx].active = '';
                        return Object.keys(key).some(
                            function( cur ) {
                                if (key[cur] === changed) {
                                    return vm.tafeln[obj].selected = idx;
                                }
                            }
                        )
                    }
                );
                vm.tafeln[obj].options[vm.tafeln[obj].selected].active = 'active'
            },
            nextStep() {
                this.tafeln.progress.step += 1;
                if(this.tafeln.progress.step >= 1) {
                    this.tafeln.startButton = 'Weiter'
                }
            },
            prevStep() {
                this.tafeln.progress.step -= 1;
                if (this.tafeln.progress.step === 0 ) {
                    this.data.store = '';
                    this.tafeln.q1.selected = null;
                    this.tafeln.q1.options[0].active = '';
                    this.tafeln.q1.options[1].active = '';
                }
            },
            sendData() {

            }
        }
    }
</script>
