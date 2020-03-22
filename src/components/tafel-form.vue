<template>
    <div class="container">
        <div class="form-group">
            <h1>{{options.headline}}</h1>
            <label>{{options.question}}</label>
            <input class="form-control" type="text" @keyup="getAddress" @keyup.enter="getAddress" v-model="plz"/>
        </div>
        <form @submit.prevent="sendData" v-if="show">
            <div class="row">
                <div class="col">
                    <h2>{{options.data}}</h2>
                    <div class="form-group" v-for="(value, key) in address" :key="key">
                        <label>{{key | capitalize}}</label>
                        <input class="form-control" type="text" :value="value"/>
                    </div>
                </div>
                <div class="col">
                    <h2>{{options.suche}}</h2>
                    <div class="form-groupp form-check" v-for="item in options.help" :key="item.option">
                        <input class="form-check-input" type="checkbox" :value="item.option" v-model="selectedCheckbox"/>
                        <label class="form-check-label">{{item.option}}</label>
                    </div>
                    <div class="form-group">
                        <label>{{options.textarea}}</label>
                        <textarea class="form-control" rows="3" v-model="address.kommentar"></textarea>
                    </div>
                    <h6>{{options.kontakt}}</h6>
                    <div class="form-groupp form-check" v-for="item in options.contact" :key="item.option">
                        <input class="form-check-input" type="radio" :value="item.option" v-model="address.kontaktart" :key="item.option"/>
                        <label class="form-check-label">{{item.option}}</label>
                    </div>
                    <p class="text-info">{{options.info}}</p>
                    <button type="submit" class="btn btn-primary">{{options.submit}}</button>
                </div>
            </div>
        </form>
        <div v-else-if="send">
            <div v-html="options.success"></div>
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
                options: resources,
                address: {},
                selectedCheckbox: []
            }
        },
        methods: {
            getAddress() {
                if (this.plz.length === 5) {
                    this.address = {"plz": this.plz};
                    for (let i=0; i < this.data.length; i++) {
                        if (this.data[i]['plz'] === this.plz) {
                            this.address = this.data[i]
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
                .then((result) => {
                    console.log(result.data)
                })
                .catch((error) => {
                    console.log(error)
                });
                this.show = false;
                this.send = true;
                console.log(this.address)
            }
        }
    }
</script>
