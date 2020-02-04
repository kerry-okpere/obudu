import store from '../../store/store.js';
import { eventBus } from '@/eventBus.js';

eventBus.$on('upLogo', () => {
    // TODO: Update present to support logo dimensions and use versions for updating logos
    // Save image with params e.g. heroBg, logo ...
    const myWidget = cloudinary.createUploadWidget({
        cloudName: "mercurie",
        apiKey: "486138948246678",
        // uploadPreset: "mercuriemartlogos",
        uploadPreset: "preset1",
        multiple: false,
        cropping: true,
        defaultSource: "local",
        folder: "mercuriemartlogos",
        public_id: "testStore"
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            store.commit('setNavLogoImg', true);
            store.commit('setNavLogo', result.info.url); 
            // This works, but doesn't upload a new image only shows the test image
            // Try it on Tarkwa, under Menu -> More Settings -> Upload logo
        } else {
            console.log(error);
        }
    });
    return myWidget.open();
})

//    eventBus Name - mutation
// 1. upHeroBg - setHeroBg
// 2. upHeroImage - setHeroImage
// 3. upCollectionOneImg - setCollectionOneImg
// 4. upCollectionTwoImg - setCollectionTwoImg
// 5. upCollectionThreeImg - setCollectionThreeImg