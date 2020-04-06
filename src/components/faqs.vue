<template>
    <div class="faqs" v-if="faqs">
        <b-container>
            <h1 class="text-center bb-2 pb-2 mb-2 border-bottom border-primary" v-if="faqs.headline !== ''" v-html="faqs.headline"/>
            <b-row class="faqs-tablist" cols="1" v-if="faqs.faq.length" role="tablist">
                <b-col v-for="item in faqs.faq" v-bind:key="item.id">
                    <b-card no-body class="mb-3 rounded-0">
                        <b-card-header class="border-0 pl-0" header-tag="header" role="tab" v-on:click="changeIcon(item, faqs)" v-b-toggle="'faq-'+item.id">
                            <h5 class="faqs-card-headline mb-0">
                                {{item.header}}
                                <b-icon-chevron-down class="faq-icon" slot="initial" v-if="!item.opened"/>
                                <b-icon-x class="faq-icon" v-else/>
                            </h5>
                        </b-card-header>
                        <b-collapse :id="'faq-'+item.id" accordion="faqs" role="tabpanel">
                            <b-card-body class="pt-0 pl-0 mt-3 text-muted">
                                <b-card-text v-html="item.content"/>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    export default {
        name: "faqs",
        props: ['faqs'],
        methods: {
            changeIcon(item, faqs) {
                if(item.opened === true) {
                    item.opened = false
                } else {
                    for (let i = 0; i < faqs.faq.length; i++) {
                        faqs.faq[i].opened = false
                    }
                    let id = item.id
                    faqs.faq[id].opened = true
                }
            }
        }
    }
</script>