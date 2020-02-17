<template>
  <div class="settings__hero">
    <div class="settings__item">
      <div class="settings__switch">
        <h3>Show</h3>
        <a-switch :defaultChecked="heroShow" size="small" @change="setHeroShow" />
      </div>
      <div class="settings__modal-item">
        <h3>Hero Layout</h3>
        <a-select :defaultValue="heroLayout" style="width: 200px" @change="setHeroLayout($event.target.value)">
          <a-select-option :value="1">Left</a-select-option>
          <a-select-option :value="2">Centered</a-select-option>
          <a-select-option :value="3">Right</a-select-option>
        </a-select>
      </div>
      <div class="settings__modal-item">
        <a-button type="primary" @click="heroSettings">Manage Hero</a-button>
      </div>

      <!-- Manage Hero Modal -->
      <div class="settings__modal">
        <a-modal title="Modify Hero Content" v-model="showHeroSettings" onOk="saveSettings" :style="modalStyle">
          <template slot="footer">
            <a-button key="back" @click="heroCancel">Cancel</a-button>
            <a-button key="submit" type="primary" class="custom" :loading="loading" @click="saveHeroSettings">Save</a-button>
          </template>
          <a-collapse accordion>
            <a-collapse-panel header="Hero Background" key="1" :showArrow="false">
                <div class="settings__modal-item">
                    <p>Background Color</p>
                    <a-button type="primary" @click="heroColorCP = !heroColorCP" v-bind:style="{backgroundColor: heroColor, borderColor: heroColor}">
                        Select Color
                    </a-button>
                    <swatches-picker v-if="heroColorCP" :value="heroColor" @input="setHeroColor($event.hex)" :disableAlpha="true" />
                </div>
                <div class="settings__modal-item">
                    <p>Background Image</p>
                    <div class="settings__switch">
                        <a-switch :defaultChecked="heroBgImgShow" @change="setHeroBgImgShow" />
                    </div>
                    <div class="settings__upload">
                        <a-button type="primary" @click="upHeroBg">
                            Upload Image
                        </a-button>
                    </div>
                </div>
            </a-collapse-panel>
            <a-collapse-panel header="Hero Content" key="2" :showArrow="false">
                <div class="settings__modal-item">
                    <p>Hero Title</p>
                    <a-input @change="setHeroTitle($event.target.value)" :placeholder="heroTitle" />
                    <a-button type="primary" size="small" @click="heroTitleCP = !heroTitleCP">
                        Select Color
                    </a-button>
                    <swatches-picker v-if="heroTitleCP" :value="heroTitleColor" @input="setHeroTitleColor($event.hex)" :disableAlpha="true" />
                </div>
                <div class="settings__modal-item">
                    <p>Hero Content</p>
                    <a-textarea @change="setHeroContent($event.target.value)" :placeholder="heroContent" autosize />
                    <a-button type="primary" size="small" @click="heroContentCP = !heroContentCP">
                        Select Color
                    </a-button>
                    <swatches-picker v-if="heroContentCP" :value="heroContentColor" @input="setHeroContentColor($event.hex)" :disableAlpha="true" />
                </div>
                <div class="settings__modal-item">
                    <p>Hero Image</p>
                    <div class="settings__switch">
                        <a-switch :defaultChecked="heroImageShow" @change="setHeroImageShow" />
                    </div>
                    <div class="settings__upload">
                        <a-button type="primary" @click="upHeroImage">
                            Upload Image
                        </a-button>
                    </div>
                </div>
                <div class="settings__modal-item">
                    <p>Hero Height</p>
                    <a-slider @change="setHeroHeight" :min="100" :max="1000" :defaultValue="heroHeight" />
                </div>
            </a-collapse-panel>
            <a-collapse-panel header="Hero Button" key="3" :showArrow="false">
                <div class="settings__modal-item">
                    <p>Primary Color</p>
                    <a-button type="primary" size="small" @click="heroBtnPriCP = !heroBtnPriCP" v-bind:style="{backgroundColor: heroBtnPri, borderColor: heroBtnPri, color: heroBtnSec}">
                        Select Color
                    </a-button>
                    <swatches-picker v-if="heroBtnPriCP" :value="heroBtnPri" @input="setHeroBtnPri($event.hex)" :disableAlpha="true" />
                </div>
                <div class="settings__modal-item">
                    <p>Secondary Color</p>
                    <a-button type="primary" size="small" @click="heroBtnSecCP = !heroBtnSecCP" v-bind:style="{backgroundColor: heroBtnPri, borderColor: heroBtnPri, color: heroBtnSec}">
                        Select Color
                    </a-button>
                    <swatches-picker v-if="heroBtnSecCP" :value="heroBtnSec" @input="setHeroBtnSec($event.hex)" :disableAlpha="true" />
                </div>
                <div class="settings__modal-item">
                    <p>Call to Action</p>
                    <a-input @change="setHeroCTA($event.target.value)" :placeholder="heroCTA" />
                </div>
                <div class="settings__modal-item">
                    <p>Call to Action Link</p>
                    <a-input @change="setHeroCTALink($event.target.value)" :placeholder="heroCTALink" />
                </div>
            </a-collapse-panel>
          </a-collapse>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    modalStyle: {
      margin: '0 50px 0 0'
    },
    showHeroSettings: false,
    heroColorCP: false,
    heroTitleCP: false,
    heroContentCP: false,
    heroBtnPriCP: false,
    heroBtnSecCP: false,
  }),
  computed: {
    ...mapGetters ([
      'heroShow',
      'heroLayout',
      'heroHeight',
      'heroColor',
      'heroTitle',
      'heroTitleColor',
      'heroContent',
      'heroContentColor',
      'heroCTA',
      'heroCTALink',
      'heroBgImgShow',
      'heroBgImg',
      'heroImage',
      'heroImageShow',
      'heroBtnPri',
      'heroBtnSec',
    ])
  },
  methods: {
    ...mapMutations ([
      'setHeroLayout',
      'setHeroColor',
      'setHeroTitle',
      'setHeroTitleColor',
      'setHeroContent',
      'setHeroContentColor',
      'setHeroCTA',
      'setHeroCTALink',
      'setHeroBtnPri',
      'setHeroBtnSec'
    ]),
    
    //Hero Settings Modal
    heroSettings() {
        this.showHeroSettings = true;
    },
    saveHeroSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showHeroSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    heroCancel(e) {
        this.showHeroSettings = false;
    },
    //END

    setHeroShow(checked) {
        this.$store.commit('setHeroShow', checked);
    },
    setHeroBgImgShow(checked) {
        this.$store.commit('setHeroBgImgShow', checked);
    },
    setHeroImageShow(checked) {
        this.$store.commit('setHeroImageShow', checked);
    },
  }
}
</script>

<style>

</style>