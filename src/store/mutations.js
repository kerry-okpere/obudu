const mutations = {
    updateStore(state, store) {
        state.store = store
    },
    updateStyles(state, stylesObject){
      state.styles = stylesObject
    },
    setStoreName(state, storeName) {
        state.styles.storeName = storeName
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
        state.styles.navLogo = navLogo
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
        state.styles.heroBgImg = heroBgImg
    },
    setHeroColor(state, color) {
        state.styles.heroColor = color
    },
    setHeroTitle(state, heroTitle) {
        state.styles.heroTitle = heroTitle
    },
    setHeroTitleColor(state, color) {
        state.styles.heroTitleColor = color
    },
    setHeroContent(state, heroContent) {
        state.styles.heroContent = heroContent
    },
    setHeroContentColor(state, color) {
        state.styles.heroContentColor = color
    },
    setHeroCTA(state, heroCTA) {
        state.styles.heroCTA = heroCTA
    },
    setHeroCTALink(state, heroCTALink) {
        state.styles.heroCTALink = heroCTALink
    }, 
    setHeroImage(state, heroImage) {
        state.styles.heroImage = heroImage
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
        state.styles.collectionOneTitle = collectionOneTitle
    },
    setCollectionOneSubtitle(state, collectionOneSubtitle) {
        state.styles.collectionOneSubtitle = collectionOneSubtitle
    },
    setCollectionOneImg(state, collectionOneImg) {
        state.styles.collectionOneImg = collectionOneImg
    },
    setCollectionOneBtn(state, collectionOneBtn) {
        state.styles.collectionOneBtn = collectionOneBtn
    },
    setCollectionOneLink(state, collectionOneLink) {
        state.styles.collectionOneLink = collectionOneLink
    },
    setCollectionTwoShow(state, collectionTwoShow) {
        state.styles.collectionTwoShow = collectionTwoShow
    },
    setCollectionTwoBg(state, color) {
        state.styles.collectionTwoBg = color
    },
    setCollectionTwoTitle(state, collectionTwoTitle) {
        state.styles.collectionTwoTitle = collectionTwoTitle
    },
    setCollectionTwoSubtitle(state, collectionTwoSubtitle) {
        state.styles.collectionTwoSubtitle = collectionTwoSubtitle
    },
    setCollectionTwoImg(state, collectionTwoImg) {
        state.styles.collectionTwoImg = collectionTwoImg
    },
    setCollectionTwoBtn(state, collectionTwoBtn) {
        state.styles.collectionTwoBtn = collectionTwoBtn
    },
    setCollectionTwoLink(state, collectionTwoLink) {
        state.styles.collectionTwoLink = collectionTwoLink
    },
    setCollectionThreeShow(state, collectionThreeShow) {
        state.styles.collectionThreeShow = collectionThreeShow
    },
    setCollectionThreeBg(state, color) {
        state.styles.collectionThreeBg = color
    },
    setCollectionThreeTitle(state, collectionThreeTitle) {
        state.styles.collectionThreeTitle = collectionThreeTitle
    },
    setCollectionThreeSubtitle(state, collectionThreeSubtitle) {
        state.styles.collectionThreeSubtitle = collectionThreeSubtitle
    },
    setCollectionThreeImg(state, collectionThreeImg) {
        state.styles.collectionThreeImg = collectionThreeImg
    },
    setCollectionThreeBtn(state, collectionThreeBtn) {
        state.styles.collectionThreeBtn = collectionThreeBtn
    },
    setCollectionThreeLink(state, collectionThreeLink) {
        state.styles.collectionThreeLink = collectionThreeLink
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
        state.styles.productTitleMain = productTitleMain
    },
    setProductTitleMainColor(state, color) {
        state.styles.productTitleMainColor = color
    },
    setProductTitleSub(state, productTitleSub) {
        state.styles.productTitleSub = productTitleSub
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
        state.styles.notificationTitle = notificationTitle
    },
    setNotificationContent(state, notificationContent) {
        state.styles.notificationContent = notificationContent
    },
    setNotificationButton(state, notificationButton) {
        state.styles.notificationButton = notificationButton
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