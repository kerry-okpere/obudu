<template>
  <div class="settings">
    <div class="container">
      <div class="settings__intro">
        <h1>Customize Your Storefront</h1>
        <p>Change and manage the look and feel of your storefront here.</p>
      </div>
      <div class="settings__master">
        <div class="settings__title">
          <h1>Master Settings</h1>
        </div>
        <a-collapse accordion>
          <a-collapse-panel header="Fonts" key="1" :showArrow="false">
            <div class="settings__item">
              <h3>Primary Font</h3>
              <a-select
                :defaultValue="priFont"
                :size="size"
                style="width: 200px"
                @change="setPriFont"
              >
                <a-select-option value="fontPriLato" class="fontPriLato">Lato</a-select-option>
                <a-select-option value="fontPriPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
                <a-select-option value="fontPriRoboto" class="fontPriRoboto">Roboto</a-select-option>
                <a-select-option value="fontPriOpensans" class="fontPriOpensans">Open Sans</a-select-option>
                <a-select-option value="fontPriPoppins" class="fontPriPoppins">Poppins</a-select-option>
                <a-select-option value="fontPriAbril" class="fontPriAbril">Abril Fatface</a-select-option>
                <a-select-option value="fontPriCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
                <a-select-option value="fontPriMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
                <a-select-option
                  value="fontPriCormorant"
                  class="fontPriCormorant"
                >Cormorant Garamond</a-select-option>
                <a-select-option value="fontPriNunito" class="fontPriNunito">Nunito</a-select-option>
              </a-select>
            </div>
            <div class="settings__item">
              <h3>Secondary Font</h3>
              <a-select
                :defaultValue="secFont"
                :size="size"
                style="width: 200px"
                @change="setSecFont"
              >
                <a-select-option value="fontSecLato" class="fontPriLato">Lato</a-select-option>
                <a-select-option value="fontSecPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
                <a-select-option value="fontSecRoboto" class="fontPriRoboto">Roboto</a-select-option>
                <a-select-option value="fontSecOpensans" class="fontPriOpensans">Open Sans</a-select-option>
                <a-select-option value="fontSecPoppins" class="fontPriPoppins">Poppins</a-select-option>
                <a-select-option value="fontSecAbril" class="fontPriAbril">Abril Fatface</a-select-option>
                <a-select-option value="fontSecCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
                <a-select-option value="fontSecMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
                <a-select-option
                  value="fontSecCormorant"
                  class="fontPriCormorant"
                >Cormorant Garamond</a-select-option>
                <a-select-option value="fontSecNunito" class="fontPriNunito">Nunito</a-select-option>
              </a-select>
            </div>
          </a-collapse-panel>
          <a-collapse-panel header="Colors" key="2" :showArrow="false">
            <div class="settings__item">
              <h3>Primary Color</h3>
              <a-button
                type="primary"
                @click="showPriColorPicker = !showPriColorPicker"
                v-bind:style="{backgroundColor: priColor, borderColor: priColor}"
              >Select Color</a-button>
              <chrome-color-picker
                v-if="showPriColorPicker"
                :value="priColor"
                @input="setPriColor($event.hex)"
                :disableAlpha="true"
              />
            </div>
            <div class="settings__item">
              <h3>Secondary Color</h3>
              <a-button
                type="primary"
                @click="showSecColorPicker = !showSecColorPicker"
                v-bind:style="{backgroundColor: secColor, borderColor: secColor}"
              >Select Color</a-button>
              <chrome-color-picker
                v-if="showSecColorPicker"
                :value="secColor"
                @input="setSecColor($event.hex)"
                :disableAlpha="true"
              />
            </div>
          </a-collapse-panel>
          <a-collapse-panel header="Menu" key="3" :showArrow="false">
            <div class="settings__item">
              <div class="settings__switch">
                <h3>Show</h3>
                <a-switch :defaultChecked="navShow" @change="setNavShow" size="small" />
              </div>
              <h3>Menu Layout</h3>
              <a-radio-group @change="setNavLayout($event.target.value)" :defaultValue="navLayout">
                <a-radio :style="radioStyle" :value="1">Left</a-radio>
                <a-radio :style="radioStyle" :value="2">Centered</a-radio>
                <a-radio :style="radioStyle" :value="3">Right</a-radio>
              </a-radio-group>
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
      <div class="settings__storefront-layout">
        <div class="settings__title">
          <h1>Storefront Layout</h1>
          <a-collapse accordion>
            <a-collapse-panel header="Hero" key="1" :showArrow="false">
              <div class="settings__item">
                <div class="settings__switch">
                  <h3>Show</h3>
                  <a-switch :defaultChecked="heroShow" @change="setHeroShow" />
                </div>
                <h3>Hero Layout</h3>
                <a-radio-group
                  @change="setHeroLayout($event.target.value)"
                  :defaultValue="heroLayout"
                >
                  <a-radio :style="radioStyle" :value="1">Left</a-radio>
                  <a-radio :style="radioStyle" :value="2">Centered</a-radio>
                  <a-radio :style="radioStyle" :value="3">Right</a-radio>
                </a-radio-group>
                <div class="settings__modal">
                  <a-button type="primary" @click="heroSettings">Modify Content</a-button>
                  <a-modal
                    title="Modify Hero Content"
                    v-model="showHeroSettings"
                    onOk="saveSettings"
                  >
                    <template slot="footer">
                      <a-button key="back" @click="heroCancel">Cancel</a-button>
                      <a-button
                        key="submit"
                        type="primary"
                        :loading="loading"
                        @click="saveSettings"
                      >Save</a-button>
                    </template>
                    <a-collapse defaultActiveKey="1" accordion>
                      <a-collapse-panel header="Hero Background" key="1" :showArrow="false">
                        <div class="settings__modal-item">
                          <p>Background Color</p>
                          <a-button
                            type="primary"
                            @click="showHeroColor = !showHeroColor"
                            v-bind:style="{backgroundColor: heroColor, borderColor: heroColor}"
                          >Select Color</a-button>
                          <chrome-color-picker
                            v-if="showHeroColor"
                            :value="heroColor"
                            @input="setHeroColor($event.hex)"
                            :disableAlpha="true"
                          />
                        </div>
                        <div class="settings__modal-item">
                          <p>Background Image</p>
                        </div>
                      </a-collapse-panel>
                      <a-collapse-panel header="Hero Content" key="2" :showArrow="false">
                        <div class="settings__modal-item">
                          <p>Hero Title</p>
                          <a-input
                            @change="setHeroTitle($event.target.value)"
                            :placeholder="heroTitle"
                          />
                          <a-button
                            type="primary"
                            size="small"
                            @click="showHeroTitleCP = !showHeroTitleCP"
                          >Select Color</a-button>
                          <chrome-color-picker
                            v-if="showHeroTitleCP"
                            :value="heroTitleColor"
                            @input="setHeroTitleColor($event.hex)"
                            :disableAlpha="true"
                          />
                        </div>
                        <div class="settings__modal-item">
                          <p>Hero Content</p>
                          <a-textarea
                            @change="setHeroContent($event.target.value)"
                            :placeholder="heroContent"
                            autosize
                          />
                          <a-button
                            type="primary"
                            size="small"
                            @click="showHeroContentCP = !showHeroContentCP"
                          >Select Color</a-button>
                          <chrome-color-picker
                            v-if="showHeroContentCP"
                            :value="heroContentColor"
                            @input="setHeroContentColor($event.hex)"
                            :disableAlpha="true"
                          />
                        </div>
                        <div class="settings__modal-item">
                          <p>Hero Image</p>
                          <div class="settings__switch">
                            <a-switch :defaultChecked="heroImageShow" @change="setHeroImageShow" />
                          </div>
                          <div class="clearfix" v-if="showHeroImageUpload">
                            <a-upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture-card"
                              :fileList="fileList"
                              @preview="showHeroImageModal"
                              @change="heroImageUpload"
                            >
                              <div v-if="fileList.length < 1">
                                <a-icon type="plus" />
                                <div class="ant-upload-text">Upload</div>
                              </div>
                            </a-upload>
                            <a-modal
                              :visible="heroImageModal"
                              :footer="null"
                              @cancel="hideHeroImageModal"
                            >
                              <img alt="example" style="width: 100%" :src="heroImagePreview" />
                            </a-modal>
                          </div>
                        </div>
                        <div class="settings__modal-item">
                          <p>Hero Height</p>
                          <a-slider
                            @change="setHeroHeight"
                            :min="100"
                            :max="1000"
                            :defaultValue="heroHeight"
                          />
                        </div>
                      </a-collapse-panel>
                      <a-collapse-panel header="Hero Button" key="3" :showArrow="false">
                        <div class="settings__modal-item">
                          <p>Primary Color</p>
                          <a-button
                            type="primary"
                            size="small"
                            @click="showHeroBtnPri = !showHeroBtnPri"
                            v-bind:style="{backgroundColor: heroBtnPri, borderColor: heroContentBtnPri, color: heroBtnSec}"
                          >Select Color</a-button>
                          <chrome-color-picker
                            v-if="showHeroBtnPri"
                            :value="heroBtnPri"
                            @input="setHeroBtnPri($event.hex)"
                            :disableAlpha="true"
                          />
                        </div>
                        <div class="settings__modal-item">
                          <p>Secondary Color</p>
                          <a-button
                            type="primary"
                            size="small"
                            @click="showHeroBtnSec = !showHeroBtnSec"
                            v-bind:style="{backgroundColor: heroBtnPri, borderColor: heroBtnPri, color: heroBtnSec}"
                          >Select Color</a-button>
                          <chrome-color-picker
                            v-if="showHeroBtnSec"
                            :value="heroBtnSec"
                            @input="setHeroBtnSec($event.hex)"
                            :disableAlpha="true"
                          />
                        </div>
                        <div class="settings__modal-item">
                          <p>Call to Action</p>
                          <a-input
                            @change="setHeroCTA($event.target.value)"
                            :placeholder="heroCTA"
                          />
                        </div>
                        <div class="settings__modal-item">
                          <p>Call to Action Link</p>
                          <a-input
                            @change="setHeroCTALink($event.target.value)"
                            :placeholder="heroCTALink"
                          />
                        </div>
                      </a-collapse-panel>
                    </a-collapse>
                  </a-modal>
                </div>
              </div>
            </a-collapse-panel>
            <a-collapse-panel header="Collection" key="2" :showArrow="false">
              <div class="settings__item">
                <div class="settings__switch">
                  <h3>Show</h3>
                  <a-switch
                    :defaultChecked="collectionShow"
                    @change="setCollectionShow"
                    size="small"
                  />
                </div>
                <h3>Collection Layout</h3>
                <a-radio-group @change="setCollectionLayout" :defaultValue="collectionLayout">
                  <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                  <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                  <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                </a-radio-group>
              </div>
            </a-collapse-panel>
            <a-collapse-panel header="Products" key="3" :showArrow="false">
              <div class="settings__item">
                <div class="settings__switch">
                  <h3>Show</h3>
                  <a-switch :defaultChecked="productShow" @change="setProductShow" size="small" />
                </div>
                <h3>Product Layout</h3>
                <a-radio-group @change="setProductLayout" :defaultValue="productLayout">
                  <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                  <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                  <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                </a-radio-group>
              </div>
            </a-collapse-panel>
            <a-collapse-panel header="Newsletter" key="4" :showArrow="false">
              <div class="settings__item">
                <div class="settings__switch">
                  <h3>Show</h3>
                  <a-switch
                    :defaultChecked="newsletterShow"
                    @change="setNewsletterShow"
                    size="small"
                  />
                </div>
                <h3>Newsletter Layout</h3>
                <a-radio-group
                  @change="setNewsletterLayout($event.target.value)"
                  :defaultValue="newsletterLayout"
                >
                  <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                  <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                  <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                </a-radio-group>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <div class="settings__footer">
        <div class="settings__title">
          <h1>Footer Settings</h1>
          <a-collapse accordion>
            <a-collapse-panel header="Footer" key="1" :showArrow="false">
              <div class="settings__item">
                <div class="settings__switch">
                  <h3>Show</h3>
                  <a-switch :defaultChecked="footerShow" @change="setFooterShow" size="small" />
                </div>
                <h3>Footer Layout</h3>
                <a-radio-group
                  @change="setFooterLayout($event.target.value)"
                  :defaultValue="footerLayout"
                >
                  <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                  <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                  <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                </a-radio-group>
              </div>
            </a-collapse-panel>
            <a-collapse-panel header="Subfooter" key="2" :showArrow="false">
              <div class="settings__item">
                <div class="settings__switch">
                  <h3>Show</h3>
                  <a-switch
                    :defaultChecked="subfooterShow"
                    @change="setSubfooterShow"
                    size="small"
                  />
                </div>
                <h3>Subfooter Layout</h3>
                <a-radio-group
                  @change="setSubfooterLayout($event.target.value)"
                  :defaultValue="subfooterLayout"
                >
                  <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                  <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                  <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                </a-radio-group>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <div class="settings__dashboard">
        <a-button size="large" block @click.prevent="gotoUrl(dashboardUrl)">Return to Dashboard</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Chrome } from "vue-color";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    "chrome-color-picker": Chrome
  },

  data: () => ({
    loading: false,
    size: "default",
    radioStyle: {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    },
    showPriColorPicker: false,
    showSecColorPicker: false,
    showHeroSettings: false,
    showHeroColor: false,
    showHeroTitleCP: false,
    showHeroContentCP: false,
    showHeroImageUpload: false,
    heroImageModal: false,
    heroImagePreview: "",
    showHeroBtnPri: false,
    showHeroBtnSec: false,
    newHeroTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "hero.png",
        status: "done",
        url: "https://via.placeholder.com/500x300"
      }
    ]
  }),

  computed: {
    ...mapGetters([
      "priColor",
      "secColor",
      "priFont",
      "secFont",
      "navShow",
      "navLayout",
      "heroShow",
      "heroLayout",
      "heroHeight",
      "heroColor",
      "heroTitle",
      "heroTitleColor",
      "heroContent",
      "heroContentColor",
      "heroCTA",
      "heroCTALink",
      "heroBgImg",
      "heroImage",
      "heroImageShow",
      "heroBtnPri",
      "heroBtnSec",
      "newsletterShow",
      "newsletterLayout",
      "footerShow",
      "footerLayout",
      "subfooterShow",
      "subfooterLayout"
    ]),
    dashboardUrl() {
      // TODO: Uncomment this when Dashboard has been updated
      // return `${this.$store.state.styles.store}.mercuriemart.com/dashboard`;
      return `https://dashboard.mercuriemart.com/`;
    }
  },

  methods: {
    gotoUrl(url) {
      window.open(url, "_blank");
    },
    //Hero Settings Modal
    heroSettings() {
      this.showHeroSettings = true;
    },
    saveSettings(e) {
      this.loading = true;
      setTimeout(() => {
        this.showHeroSettings = false;
        this.loading = false;
      }, 1000);
    },
    heroCancel(e) {
      this.showHeroSettings = false;
    },
    heroColor() {
      this.showHeroColor = true;
    },
    //END

    //Hero Image Upload
    hideHeroImageModal() {
      this.heroImageModal = false;
    },
    showHeroImageModal(file) {
      this.heroImagePreview = file.url || file.thumbUrl;
      this.heroImageModal = true;
    },
    heroImageUpload({ fileList }) {
      this.fileList = fileList;
    },
    //END

    //Color Pickers
    showHeroTitleCP() {
      this.showHeroTitleColor = true;
    },
    showHeroContentCP() {
      this.showHeroContentColor = true;
    },
    showPriColorPicker() {
      this.showPriColorPicker = true;
    },
    showSecColorPicker() {
      this.showSecColorPicker = true;
    },
    showHeroBtnPri() {
      this.showHeroBtnPri = true;
    },
    showHeroBtnSec() {
      this.showHeroBtnSec = true;
    },
    //END

    setPriFont(value) {
      this.$store.commit("setPriFont", value);
    },
    setSecFont(value) {
      this.$store.commit("setSecFont", value);
    },
    setHeroHeight(value) {
      this.$store.commit("setHeroHeight", value);
    },

    //Display
    setNavShow(checked) {
      this.$store.commit("setNavShow", checked);
    },
    setHeroShow(checked) {
      this.$store.commit("setHeroShow", checked);
    },
    setHeroImageShow(checked) {
      this.$store.commit("setHeroImageShow", checked);
      this.showHeroImageUpload = checked;
    },
    setNewsletterShow(checked) {
      this.$store.commit("setNewsletterShow", checked);
    },
    setFooterShow(checked) {
      this.$store.commit("setFooterShow", checked);
    },
    setSubfooterShow(checked) {
      this.$store.commit("setSubfooterShow", checked);
    },
    //END

    ...mapMutations([
      "setPriColor",
      "setSecColor",
      "setNavLayout",
      "setNewsletterLayout",
      "setFooterLayout",
      "setSubfooterLayout",
      "setHeroLayout",
      "setHeroColor",
      "setHeroTitle",
      "setHeroTitleColor",
      "setHeroContent",
      "setHeroContentColor",
      "setHeroCTA",
      "setHeroCTALink",
      "setHeroBtnPri",
      "setHeroBtnSec"
    ])
  }
};
</script>

<style lang="scss" scoped>
@import "./_index";
</style>