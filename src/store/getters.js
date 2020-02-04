import state from "./state";

const getters = {
    data: state => state.data,
    storeName: state => state.data.storeName,
    navLogo: state => state.data.navLogo,
    heroBgImg: state => state.data.heroBgImg,
    heroTitle: state => state.data.heroTitle,
    heroContent: state => state.data.heroContent,
    heroCTA: state => state.data.heroCTA,
    heroCTALink: state => state.data.heroCTALink,
    heroImage: state => state.data.heroImage,
    collectionOneTitle: state => state.data.collectionOneTitle,
    collectionOneSubtitle: state => state.data.collectionOneSubtitle,
    collectionOneImg: state => state.data.collectionOneImg,
    collectionOneBtn: state => state.data.collectionOneBtn,
    collectionOneLink: state => state.data.collectionOneLink,
    collectionTwoTitle: state => state.data.collectionTwoTitle,
    collectionTwoSubtitle: state => state.data.collectionTwoSubtitle,
    collectionTwoImg: state => state.data.collectionTwoImg,
    collectionTwoBtn: state => state.data.collectionTwoBtn,
    collectionTwoLink: state => state.data.collectionTwoLink,
    collectionThreeTitle: state => state.data.collectionThreeTitle,
    collectionThreeSubtitle: state => state.data.collectionThreeSubtitle,
    collectionThreeImg: state => state.data.collectionThreeImg,
    collectionThreeBtn: state => state.data.collectionThreeBtn,
    collectionThreeLink: state => state.data.collectionThreeLink,
    productTitleMain: state => state.data.productTitleMain,
    productTitleSub: state => state.data.productTitleSub,
    notificationTitle: state => state.data.notificationTitle,
    notificationContent: state => state.data.notificationContent,
    notificationButton: state => state.data.notificationButton,

    styles: state => state.styles,
        themeName: state => state.styles.themeName,
        themeColor: state => state.styles.themeColor,
        priColor: state => state.styles.priColor,
        secColor: state => state.styles.secColor,
        priFont: state => state.styles.priFont,
        secFont: state => state.styles.secFont,
        navFont: state => state.styles.navFont,
        navShow: state => state.styles.navShow,
        navLayout: state => state.styles.navLayout,
        navType: state => state.styles.navType,
        navColor: state => state.styles.navColor,
        navBgColor: state => state.styles.navBgColor,
        navLogoImg: state => state.styles.navLogoImg,
        navLogoTextColor: state => state.styles.navLogoTextColor,
        navLogoTextSize: state => state.styles.navLogoTextSize,
        cartShow: state => state.styles.cartShow,
        loginShow: state => state.styles.loginShow,
        heroShow: state => state.styles.heroShow,
        heroLayout: state => state.styles.heroLayout,
        heroHeight: state => state.styles.heroHeight,
        heroBgImgShow: state => state.styles.heroBgImgShow,
        heroColor: state => state.styles.heroColor,
        heroTitleColor: state => state.styles.heroTitleColor,
        heroContentColor: state => state.styles.heroContentColor,
        heroImageShow: state => state.styles.heroImageShow,
        heroBtnPri: state => state.styles.heroBtnPri,
        heroBtnSec: state => state.styles.heroBtnSec,
        collectionShow: state => state.styles.collectionShow,
        collectionLayout: state => state.styles.collectionLayout,
        collectionBgColor: state => state.styles.collectionBgColor,
        collectionBtnColor: state => state.styles.collectionBtnColor,
        collectionTextColor: state => state.styles.collectionTextColor,
        collectionOneShow: state => state.styles.collectionOneShow,
        collectionOneBg: state => state.styles.collectionOneBg,
        collectionTwoShow: state => state.styles.collectionTwoShow,
        collectionTwoBg: state => state.styles.collectionTwoBg,
        collectionThreeShow: state => state.styles.collectionThreeShow,
        collectionThreeBg: state => state.styles.collectionThreeBg,
        productTitleShow: state => state.styles.productTitleShow,
        productTitleLayout: state => state.styles.productTitleLayout,
        productTitleBgColor: state => state.styles.productTitleBgColor,
        productTitleMainColor: state => state.styles.productTitleMainColor,
        productTitleSubColor: state => state.styles.productTitleSubColor,
        productShow: state => state.styles.productShow,
        productLayout: state => state.styles.productLayout,
        productBg: state => state.styles.productBg,
        notificationShow: state => state.styles.notificationShow,
        notificationLayout: state => state.styles.notificationLayout,
        notificationPri: state => state.styles.notificationPri,
        notificationSec: state => state.styles.notificationSec,
        notificationButtonPri: state => state.styles.notificationButtonPri,
        notificationButtonSec: state => state.styles.notificationButtonSec,
        newsletterShow: state => state.styles.newsletterShow,
        newsletterLayout: state => state.styles.newsletterLayout,
        footerShow: state => state.styles.footerShow,
        footerLayout: state => state.styles.footerLayout,
        subfooterShow: state => state.styles.subfooterShow,
        subfooterLayout: state => state.styles.subfooterLayout,
        subfooterBgColor: state => state.styles.subfooterBgColor,
        subfooterColor: state => state.styles.subfooterColor,
        getCartQuantity: state => {
            let storeState = JSON.parse(window.localStorage.getItem(process.env.VUE_APP_STORENAME));
            if (storeState.cart !== undefined) {
                return state.cart.reduce((totalCount, item) => totalCount += item.quantity, 0);
            } else {
                return 0;
            }
        },
        getCartItems: state => state.cart,
        getCartTotal: (state) => {
            let cartItem = state.cart;
            let tempPrice = 0;
            let multiPrice = 0;
            for (let i = 0; i < cartItem.length; i++) {
                if (cartItem[i].quantity == 1) {
                    tempPrice += cartItem[i].price;
                } else {
                    multiPrice = cartItem[i].quantity * cartItem[i].price;
                    tempPrice += multiPrice;
                }
            }
            return tempPrice;
        }
};

export default getters;