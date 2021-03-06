import store from '../../store/store.js';
import { eventBus } from '@/eventBus.js';

eventBus.$on('themeJupiter', () => {

    // Data
    store.commit('setNavLogo', null);
    store.commit('setHeroBgImg', '');
    store.commit('setHeroContent', 'Only available here');
    store.commit('setHeroTitle', 'Shop the latest Apple products');
    store.commit('setHeroCTA', 'Shop Now');
    store.commit('setHeroCTALink', '#');
    store.commit('setHeroImage', 'https://res.cloudinary.com/mercurie/image/upload/v1580654582/mercuriemart/themes/tech-1.png');
    store.commit('setCollectionOneTitle', 'Smartwatches');
    store.commit('setCollectionOneSubtitle', 'From N28,000');
    store.commit('setCollectionOneImg', 'https://res.cloudinary.com/mercurie/image/upload/v1580655606/mercuriemart/themes/tech-5.png');
    store.commit('setCollectionOneBtn', 'Shop Now');
    store.commit('setCollectionOneLink', '#');
    store.commit('setCollectionTwoTitle', 'Smartphones');
    store.commit('setCollectionTwoSubtitle', 'From N18,000');
    store.commit('setCollectionTwoImg', 'https://res.cloudinary.com/mercurie/image/upload/v1580656138/mercuriemart/themes/kisspng-iphone-8-plus-iphone-6-iphone-7-iphone-x-iphone8-plus-mobile-phone-5a98bcf1bc9fe4.7851909915199592817726.png');
    store.commit('setCollectionTwoBtn', 'Shop Now');
    store.commit('setCollectionTwoLink', '#');
    store.commit('setCollectionThreeTitle', 'Laptops');
    store.commit('setCollectionThreeSubtitle', 'From N164,000');
    store.commit('setCollectionThreeImg', 'https://res.cloudinary.com/mercurie/image/upload/v1580656117/mercuriemart/themes/5a2307ec6c0576.9199562015122452284425.png');
    store.commit('setCollectionThreeBtn', 'Shop Now');
    store.commit('setCollectionThreeLink', '#');
    store.commit('setProductTitleMain', 'Latest Products');
    store.commit('setProductTitleSub', 'Shop our newest devices');
    store.commit('setNotificationTitle', 'Follow us on Instagram @phoneNG');
    store.commit('setNotificationContent', 'and more discounts!');
    store.commit('setNotificationButton', 'Follow');

    // Styles
    store.commit('setThemeName', 'Jupiter');
    store.commit('setUnderConstruction', false);
    store.commit('setThemeColor', '#0360C4');
    store.commit('setPriColor', '#0360C4');
    store.commit('setSecColor', '#0074F5');
    store.commit('setPriFont', 'fontPriUbuntu');
    store.commit('setSecFont', 'fontSecLato');
    store.commit('setNavFont', 'fontPriUbuntu');
    store.commit('setNavShow', true);
    store.commit('setNavLayout', 1);
    store.commit('setNavType', 'navTrans');
    store.commit('setNavColor', '#fff');
    store.commit('setNavBgColor', '#0360C4');
    store.commit('setNavLogoImg', false);
    store.commit('setNavLogoTextColor', '#fff');
    store.commit('setNavLogoTextSize', 20);
    store.commit('setCartShow', false);
    store.commit('setLoginShow', false);
    store.commit('setHeroShow', true);
    store.commit('setHeroLayout', 1);
    store.commit('setHeroHeight', '420');
    store.commit('setHeroBgImgShow', false);
    store.commit('setHeroColor', '#0360C4');
    store.commit('setHeroTitleColor', '#fff');
    store.commit('setHeroContentColor', '#fff');
    store.commit('setHeroImageShow', true);
    store.commit('setHeroBtnPri', '#fff');
    store.commit('setHeroBtnSec', '#0360c4');
    store.commit('setCollectionShow', true);
    store.commit('setCollectionLayout', 1);
    store.commit('setCollectionBgColor', '#fff');
    store.commit('setCollectionBtnColor', '#fff');
    store.commit('setCollectionTextColor', '#fff');
    store.commit('setCollectionOneShow', true);
    store.commit('setCollectionOneBg', '#F45832');
    store.commit('setCollectionTwoShow', true);
    store.commit('setCollectionTwoBg', '#0B998A');
    store.commit('setCollectionThreeShow', true);
    store.commit('setCollectionThreeBg', '#0074F5');
    store.commit('setProductTitleShow', true);
    store.commit('setProductTitleLayout', 1);
    store.commit('setProductTitleBgColor', '#fff');
    store.commit('setProductTitleMainColor', '#000');
    store.commit('setProductTitleSubColor', '#000');
    store.commit('setProductShow', true);
    store.commit('setProductLayout', 1);
    store.commit('setProductBg', '#fff');
    store.commit('setNotificationShow', false);
    store.commit('setNotificationLayout', 1);
    store.commit('setNotificationPri', '#000');
    store.commit('setNotificationSec', '#000');
    store.commit('setNotificationButtonPri', '#000');
    store.commit('setNotificationButtonSec', '#000');
    store.commit('setNewsletterShow', false);
    store.commit('setNewsletterLayout', 1);
    store.commit('setFooterShow', false);
    store.commit('setFooterLayout', 1);
    store.commit('setSubfooterShow', true);
    store.commit('setSubfooterLayout', 1);
    store.commit('setSubfooterBgColor', '#0360C4');
    store.commit('setSubfooterColor', '#fff');
    console.log(`Theme successfully changed to Jupiter`);
});
