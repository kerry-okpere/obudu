const mutations = {
  updateStoreName(state, storeName) {
    console.log("Updatinf stor name")
    state.data.storeName = storeName;
  },
  updateStyles(state, stylesObj) {
    state.styles = stylesObj;
  },

  //Data
  setStoreName(state, storeName) {
    state.data.storeName = storeName;
  },
  setNavLogo(state, navLogo) {
    state.data.navLogo = navLogo;
  },
  setHeroBgImg(state, heroBgImg) {
    state.data.heroBgImg = heroBgImg;
  },
  setHeroTitle(state, heroTitle) {
    state.data.heroTitle = heroTitle;
  },
  setHeroContent(state, heroContent) {
    state.data.heroContent = heroContent;
  },
  setHeroCTA(state, heroCTA) {
    state.data.heroCTA = heroCTA;
  },
  setHeroCTALink(state, heroCTALink) {
    state.data.heroCTALink = heroCTALink;
  },
  setHeroImage(state, heroImage) {
    state.data.heroImage = heroImage;
  },
  setCollectionOneTitle(state, collectionOneTitle) {
    state.data.collectionOneTitle = collectionOneTitle;
  },
  setCollectionOneSubtitle(state, collectionOneSubtitle) {
    state.data.collectionOneSubtitle = collectionOneSubtitle;
  },
  setCollectionOneImg(state, collectionOneImg) {
    state.data.collectionOneImg = collectionOneImg;
  },
  setCollectionOneBtn(state, collectionOneBtn) {
    state.data.collectionOneBtn = collectionOneBtn;
  },
  setCollectionOneLink(state, collectionOneLink) {
    state.data.collectionOneLink = collectionOneLink;
  },
  setCollectionTwoTitle(state, collectionTwoTitle) {
    state.data.collectionTwoTitle = collectionTwoTitle;
  },
  setCollectionTwoSubtitle(state, collectionTwoSubtitle) {
    state.data.collectionTwoSubtitle = collectionTwoSubtitle;
  },
  setCollectionTwoImg(state, collectionTwoImg) {
    state.data.collectionTwoImg = collectionTwoImg;
  },
  setCollectionTwoBtn(state, collectionTwoBtn) {
    state.data.collectionTwoBtn = collectionTwoBtn;
  },
  setCollectionTwoLink(state, collectionTwoLink) {
    state.data.collectionTwoLink = collectionTwoLink;
  },
  setCollectionThreeTitle(state, collectionThreeTitle) {
    state.data.collectionThreeTitle = collectionThreeTitle;
  },
  setCollectionThreeSubtitle(state, collectionThreeSubtitle) {
    state.data.collectionThreeSubtitle = collectionThreeSubtitle;
  },
  setCollectionThreeImg(state, collectionThreeImg) {
    state.data.collectionThreeImg = collectionThreeImg;
  },
  setCollectionThreeBtn(state, collectionThreeBtn) {
    state.data.collectionThreeBtn = collectionThreeBtn;
  },
  setCollectionThreeLink(state, collectionThreeLink) {
    state.data.collectionThreeLink = collectionThreeLink;
  },
  setProductTitleSub(state, productTitleSub) {
    state.data.productTitleSub = productTitleSub;
  },
  setProductTitleMain(state, productTitleMain) {
    state.data.productTitleMain = productTitleMain;
  },
  setNotificationTitle(state, notificationTitle) {
    state.data.notificationTitle = notificationTitle;
  },
  setNotificationContent(state, notificationContent) {
    state.data.notificationContent = notificationContent;
  },
  setNotificationButton(state, notificationButton) {
    state.data.notificationButton = notificationButton;
  },

  //Styles
  setThemeName(state, themeName) {
    state.styles.themeName = themeName;
  },
  setThemeColor(state, color) {
    state.styles.themeColor = color;
  },
  setPriColor(state, color) {
    state.styles.priColor = color;
  },
  setSecColor(state, color) {
    state.styles.secColor = color;
  },
  setPriFont(state, priFont) {
    state.styles.priFont = priFont;
  },
  setSecFont(state, secFont) {
    state.styles.secFont = secFont;
  },
  setNavFont(state, navFont) {
    state.styles.navFont = navFont;
  },
  setNavShow(state, navShow) {
    state.styles.navShow = navShow;
  },
  setNavType(state, navType) {
    state.styles.navType = navType;
  },
  setNavColor(state, color) {
    state.styles.navColor = color;
  },
  setNavLayout(state, navLayout) {
    state.styles.navLayout = navLayout;
  },
  setNavLogoImg(state, navLogoImg) {
    state.styles.navLogoImg = navLogoImg;
  },
  setNavLogoTextColor(state, color) {
    state.styles.navLogoTextColor = color;
  },
  setNavLogoTextSize(state, navLogoTextSize) {
    state.styles.navLogoTextSize = navLogoTextSize;
  },
  setCartShow(state, cartShow) {
    state.styles.cartShow = cartShow;
  },
  setLoginShow(state, loginShow) {
    state.styles.loginShow = loginShow;
  },
  //Hero
  setHeroShow(state, heroShow) {
    state.styles.heroShow = heroShow;
  },
  setHeroLayout(state, heroLayout) {
    state.styles.heroLayout = heroLayout;
  },
  setHeroHeight(state, heroHeight) {
    state.styles.heroHeight = heroHeight;
  },
  setHeroBgImgShow(state, heroBgImgShow) {
    state.styles.heroBgImgShow = heroBgImgShow;
  },
  setHeroColor(state, color) {
    state.styles.heroColor = color;
  },
  setHeroTitleColor(state, color) {
    state.styles.heroTitleColor = color;
  },
  setHeroContentColor(state, color) {
    state.styles.heroContentColor = color;
  },
  setHeroImageShow(state, heroImageShow) {
    state.styles.heroImageShow = heroImageShow;
  },
  setHeroBtnPri(state, color) {
    state.styles.heroBtnPri = color;
  },
  setHeroBtnSec(state, color) {
    state.styles.heroBtnSec = color;
  },
  //Collection
  setCollectionShow(state, collectionShow) {
    state.styles.collectionShow = collectionShow;
  },
  setCollectionLayout(state, collectionLayout) {
    state.styles.collectionLayout = collectionLayout;
  },
  setCollectionBgColor(state, color) {
    state.styles.collectionBgColor = color
  },
  setCollectionBtnColor(state, color) {
    state.styles.collectionBtnColor = color;
  },
  setCollectionTextColor(state, color) {
    state.styles.collectionTextColor = color;
  },
  setCollectionOneShow(state, collectionOneShow) {
    state.styles.collectionOneShow = collectionOneShow;
  },
  setCollectionOneBg(state, color) {
    state.styles.collectionOneBg = color;
  },
  setCollectionTwoShow(state, collectionTwoShow) {
    state.styles.collectionTwoShow = collectionTwoShow;
  },
  setCollectionTwoBg(state, color) {
    state.styles.collectionTwoBg = color;
  },
  setCollectionThreeShow(state, collectionThreeShow) {
    state.styles.collectionThreeShow = collectionThreeShow;
  },
  setCollectionThreeBg(state, color) {
    state.styles.collectionThreeBg = color;
  },
  //Products
  setProductTitleShow(state, productTitleShow) {
    state.styles.productTitleShow = productTitleShow;
  },
  setProductTitleLayout(state, productTitleLayout) {
    state.styles.productTitleLayout = productTitleLayout;
  },
  setProductTitleBgColor(state, color) {
    state.styles.productTitleBgColor = color;
  },
  setProductTitleMainColor(state, color) {
    state.styles.productTitleMainColor = color;
  },
  setProductTitleSubColor(state, color) {
    state.styles.productTitleSubColor = color;
  },
  setProductShow(state, productShow) {
    state.styles.productShow = productShow;
  },
  setProductLayout(state, productLayout) {
    state.styles.productLayout = productLayout;
  },
  setProductBg(state, color) {
    state.styles.productBg = color;
  },
  //Notification
  setNotificationShow(state, notificationShow) {
    state.styles.notificationShow = notificationShow;
  },
  setNotificationLayout(state, notificationLayout) {
    state.styles.notificationLayout = notificationLayout;
  },
  setNotificationPri(state, color) {
    state.styles.notificationPri = color;
  },
  setNotificationSec(state, color) {
    state.styles.notificationSec = color;
  },
  setNotificationButtonPri(state, color) {
    state.styles.notificationButtonPri = color;
  },
  setNotificationButtonSec(state, color) {
    state.styles.notificationButtonSec = color;
  },
  //Newsletter
  setNewsletterShow(state, newsletterShow) {
    state.styles.newsletterShow = newsletterShow;
  },
  setNewsletterLayout(state, newsletterLayout) {
    state.styles.newsletterLayout = newsletterLayout;
  },
  //Footer
  setFooterShow(state, footerShow) {
    state.styles.footerShow = footerShow;
  },
  setFooterLayout(state, footerLayout) {
    state.styles.footerLayout = footerLayout;
  },
  setSubfooterShow(state, subfooterShow) {
    state.styles.subfooterShow = subfooterShow;
  },
  setSubfooterLayout(state, subfooterLayout) {
    state.styles.subfooterLayout = subfooterLayout;
  },
  setSubfooterBgColor(state, subfooterBgColor) {
    state.styles.subfooterBgColor = subfooterBgColor;
  },
  setSubfooterColor(state, subfooterColor) {
    state.styles.subfooterColor = subfooterColor;
  }
};

export default mutations;
