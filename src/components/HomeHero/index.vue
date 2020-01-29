<template>
    <section class="hero" v-if="heroShow">

        <!-- Hero Layout One -->
        <div class="hero__one" v-if="heroLayout === 1" :style="{backgroundColor: heroColor}">
            <a-carousel :style="[heroBgImgShow ? {backgroundImage: 'url(' + heroBgImg + ')'} : {background: heroColor}]" :class="{heroBgImg: heroBgImgShow}">
                <div class="hero__one-content" :style="{height: heroHeight + 'px'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-8 col-xl-6">
                                <div class="hero__one-text">
                                    <h1 :style="{color: heroTitleColor}">{{heroTitle}}</h1>
                                    <p :style="{color: heroContentColor}">{{heroContent}}</p>
                                    <a-button type="primary" :style="{color: heroBtnSec, backgroundColor: heroBtnPri, borderColor: heroBtnPri}" :href="heroCTALink">{{heroCTA}}</a-button>
                                </div>
                            </div>
                            <div class="col-4 col-xl-6">
                                <img v-if="heroImageShow === true" :src="heroImage">
                            </div>
                        </div>
                    </div>
                </div>
            </a-carousel>
        </div>

        <!-- Hero Layout Two -->
        <div class="hero__two" v-if="heroLayout === 2" :style="{backgroundColor: heroColor}">
            <a-carousel :style="[heroBgImgShow ? {backgroundImage: 'url(' + heroBgImg + ')'} : {background: heroColor}]" :class="{heroBgImg: heroBgImgShow}">
                <div class="hero__two-content" :style="{height: heroHeight + 'px'}">
                    <div class="container">
                        <div class="hero__two-text">
                            <h1 :style="{color: heroTitleColor}">{{heroTitle}}</h1>
                            <p :style="{color: heroContentColor}">{{heroContent}}</p>
                            <a-button type="primary" :style="{color: heroBtnSec, backgroundColor: heroBtnPri, borderColor: heroBtnPri}" :href="heroCTALink">{{heroCTA}}</a-button>
                        </div>
                    </div>
                </div>
            </a-carousel>
        </div>

        <!-- Hero Layout Three -->
        <div class="hero__three" v-if="heroLayout === 3" :style="{backgroundColor: heroColor}">
            <a-carousel :style="[heroBgImgShow ? {backgroundImage: 'url(' + heroBgImg + ')'} : {background: heroColor}]" :class="{heroBgImg: heroBgImgShow}">
                <div class="hero__three-content" :style="{height: heroHeight + 'px'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-4 col-xl-6">
                                <img v-if="heroImageShow === true" :src="heroImage">
                            </div>
                            <div class="col-4 col-xl-6">
                                <div class="hero__three-text">
                                    <h1 :style="{color: heroTitleColor}">{{heroTitle}}</h1>
                                    <p :style="{color: heroContentColor}">{{heroContent}}</p>
                                    <a-button type="primary" :style="{color: heroBtnSec, backgroundColor: heroBtnPri, borderColor: heroBtnPri}" :href="heroCTALink">{{heroCTA}}</a-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a-carousel>
        </div>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters ([
                'priColor',
                'secColor',
                'heroTitleColor',
                'heroContentColor',
                'heroShow',
                'heroLayout',
                'heroHeight',
                'heroBgImgShow',
                'heroBgImg',
                'heroOverlay',
                'heroColor',
                'heroTitle',
                'heroContent',
                'heroCTA',
                'heroCTALink',
                'heroImage',
                'heroImageShow',
                'heroBtnPri',
                'heroBtnSec'
            ])
        }
    }
</script>

<style lang="scss" scoped>
@import './_index';
</style>