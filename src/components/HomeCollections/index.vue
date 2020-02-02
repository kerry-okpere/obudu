<template>
    <section class="collection" v-if="collectionShow" :style="{backgroundColor: collectionBgColor}">
        
        <!-- Collection Layout One -->
        <div class="collection__one" v-if="collectionLayout === 1">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-4">
                        <div class="collection__one-single" :style="{backgroundColor: collectionOneBg}" v-if="collectionOneShow">
                            <div class="wrapper">
                                <div class="content">
                                    <h3 :style="{color: collectionTextColor}">{{collectionOneTitle}}</h3>
                                    <p>{{collectionOneSubtitle}}</p>
                                    <a-button ghost :style="{color: collectionBtnColor, borderColor: collectionBtnColor}" :href="collectionOneLink">{{collectionOneBtn}}</a-button>
                                </div>
                                <div class="image">
                                    <img :src="collectionOneImg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="collection__one-single" :style="{backgroundColor: collectionTwoBg}" v-if="collectionTwoShow">
                            <div class="wrapper">
                                <div class="content">
                                    <h3 :style="{color: collectionTextColor}">{{collectionTwoTitle}}</h3>
                                    <p>{{collectionTwoSubtitle}}</p>
                                    <a-button ghost :style="{color: collectionBtnColor, borderColor: collectionBtnColor}" :href="collectionTwoLink">{{collectionTwoBtn}}</a-button>
                                </div>
                                <div class="image">
                                    <img :src="collectionTwoImg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="collection__one-single" :style="{backgroundColor: collectionThreeBg}" v-if="collectionThreeShow">
                            <div class="wrapper">
                                <div class="content">
                                    <h3 :style="{color: collectionTextColor}">{{collectionThreeTitle}}</h3>
                                    <p>{{collectionThreeSubtitle}}</p>
                                    <a-button ghost :style="{color: collectionBtnColor, borderColor: collectionBtnColor}" :href="collectionThreeLink">{{collectionThreeBtn}}</a-button>
                                </div>
                                <div class="image">
                                    <img :src="collectionThreeImg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Collection Layout Two -->
        <div class="collection__two" v-if="collectionLayout === 2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="collection__one-single" :style="{backgroundImage: 'url(' + collectionOneImg + ')', backgroundColor: collectionOneBg}" v-if="collectionOneShow">
                            <div class="wrapper">
                                <div class="content">
                                    <h3 :style="{color: collectionTextColor}">{{collectionOneTitle}}</h3>
                                    <p>{{collectionOneSubtitle}}</p>
                                    <a-button ghost :style="{color: collectionBtnColor, borderColor: collectionBtnColor}" :href="collectionOneLink">{{collectionOneBtn}}</a-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

    export default {
        data: () => ({

        }),
        computed: {
            ...mapGetters ([
                'collectionShow',
                'collectionLayout',
                'collectionBgColor',
                'collectionBtnColor',
                'collectionTextColor',
                'collectionOneShow',
                'collectionOneBg',
                'collectionOneTitle',
                'collectionOneSubtitle',
                'collectionOneImg',
                'collectionOneBtn',
                'collectionOneLink',
                'collectionTwoShow',
                'collectionTwoBg',
                'collectionTwoImg',
                'collectionTwoTitle',
                'collectionTwoSubtitle',
                'collectionTwoBtn',
                'collectionTwoLink',
                'collectionThreeShow',
                'collectionThreeBg',
                'collectionThreeImg',
                'collectionThreeTitle',
                'collectionThreeSubtitle',
                'collectionThreeBtn',
                'collectionThreeLink',
            ])
        }
    }
</script>

<style lang="scss" scoped>
@import './_index.scss';
</style>