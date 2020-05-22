<template>
    <b-container class="stage mt-n16" fluid>
        <b-container>
            <b-row>
                <b-col lg class="mr-5 pr-2">
                    <div class="catchPhraseContainer">
                            <catch-phrase :catch-phrases="catchPhrases"/>
                    </div>
                </b-col>
                <b-col lg class="mobileStage row-full">
                    <div class="stage-image-container p-5">
                        <img class="stageImageOne" src="/home_tafeln.jpg" :alt="stage.image.one.alt"/>
                        <img class="stageImageTwo" src="/home_volunteer.jpg" :alt="stage.image.two.alt"/>
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
