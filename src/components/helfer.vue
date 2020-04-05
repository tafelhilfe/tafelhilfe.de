<template>
    <div class="container content">
        <div class="row mb-5">
            <div class="col">
                <div class="pt-5 pr-5 pb-4 pl-5 overlap overlap-2 bg-dark text-white">
                    <h1 class="pb-3 mb-4 text-secondary border-bottom border-secondary bb-2">{{helfer.topContent.catchPhrases.headline}}</h1>
                    <h2>{{helfer.topContent.catchPhrases.subheadline}}</h2>
                    <p v-html="helfer.topContent.catchPhrases.introText"></p>
                </div>
                <div class="overlap-1">
                    <b-img fluid src="https://placeimg.com/640/480/people"/>
                </div>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-3 bg-white">
                col1
            </div>
            <div class="col-3 bg-white">
                col2
            </div>
            <div class="col3 bg-white">
                col3
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "helfer",
        props: ['helfer'],
    }
</script>
