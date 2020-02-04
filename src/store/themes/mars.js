import store from '../../store/store.js';
import { eventBus } from '@/eventBus.js';

eventBus.$on('themeMars', () => {

    // Data
    store.commit('setNavLogo', null);
    store.commit('setHeroBgImg', '');
    store.commit('setHeroContent', '');
    store.commit('setHeroTitle', '');
    store.commit('setHeroCTA', '');
    store.commit('setHeroCTALink', '');
    store.commit('setHeroImage', '');
    store.commit('setCollectionOneTitle', '');
    store.commit('setCollectionOneSubtitle', '');
    store.commit('setCollectionOneImg', '');
    store.commit('setCollectionOneBtn', '');
    store.commit('setCollectionOneLink', '');
    store.commit('setCollectionTwoTitle', '');
    store.commit('setCollectionTwoSubtitle', '');
    store.commit('setCollectionTwoImg', '');
    store.commit('setCollectionTwoBtn', '');
    store.commit('setCollectionTwoLink', '');
    store.commit('setCollectionThreeTitle', '');
    store.commit('setCollectionThreeSubtitle', '');
    store.commit('setCollectionThreeImg', '');
    store.commit('setCollectionThreeBtn', '');
    store.commit('setCollectionThreeLink', '');
    store.commit('setProductTitleMain', '');
    store.commit('setProductTitleSub', '');
    store.commit('setNotificationTitle', '');
    store.commit('setNotificationContent', '');
    store.commit('setNotificationButton', '');

    //Styles
    store.commit('setThemeName', 'Mars');
    store.commit('setThemeColor', '');
    store.commit('setPriColor', '');
    store.commit('setSecColor', '');
    store.commit('setPriFont', 'fontPriPoppins');
    store.commit('setSecFont', 'fontSecLato');
    store.commit('setNavFont', 'fontPriPoppins');
    store.commit('setNavShow', true);
    store.commit('setNavLayout', 1);
    store.commit('setNavType', 'navFixed');
    store.commit('setNavLogoImg', false);
    store.commit('setNavLogoTextColor', '');
    store.commit('setNavLogoTextSize', '');
    store.commit('setCartShow', false);
    store.commit('setLoginShow', false);
    store.commit('setHeroShow', true);
    store.commit('setHeroLayout', 1);
    store.commit('setHeroHeight', '500');
    store.commit('setHeroBgImgShow', true);
    store.commit('setHeroColor', '');
    store.commit('setHeroTitleColor', '');
    store.commit('setHeroContentColor', '');
    store.commit('setHeroImageShow', '');
    store.commit('setHeroBtnPri', '');
    store.commit('setHeroBtnSec', '');
    store.commit('setCollectionShow', '');
    store.commit('setCollectionLayout', '');
    store.commit('setCollectionBgColor', '');
    store.commit('setCollectionBtnColor', '');
    store.commit('setCollectionOneShow', '');
    store.commit('setCollectionOneBg', '');
    store.commit('setCollectionTwoShow', '');
    store.commit('setCollectionTwoBg', '');
    store.commit('setCollectionThreeShow', '');
    store.commit('setCollectionThreeBg', '');
    store.commit('setProductTitleShow', '');
    store.commit('setProductTitleLayout', '');
    store.commit('setProductTitleBgColor', '');
    store.commit('setProductTitleMainColor', '');
    store.commit('setProductTitleSubColor', '');
    store.commit('setProductShow', '');
    store.commit('setProductLayout', '');
    store.commit('setProductBg', '');
    store.commit('setNotificationShow', '');
    store.commit('setNotificationLayout', '');
    store.commit('setNotificationPri', '');
    store.commit('setNotificationSec', '');
    store.commit('setNotificationButtonPri', '');
    store.commit('setNotificationButtonSec', '');
    store.commit('setNewsletterShow', '');
    store.commit('setNewsletterLayout', '');
    store.commit('setFooterShow', '');
    store.commit('setFooterLayout', '');
    store.commit('setSubfooterShow', '');
    store.commit('setSubfooterLayout', '');
    console.log(`Theme successfully changed to Mars`);
});
