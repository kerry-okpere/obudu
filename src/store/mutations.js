const mutations = {
    updateStore(state, store) {
        state.store = store
    },
    updateStyles(state, stylesObject){
      state.styles = stylesObject
    },
    setStoreName(state, storeName) {
        state.data.storeName = storeName
    },
    //Fonts
    setThemeColor(state, color) {
        state.styles.themeColor = color
    },
    setPriColor(state, color) {
        state.styles.priColor = color
    },
    setSecColor(state, color) {
        state.styles.secColor = color
    },
    setPriFont(state, priFont) {
        state.styles.priFont = priFont
    },
    setSecFont(state, secFont) {
        state.styles.secFont = secFont
    },
    setNavShow(state, navShow) {
        state.styles.navShow = navShow
    },
    setNavType(state, navType) {
        state.styles.navType = navType
    },
    setNavLayout(state, navLayout) {
        state.styles.navLayout = navLayout
    },
    setNavLogoImg(state, navLogoImg) {
        state.styles.navLogoImg = navLogoImg
    },
    setNavLogoTextColor(state, color) {
        state.styles.navLogoTextColor = color
    },
    setNavLogoTextSize(state, navLogoTextSize) {
        state.styles.navLogoTextSize = navLogoTextSize
    },
    setNavLogo(state, navLogo) {
        state.data.navLogo = navLogo
    },
    //Hero
    setHeroShow(state, heroShow) {
        state.styles.heroShow = heroShow
    },
    setHeroLayout(state, heroLayout) {
        state.styles.heroLayout = heroLayout
    },
    setHeroHeight(state, heroHeight) {
        state.styles.heroHeight = heroHeight
    },
    setHeroBgImgShow(state, heroBgImgShow) {
        state.styles.heroBgImgShow = heroBgImgShow
    },
    setHeroBgImg(state, heroBgImg) {
        state.data.heroBgImg = heroBgImg
    },
    setHeroColor(state, color) {
        state.styles.heroColor = color
    },
    setHeroTitle(state, heroTitle) {
        state.data.heroTitle = heroTitle
    },
    setHeroTitleColor(state, color) {
        state.styles.heroTitleColor = color
    },
    setHeroContent(state, heroContent) {
        state.data.heroContent = heroContent
    },
    setHeroContentColor(state, color) {
        state.styles.heroContentColor = color
    },
    setHeroCTA(state, heroCTA) {
        state.data.heroCTA = heroCTA
    },
    setHeroCTALink(state, heroCTALink) {
        state.data.heroCTALink = heroCTALink
    }, 
    setHeroImage(state, heroImage) {
        state.data.heroImage = heroImage
    },
    setHeroImageShow(state, heroImageShow) {
        state.styles.heroImageShow = heroImageShow
    },
    setHeroBtnPri(state, color) {
        state.styles.heroBtnPri = color
    },
    setHeroBtnSec(state, color) {
        state.styles.heroBtnSec = color
    },
    //Collection
    setCollectionShow(state, collectionShow) {
        state.styles.collectionShow = collectionShow
    },
    setCollectionLayout(state, collectionLayout) {
        state.styles.collectionLayout = collectionLayout
    },
    setCollectionBgColor(state, color) {
        state.styles.collectionBgColor = color
    },
    setCollectionBtnColor(state, color) {
        state.styles.collectionBtnColor = color
    },
    setCollectionOneShow(state, collectionOneShow) {
        state.styles.collectionOneShow = collectionOneShow
    },
    setCollectionOneBg(state, color) {
        state.styles.collectionOneBg = color
    },
    setCollectionOneTitle(state, collectionOneTitle) {
        state.data.collectionOneTitle = collectionOneTitle
    },
    setCollectionOneSubtitle(state, collectionOneSubtitle) {
        state.data.collectionOneSubtitle = collectionOneSubtitle
    },
    setCollectionOneImg(state, collectionOneImg) {
        state.data.collectionOneImg = collectionOneImg
    },
    setCollectionOneBtn(state, collectionOneBtn) {
        state.data.collectionOneBtn = collectionOneBtn
    },
    setCollectionOneLink(state, collectionOneLink) {
        state.data.collectionOneLink = collectionOneLink
    },
    setCollectionTwoShow(state, collectionTwoShow) {
        state.styles.collectionTwoShow = collectionTwoShow
    },
    setCollectionTwoBg(state, color) {
        state.styles.collectionTwoBg = color
    },
    setCollectionTwoTitle(state, collectionTwoTitle) {
        state.data.collectionTwoTitle = collectionTwoTitle
    },
    setCollectionTwoSubtitle(state, collectionTwoSubtitle) {
        state.data.collectionTwoSubtitle = collectionTwoSubtitle
    },
    setCollectionTwoImg(state, collectionTwoImg) {
        state.data.collectionTwoImg = collectionTwoImg
    },
    setCollectionTwoBtn(state, collectionTwoBtn) {
        state.data.collectionTwoBtn = collectionTwoBtn
    },
    setCollectionTwoLink(state, collectionTwoLink) {
        state.data.collectionTwoLink = collectionTwoLink
    },
    setCollectionThreeShow(state, collectionThreeShow) {
        state.styles.collectionThreeShow = collectionThreeShow
    },
    setCollectionThreeBg(state, color) {
        state.styles.collectionThreeBg = color
    },
    setCollectionThreeTitle(state, collectionThreeTitle) {
        state.data.collectionThreeTitle = collectionThreeTitle
    },
    setCollectionThreeSubtitle(state, collectionThreeSubtitle) {
        state.data.collectionThreeSubtitle = collectionThreeSubtitle
    },
    setCollectionThreeImg(state, collectionThreeImg) {
        state.data.collectionThreeImg = collectionThreeImg
    },
    setCollectionThreeBtn(state, collectionThreeBtn) {
        state.data.collectionThreeBtn = collectionThreeBtn
    },
    setCollectionThreeLink(state, collectionThreeLink) {
        state.data.collectionThreeLink = collectionThreeLink
    },
    //Products
    setProductTitleShow(state, productTitleShow) {
        state.styles.productTitleShow = productTitleShow
    },
    setProductTitleLayout(state, productTitleLayout) {
        state.styles.productTitleLayout = productTitleLayout
    },
    setProductTitleBgColor(state, color) {
        state.styles.productTitleBgColor = color
    },
    setProductTitleMain(state, productTitleMain) {
        state.data.productTitleMain = productTitleMain
    },
    setProductTitleMainColor(state, color) {
        state.styles.productTitleMainColor = color
    },
    setProductTitleSub(state, productTitleSub) {
        state.data.productTitleSub = productTitleSub
    },
    setProductTitleSubColor(state, color) {
        state.styles.productTitleSubColor = color
    },
    setProductShow(state, productShow) {
        state.styles.productShow = productShow
    },
    setProductLayout(state, productLayout) {
        state.styles.productLayout = productLayout
    },
    setProductBg(state, color) {
        state.styles.productBg = color
    },
    //Notification
    setNotificationShow(state, notificationShow) {
        state.styles.notificationShow = notificationShow
    },
    setNotificationLayout(state, notificationLayout) {
        state.styles.notificationLayout = notificationLayout
    },
    setNotificationPri(state, color) {
        state.styles.notificationPri = color
    },
    setNotificationSec(state, color) {
        state.styles.notificationSec = color
    },
    setNotificationTitle(state, notificationTitle) {
        state.data.notificationTitle = notificationTitle
    },
    setNotificationContent(state, notificationContent) {
        state.data.notificationContent = notificationContent
    },
    setNotificationButton(state, notificationButton) {
        state.data.notificationButton = notificationButton
    },
    setNotificationButtonPri(state, color) {
        state.styles.notificationButtonPri = color
    },
    setNotificationButtonSec(state, color) {
        state.styles.notificationButtonSec = color
    },
    //Newsletter
    setNewsletterShow(state, newsletterShow) {
        state.styles.newsletterShow = newsletterShow
    },
    setNewsletterLayout(state, newsletterLayout) {
        state.styles.newsletterLayout = newsletterLayout
    },
    //Footer
    setFooterShow(state, footerShow) {
        state.styles.footerShow = footerShow
    },
    setFooterLayout(state, footerLayout) {
        state.styles.footerLayout = footerLayout
    },
    setSubfooterShow(state, subfooterShow) {
        state.styles.subfooterShow = subfooterShow
    },
    setSubfooterLayout(state, subfooterLayout) {
        state.styles.subfooterLayout = subfooterLayout
    }

}

export default mutations;