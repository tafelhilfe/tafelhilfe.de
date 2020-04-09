// Simple component to set a fixed aspect ratio using padding

<template>
    <div class="aspect-ratio" :style="componentStyle">
        <div class="aspect-ratio__inner" :style="innerStyle">
            <div class="aspect-ratio__content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AspectRatio",

        props: {
            ar: {
                type: String,
                default: "1:1",
                validator: (v) => {
                    const [w, h] = v.split(":").map(v => parseInt(v))
                    return !Number.isNaN(w) && !Number.isNaN(h)
                }
            },
            width: String
        },
        data() {
            return {
                w: null,
                h: null
            }
        },
        methods: {
            updateRatio() {
                const [w, h] = this.ar.split(":").map(v => parseInt(v))
                this.w = w
                this.h = h
            }
        },
        computed: {
            componentStyle() {
                return this.width ? { width: this.width } : {}
            },

            innerStyle() {
               return {
                   paddingTop: (this.h / this.w) * 100 + "%"
               }
            }
        },
        updated() {
            this.updateRatio()
        },
        created() {
            this.updateRatio()
        }
    }
</script>

<style scoped>
    .aspect-ratio__inner {
        position: relative;
    }
    .aspect-ratio__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>