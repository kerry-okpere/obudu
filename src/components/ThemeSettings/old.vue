<template>
  <section class="settings">
    <div class="container">
      <section class="settings__intro">
        <StoreIntro />
      </section>
      <section class="settings__identity">
        <h1>Store Identity</h1>
        <StoreIdentity />
      </section>
      <section class="settings__layout">
        <h1>Store Layout</h1>
        <StoreLayout />
      </section>
      <section class="settings__widgets">
        <h1>Store Widgets</h1>
        <StoreWidgets />
      </section>
      <section class="settings__pages">
        <h1>Additional Pages</h1>
        <StorePages />
      </section>
      <section class="settings__social">
        <h1>Social Media</h1>
        <StoreSocial />
      </section>
      <section class="settings__dashboard">
        <a-button size="large" block  @click.prevent="gotoDashboard()"><a-icon type="dashboard" />Return to Dashboard</a-button>
      </section>
    </div>
  </section>
</template>

<script>
import { eventBus } from '@/eventBus.js';
import { mapGetters, mapMutations } from 'vuex';

import StoreIntro from './components/Intro/index.vue';
import StoreIdentity from './components/Identity/index.vue';
import StoreLayout from './components/Layout/index.vue';
import StoreWidgets from './components/Widgets/index.vue';
import StorePages from './components/Pages/index.vue';
import StoreSocial from './components/Social/index.vue';
import cloudinary from './cloudinary.js';

export default {
  components: {
    StoreIntro,
    StoreIdentity,
    StoreLayout,
    StoreWidgets,
    StorePages,
    StoreSocial
  },
  data: () => ({
    newMenu: false,
    loading: false,
    size: 'default',
    radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
    },
    modalStyle: {
        margin: '0 50px 0 0'
    },
    newHeroTitle: '',
    showThemes: false,
    showHeroSettings: false,
    showMenuSettings: false,
    showProductSettings: false,
    showCollectionSettings: false,
    priColorCP: false,
    secColorCP: false,
    navColorCP: false,
    navBgColorCP: false,
    navLogoTextCP: false,
    productTitleBgCP: false,
    heroColorCP: false,
    heroTitleCP: false,
    heroContentCP: false,
    heroBtnPriCP: false,
    heroBtnSecCP: false,
    collectionBgCP: false,
    collectionBtnCP: false,
    collectionOneBgCP: false,
    collectionTwoBgCP: false,
    collectionThreeBgCP: false,
    productTitleBgCP: false,
    prodTitleMainCP: false,
    prodTitleSubCP: false,
    prodBgCP: false,
  }),
  computed: {
    ...mapGetters([
      'styles',
      'themeName',
      'underConstruction',
      'priColor',
      'secColor',
      'priFont',
      'secFont',
      'navFont',
      'navColor',
      'navBgColor',
      'navShow',
      'navType',
      'navLayout',
      'navLogoTextColor',
      'navLogoTextSize',
      'navMenu',
      'navMenuNew',
      'heroShow',
      'heroLayout',
      'heroHeight',
      'heroColor',
      'heroTitle',
      'heroTitleColor',
      'heroContent',
      'heroContentColor',
      'heroCTA',
      'heroCTALink',
      'heroBgImgShow',
      'heroBgImg',
      'heroImage',
      'heroImageShow',
      'heroBtnPri',
      'heroBtnSec',
      'collectionShow',
      'collectionLayout',
      'collectionBgColor',
      'collectionBtnColor',
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
      'productTitleShow',
      'productTitleLayout',
      'productTitleBgColor',
      'productTitleMain',
      'productTitleMainColor',
      'productTitleSub',
      'productTitleSubColor',
      'productShow',
      'productLayout',
      'productBg',
      'newsletterShow',
      'newsletterLayout',
      'footerShow',
      'footerLayout',
      'subfooterShow',
      'subfooterLayout',
      'storeName'
    ])
  },
  methods: {
    gotoDashboard(){
        console.log("Jooo")
        window.location.href = `https://${window.location.host}/dashboard`;
    },
    //Theme Settings Modal
    changeThemes() {
        this.showThemes = true;
    },
    saveThemes() {
        this.loading = true;
        setTimeout(() => {
            this.showThemes = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    themesCancel(e) {
        this.showThemes = false;
    },
    //Menu Settings Modal
    menuSettings() {
        this.showMenuSettings = true;
    },
    saveMenuSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showMenuSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    menuCancel(e) {
        this.showMenuSettings = false;
    },
    //END

    //Hero Settings Modal
    heroSettings() {
        this.showHeroSettings = true;
    },
    saveHeroSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showHeroSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    heroCancel(e) {
        this.showHeroSettings = false;
    },
    //END
    
    setPriFont(value) {
        this.$store.commit('setPriFont', value);
    },
    setSecFont(value) {
        this.$store.commit('setSecFont', value);
    },
    setNavFont(value) {
        this.$store.commit('setNavFont', value);
    },
    setHeroHeight(value) {
        this.$store.commit('setHeroHeight', value);
    },
    setNavType(value) {
        this.$store.commit('setNavType', value);
    },
    setNavLogoTextSize(value) {
        this.$store.commit('setNavLogoTextSize', value);
    },

    //Display
    setUnderConstruction(checked) {
        this.$store.commit('setUnderConstruction', checked);
        if (checked === true) {
            this.$message.success('Under construction enabled!');
        } else {
            this.$message.success('Under construction disabled!');
        }
    },
    setNavShow(checked) {
        this.$store.commit('setNavShow', checked);
    },
    setHeroShow(checked) {
        this.$store.commit('setHeroShow', checked);
    },
    setHeroBgImgShow(checked) {
        this.$store.commit('setHeroBgImgShow', checked);
    },
    setHeroImageShow(checked) {
        this.$store.commit('setHeroImageShow', checked);
    },
    setCollectionShow(checked) {
        this.$store.commit('setCollectioShow', checked);
    },
    setCollectionOneShow(checked) {
        this.$store.commit('setCollectionOneShow', checked);
    },
    setCollectionTwoShow(checked) {
        this.$store.commit('setCollectionTwoShow', checked);
    },
    setCollectionThreeShow(checked) {
        this.$store.commit('setCollectionThreeShow', checked);
    },
    setProductTitleShow(checked) {
        this.$store.commit('setProductTitleShow', checked);
    },
    setProductShow(checked) {
        this.$store.commit('setProductShow', checked);
    },
    setProductTitleShow(checked) {
        this.$store.commit('setProductTitleShow', checked);
    },
    setNewsletterShow(checked) {
        this.$store.commit('setNewsletterShow', checked);
    },
    setFooterShow(checked) {
        this.$store.commit('setFooterShow', checked);
    },
    setSubfooterShow(checked) {
        this.$store.commit('setSubfooterShow', checked);
    },
    //END

    //Collection Settings Modal
    collectionSettings() {
        this.showCollectionSettings = true;
    },
    saveCollectionSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showCollectionSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    collectionCancel(e) {
        this.showCollectionSettings = false;
    },
    //END

    //Product Settings Modal
    productSettings() {
        this.showProductSettings = true;
    },
    saveProductSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showProductSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    productCancel(e) {
        this.showProductSettings = false;
    },
    //END

    ...mapMutations([
        'setStoreName',
      'setPriColor',
      'setSecColor',
      'setNavColor',
      'setNavBgColor',
      'setNavLayout',
      'setNavLogoTextColor',
      'setNavLogoTextSize',
      'setCollectionLayout',
      'setCollectionBgColor',
      'setCollectionBtnColor',
      'setCollectionOneBg',
      'setCollectionOneTitle',
      'setCollectionOneSubtitle',
      'setCollectionOneBtn',
      'setCollectionOneLink',
      'setCollectionTwoBg',
      'setCollectionTwoTitle',
      'setCollectionTwoSubtitle',
      'setCollectionTwoBtn',
      'setCollectionTwoLink',
      'setCollectionThreeBg',
      'setCollectionThreeTitle',
      'setCollectionThreeSubtitle',
      'setCollectionThreeBtn',
      'setCollectionThreeLink',
      'setProductTitleLayout',
      'setProductTitleBgColor',
      'setProductTitleMain',
      'setProductTitleMainColor',
      'setProductTitleSub',
      'setProductTitleSubColor',
      'setProductLayout',
      'setProductBg',
      'setNewsletterLayout',
      'setFooterLayout',
      'setSubfooterLayout',
      'setHeroLayout',
      'setHeroColor',
      'setHeroTitle',
      'setHeroTitleColor',
      'setHeroContent',
      'setHeroContentColor',
      'setHeroCTA',
      'setHeroCTALink',
      'setHeroBtnPri',
      'setHeroBtnSec'
    ]),
    
    //Notification on Save
    openNotificationWithIcon(type) {
      this.$notification[type]({
      message: 'Success',
      description:
          'You have saved your storefront design successfully.',
      });
    },
    
    //Cloudinary Upload Widgets
    upLogo() {
        eventBus.$emit('upLogo');
    },

    setStoreName(storename){
        this.$store.commit("updateStoreName", storename);
    }
  },
  mounted(){
    // console.log(this.styles)
  },
  watch: {
    styles: {
      deep: true,
      handler(newStyles) {
        this.$store.dispatch("products/saveStoreStyles", {
          payload: newStyles
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './_index';
</style>