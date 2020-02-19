<template>
  <section class="settings__menu">
    <div class="settings__item">
      <div class="settings__switch">
        <h3>Show</h3>
        <a-switch :defaultChecked="navShow" @change="setNavShow" size="small" />
      </div>
      <div class="settings__modal-item">
      <p>Menu Layout</p>
      <a-select :defaultValue="navLayout" style="width: 200px" @change="setNavLayout">
          <a-select-option :value="1">Left</a-select-option>
          <a-select-option :value="2">Centered</a-select-option>
          <a-select-option :value="3">Right</a-select-option>
      </a-select>
      </div>
      <div class="settings__modal-item">
        <p>Menu Type</p>
        <a-select :defaultValue="navType" style="width: 200px" @change="setNavType">
            <a-select-option value="navFixed">Fixed Menu</a-select-option>
            <a-select-option value="navTrans">Transparent Menu</a-select-option>
        </a-select>
      </div>
      <div class="settings__modal-item">
        <a-button type="primary" @click="menuSettings">Manage Menu</a-button>
      </div>
    </div>
    
    <!-- Manage Menu Modal -->
    <div class="settings__modal">
      <a-modal title="Manage Menu" v-model="showMenuSettings" onOk="saveSettings" :style="modalStyle">
          <template slot="footer">
            <a-button key="back" @click="menuCancel">Cancel</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="saveMenuSettings">Save</a-button>
          </template>
          <a-collapse accordion>
            <a-collapse-panel header="Menu Color" key="1" :showArrow="false">
              <div class="settings__modal-item">
                <p>Menu Background Color</p>
                <a-button type="primary" size="small" @click="navBgColorCP = !navBgColorCP">
                    Set Color
                </a-button>
                <swatches-picker v-if="navBgColorCP" :value="navBgColor" @input="setNavBgColor($event.hex)" :disableAlpha="true" />
              </div>
              <div class="settings__modal-item">
                <p>Menu Text Color</p>
                <a-button type="primary" size="small" @click="navColorCP = !navColorCP">
                    Set Color
                </a-button>
                <swatches-picker v-if="navColorCP" :value="navColor" @input="setNavColor($event.hex)" :disableAlpha="true" />
              </div>
            </a-collapse-panel>
            <a-collapse-panel header="Menu Items" key="2" :showArrow="false">
                <div class="settings__modal-item">
                    <p>Manage Menu</p>
                        <!-- <a-list size="small" bordered :dataSource="navMenu">
                            <a-list-item slot="renderItem" slot-scope="item, index">{{item}}</a-list-item>
                        </a-list> -->
                        <a-button type="primary" @click="newMenu = !newMenu">Add Menu</a-button>
                        <div class="new-menu pt-4" v-show="newMenu">
                            <a-form layout="vertical">
                                <a-form-item label="Menu Name">
                                    <a-input 
                                    v-decorator="['menuName', {rules: [{required: true, message: 'Menu name required'}]}]"
                                    placeholder="Eg. Home"/>
                                </a-form-item>
                                <a-form-item label="Menu URL" class="pt-2">
                                    <a-input 
                                    v-decorator="['menuLink', {rules: [{required: true, message: 'Menu link required'}]}]"
                                    placeholder="Eg. https://www.yourstore.mercuriemart.com"/>
                                </a-form-item>
                                <a-form-item>
                                    <a-button type="primary" html-type="submit" icon="plus">Add</a-button>
                                </a-form-item>
                            </a-form>
                        </div>
                </div>
            </a-collapse-panel>
          </a-collapse>
      </a-modal>
    </div> 
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    loading: false,
    radioStyle: {
      paddingTop: '10px',
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    },
    modalStyle: {
      margin: '0 50px 0 0'
    },
    showMenuSettings: false,
    navColorCP: false,
    navBgColorCP: false,
  }),
  computed: {
    ...mapGetters ([
      'navShow',
      'navType',
      'navLayout',
      'navColor',
      'navBgColor'
    ])
  },
  methods: {
    setNavShow(checked) {
      this.$store.commit('setNavShow', checked);
    },
    setNavType(value) {
      this.$store.commit('setNavType', value);
    },
    setNavLayout(value) {
      this.$store.commit('setNavLayout', value);
    },
    
    //Menu Settings Modal
    menuSettings() {
      this.showMenuSettings = true;
    },
    saveMenuSettings(e) {
      this.loading = true;
      setTimeout(() => {
        this.showMenuSettings = false;
        this.loading = false;
      }, 1000);
      this.$message.success('Storefront design saved successfully!');
    },
    menuCancel(e) {
      this.showMenuSettings = false;
    },
    //END
  }
}
</script>