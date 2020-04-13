<template>
    <b-container class="stage" fluid>
        <b-container>
            <b-row>
                <b-col lg class="mr-5 pr-2">
                    <div class="catchPhraseContainer">
                            <catch-phrase :catch-phrases="catchPhrases"/>
                    </div>
                </b-col>
                <b-col lg class="mobileStage row-full">
                    <div class="stage-image-container p-5">
                        <b-img class="stageImageOne" :src="stage.image.one.src" :alt="stage.image.one.alt"/>
                        <b-img class="stageImageTwo" :src="stage.image.two.src" :alt="stage.image.two.alt"/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    import CatchPhrase from './catchPhrase'

    export default {
        name: 'heroStage',
        components: { CatchPhrase },
        props: ['stage', 'catchPhrases']
    }
</script>
