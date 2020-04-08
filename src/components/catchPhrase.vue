<template>
    <div v-if="catchPhrases.phrase">
        <div class="catchPhrase" v-for="item in catchPhrases.phrase" :key="item.id">
            <div :v-if="showCP === item.id">
                <h1 class="text-secondary">{{item.headline}}</h1>
                <hr class="border-2 rounded border-primary "/>
                <h2 class="text-dark">{{item.subHeadline}}</h2>
                <p v-html="item.text"></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "catchPhrase",
        props: ['catchPhrases'],
        methods: {
            initCatchPhrases(showCP, item) {
                console.log('here');
                console.log(item);
                console.log(item.length);
                if (item.length > 1) {
                    console.log('im if');
                    let i = showCP;
                    for (i; i < item.length;) {
                        console.log('im for');
                        console.log(i);
                        setTimeout(function () {
                            console.log('im timeout');
                            showCP = i;
                            i++;
                            console.log(i);
                            if (i === item.length - 1) {
                                console.log('im for if');
                                i = 0
                            }
                        }, 3000);
                        console.log(showCP)
                    }
                }
            }
        },
        created() {
             this.initCatchPhrases(this.showCP, this.catchPhrases.phrase)
        },
        data() {
            return {
                showCP: 0
            }
        }
    }
</script>