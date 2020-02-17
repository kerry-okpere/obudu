<template>
  <div class="settings__fonts">
    <div class="settings__item">
      <h3>Primary Font</h3>
      <a-select :defaultValue="priFont" :size="size" style="width: 200px" @change="setPriFont">
          <a-select-option value="fontPriAbril" class="fontPriAbril">Abril Fatface</a-select-option>
          <a-select-option value="fontPriBangers" class="fontPriBangers">Bangers</a-select-option>
          <a-select-option value="fontPriBlackops" class="fontPriBlackops">Black Ops One</a-select-option>
          <a-select-option value="fontPriCinzel" class="fontPriCinzel">Cinzel</a-select-option>
          <a-select-option value="fontPriCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
          <a-select-option value="fontPriCormorant" class="fontPriCormorant">Cormorant Garamond</a-select-option>
          <a-select-option value="fontPriCourier" class="fontPriCourier">Courier Prime</a-select-option>
          <a-select-option value="fontPriDancing" class="fontPriDancing">Dancing Script</a-select-option>
          <a-select-option value="fontPriFredericka" class="fontPriFredericka">Fredericka the Great</a-select-option>
          <a-select-option value="fontPriGelasio" class="fontPriGelasio">Gelasio</a-select-option>
          <a-select-option value="fontPriJosefin" class="fontPriJosefin">Josefin Sans</a-select-option>
          <a-select-option value="fontPriKnewave" class="fontPriKnewave">Knewave</a-select-option>
          <a-select-option value="fontPriLato" class="fontPriLato">Lato</a-select-option>
          <a-select-option value="fontPriLilita" class="fontPriLilita">Lilita One</a-select-option>
          <a-select-option value="fontPriLimelight" class="fontPriLimelight">Limelight</a-select-option>
          <a-select-option value="fontPriLuckiest" class="fontPriLuckiest">Luckiest</a-select-option>
          <a-select-option value="fontPriMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
          <a-select-option value="fontPriNunito" class="fontPriNunito">Nunito</a-select-option>
          <a-select-option value="fontPriOpensans" class="fontPriOpensans">Open Sans</a-select-option>
          <a-select-option value="fontPriPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
          <a-select-option value="fontPriPoppins" class="fontPriPoppins">Poppins</a-select-option>
          <a-select-option value="fontPriPressstart" class="fontPriPressstart">Press Start 2P</a-select-option>
          <a-select-option value="fontPriRaleway" class="fontPriRaleway">Raleway</a-select-option>
          <a-select-option value="fontPriRoboto" class="fontPriRoboto">Roboto</a-select-option>
          <a-select-option value="fontPriSacramento" class="fontPriSacramento">Sacramento</a-select-option>
          <a-select-option value="fontPriSigmar" class="fontPriSigmar">Sigmar One</a-select-option>
          <a-select-option value="fontPriUbuntu" class="fontPriUbuntu">Ubuntu</a-select-option>
      </a-select>
    </div>
    <div class="settings__item">
      <h3>Secondary Font</h3>
      <a-select :defaultValue="secFont" :size="size" style="width: 200px" @change="setSecFont">
          <a-select-option value="fontSecAbril" class="fontPriAbril">Abril Fatface</a-select-option>
          <a-select-option value="fontSecBangers" class="fontPriBangers">Bangers</a-select-option>
          <a-select-option value="fontSecBlackops" class="fontPriBlackops">Black Ops One</a-select-option>
          <a-select-option value="fontSecCinzel" class="fontPriCinzel">Cinzel</a-select-option>
          <a-select-option value="fontSecCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
          <a-select-option value="fontSecCormorant" class="fontPriCormorant">Cormorant Garamond</a-select-option>
          <a-select-option value="fontSecCourier" class="fontPriCourier">Courier Prime</a-select-option>
          <a-select-option value="fontSecDancing" class="fontPriDancing">Dancing Script</a-select-option>
          <a-select-option value="fontSecFredericka" class="fontPriFredericka">Fredericka the Great</a-select-option>
          <a-select-option value="fontSecGelasio" class="fontPriGelasio">Gelasio</a-select-option>
          <a-select-option value="fontSecJosefin" class="fontPriJosefin">Josefin Sans</a-select-option>
          <a-select-option value="fontSecKnewave" class="fontPriKnewave">Knewave</a-select-option>
          <a-select-option value="fontSecLato" class="fontPriLato">Lato</a-select-option>
          <a-select-option value="fontSecLilita" class="fontPriLilita">Lilita One</a-select-option>
          <a-select-option value="fontSecLimelight" class="fontPriLimelight">Limelight</a-select-option>
          <a-select-option value="fontSecLuckiest" class="fontPriLuckiest">Luckiest</a-select-option>
          <a-select-option value="fontSecMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
          <a-select-option value="fontSecNunito" class="fontPriNunito">Nunito</a-select-option>
          <a-select-option value="fontSecOpensans" class="fontPriOpensans">Open Sans</a-select-option>
          <a-select-option value="fontSecPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
          <a-select-option value="fontSecPoppins" class="fontPriPoppins">Poppins</a-select-option>
          <a-select-option value="fontSecPressstart" class="fontPriPressstart">Press Start 2P</a-select-option>
          <a-select-option value="fontSecRaleway" class="fontPriRaleway">Raleway</a-select-option>
          <a-select-option value="fontSecRoboto" class="fontPriRoboto">Roboto</a-select-option>
          <a-select-option value="fontSecSacramento" class="fontPriSacramento">Sacramento</a-select-option>
          <a-select-option value="fontSecSigmar" class="fontPriSigmar">Sigmar One</a-select-option>
          <a-select-option value="fontSecUbuntu" class="fontPriUbuntu">Ubuntu</a-select-option>
      </a-select>
    </div>
    <div class="settings__item">
      <h3>Menu Font</h3>
      <a-select :defaultValue="navFont" :size="size" style="width: 200px" @change="setNavFont">
        <a-select-option value="fontPriAbril" class="fontPriAbril">Abril Fatface</a-select-option>
        <a-select-option value="fontPriBangers" class="fontPriBangers">Bangers</a-select-option>
        <a-select-option value="fontPriBlackops" class="fontPriBlackops">Black Ops One</a-select-option>
        <a-select-option value="fontPriCinzel" class="fontPriCinzel">Cinzel</a-select-option>
        <a-select-option value="fontPriCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
        <a-select-option value="fontPriCormorant" class="fontPriCormorant">Cormorant Garamond</a-select-option>
        <a-select-option value="fontPriCourier" class="fontPriCourier">Courier Prime</a-select-option>
        <a-select-option value="fontPriDancing" class="fontPriDancing">Dancing Script</a-select-option>
        <a-select-option value="fontPriFredericka" class="fontPriFredericka">Fredericka the Great</a-select-option>
        <a-select-option value="fontPriGelasio" class="fontPriGelasio">Gelasio</a-select-option>
        <a-select-option value="fontPriJosefin" class="fontPriJosefin">Josefin Sans</a-select-option>
        <a-select-option value="fontPriKnewave" class="fontPriKnewave">Knewave</a-select-option>
        <a-select-option value="fontPriLato" class="fontPriLato">Lato</a-select-option>
        <a-select-option value="fontPriLilita" class="fontPriLilita">Lilita One</a-select-option>
        <a-select-option value="fontPriLimelight" class="fontPriLimelight">Limelight</a-select-option>
        <a-select-option value="fontPriLuckiest" class="fontPriLuckiest">Luckiest</a-select-option>
        <a-select-option value="fontPriMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
        <a-select-option value="fontPriNunito" class="fontPriNunito">Nunito</a-select-option>
        <a-select-option value="fontPriOpensans" class="fontPriOpensans">Open Sans</a-select-option>
        <a-select-option value="fontPriPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
        <a-select-option value="fontPriPoppins" class="fontPriPoppins">Poppins</a-select-option>
        <a-select-option value="fontPriPressstart" class="fontPriPressstart">Press Start 2P</a-select-option>
        <a-select-option value="fontPriRaleway" class="fontPriRaleway">Raleway</a-select-option>
        <a-select-option value="fontPriRoboto" class="fontPriRoboto">Roboto</a-select-option>
        <a-select-option value="fontPriSacramento" class="fontPriSacramento">Sacramento</a-select-option>
        <a-select-option value="fontPriSigmar" class="fontPriSigmar">Sigmar One</a-select-option>
        <a-select-option value="fontPriUbuntu" class="fontPriUbuntu">Ubuntu</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    size: 'default',
  }),
  computed: {
    ...mapGetters([
      'priFont',
      'secFont',
      'navFont'
    ])
  },
  methods: {
    setPriFont(value) {
      this.$store.commit('setPriFont', value);
    },
    setSecFont(value) {
      this.$store.commit('setSecFont', value);
    },
    setNavFont(value) {
      this.$store.commit('setNavFont', value);
    }
  }
}
</script>
