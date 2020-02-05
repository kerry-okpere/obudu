<template>
    <footer>
        <section class="footer" v-if="footerShow" :class="[navFont]">
           
            <!-- Footer Layout One -->
            <section class="footer__one" v-if="footerLayout === 1">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-xl-3 col-lg-3 col-md-2 col-sm-6">
                            <h3>Categories</h3>
                            <ul>
                                <li>
                                    <router-link exact to="#">Category One</router-link>
                                </li>
                                <li>
                                    <router-link exact to="#">Category Two</router-link>
                                </li>
                                <li>
                                    <router-link exact to="#">Category Three</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6 col-xl-3 col-lg-3 col-md-2 col-sm-6">
                            <h3>Account</h3>
                            <ul>
                                <li>
                                    <router-link exact to="#">Register</router-link>
                                </li>
                                <li>
                                    <router-link exact to="#">Sign In</router-link>
                                </li>
                                <li>
                                    <router-link exact to="#">Orders</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12">
                            <h3>About</h3>
                            <p>{{metadata.about}}</p>
                        </div>
                        <div class="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12">
                            <div class="footer__one-contact">
                                <div class="logo">
                                    <img v-if="navLogoImg" :src="navLogo" :alt="storeName" width="200">
                                    <h1 v-else :style="{color: navLogoTextColor}">{{storeName}}</h1>
                                </div>
                                <p>{{metadata.phone}}</p>
                                <p>{{metadata.address}}</p>
                                <div class="footer__one-social">
                                    <a :href="metadata.facebook" target="_blank"> <v-icon name="brands/facebook-f"/> </a>
                                    <a :href="metadata.twitter" target="_blank"> <v-icon name="brands/twitter"/> </a>
                                    <a :href="metadata.instagram" target="_blank">  <v-icon name="brands/instagram"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section class="subfooter" v-if="subfooterShow">
            
            <!-- Subfooter Layout One -->
            <section class="subfooter__one" v-if="subfooterLayout === 1" :style="{backgroundColor: navBgColor, color: navColor}">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="subfooter__one-copyright">
                                <p>© Copyright {{getCurrentYear}}, <a :href="storeUrl" :style="{color: subfooterColor}">{{storeName}}</a> - All Rights
                                    Reserved.</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="subfooter__one-payment pt-1">
                                        <img src="@/assets/img/footer/master.png" alt="MasterCard Logo" width="50">
                                        <!-- <img src="@/assets/img/footer/visa.png" alt="Visa Logo" width="60"> -->
                                        <img src="@/assets/img/footer/verve.png" alt="Verve Logo" width="60">
                                        </div>
                                    </div>
                                    <!-- <div class="col-lg-12">
                                        <div class="subfooter__one-badge">
                                        <p href="https://mercuriemart.com" target="_blank"><p>Powered by MercurieMart</p></a>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                    </div>
                </div>
            </section>

            <!-- Subfooter Layout Two -->
            <section class="subfooter__two" v-if="subfooterLayout === 2" :style="{backgroundColor: navBgColor, color: navColor}">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="subfooter__two-copyright">
                                <p>© Copyright {{getCurrentYear}}, <a :href="storeUrl" :style="{color: subfooterColor}">{{storeName}}</a> - All Rights
                                    Reserved.
                                </p>
                            </div>
                        </div>
                        <!-- <div class="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="subfooter__two-badge">
                                <a href="https://mercuriemart.com" target="_blank"><p>Powered by MercurieMart</p></a>
                            </div>
                        </div> -->
                    </div>
                </div>
            </section>

            <!-- Subfooter Layout Three -->
            <section class="subfooter__three" v-if="subfooterLayout === 3" :style="{backgroundColor: navBgColor, color: navColor}">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="subfooter__three-copyright pt-3">
                                <p>© Copyright {{getCurrentYear}}, <a :href="storeUrl" :style="{color: subfooterColor}">{{storeName}}</a> - All Rights Reserved.</p>
                            </div>
                            <!-- <div class="subfooter__three-badge">
                                <a href="https://mercuriemart.com" target="_blank"><p>Powered by MercurieMart</p></a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';
import { STORENAME } from "./../../config";

export default {
    data: () => ({
        storeUrl: null,
        metadata: null
    }),
    computed: {
        ...mapGetters ([
            'navFont',
            'navBgColor',
            'navColor',
            'priColor',
            'footerShow',
            'footerLayout',
            'subfooterShow',
            'subfooterLayout',
            'subfooterBgColor',
            'subfooterColor',
            'navLogoImg',
            'navLogoTextColor',
            'storeName'
        ]),
        getCurrentYear() {
            return new Date().getFullYear()
        }
    },
  async created() {
    let res = await this.$store.dispatch("products/fetchStoreMetadata");
    this.metadata = res
  }
}
</script>

<style lang="scss">
    @import './_index';
</style>