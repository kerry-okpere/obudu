<template>
                        <div class="settings__item">
                          <div class="settings__switch">
                              <h3>Show</h3>
                              <a-switch :defaultChecked="productShow" @change="setProductShow" size="small" />
                          </div>
                          <h3>Product Layout</h3>
                          <a-radio-group @change="setProductLayout($event.target.value)" :defaultValue="productLayout">
                              <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                              <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                              <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                          </a-radio-group>
                          <div class="settings__modal">
                              <a-button type="primary" @click="showProductSettings">More Settings</a-button>
                              <a-modal title="Modify Product Content" v-model="showProductSettings" onOk="saveProductSettings" :style="modalStyle">
                                  <template slot="footer">
                                      <a-button key="back" @click="productCancel">Cancel</a-button>
                                      <a-button key="submit" type="primary" :loading="loading" @click="saveProductSettings">Save</a-button>
                                  </template>
                                  <a-collapse accordion>
                                      <a-collapse-panel header="Product Background" key="1" :showArrow="false">
                                          <div class="settings__modal-item">
                                          <p>Product Section Background</p>
                                              <a-button type="primary" @click="prodBgCP = !prodBgCP" v-bind:style="{backgroundColor: productBg, borderColor: productBg}">
                                                  Select Color
                                              </a-button>
                                              <swatches-picker v-if="prodBgCP" :value="productBg" @input="setProductBg($event.hex)" :disableAlpha="true" />
                                          </div>
                                      </a-collapse-panel>
                                      <a-collapse-panel header="Product Section Title" key="2" :showArrow="false">
                                          <div class="settings__modal-item">
                                              <p>Background Color</p>
                                              <a-button type="primary" @click="productTitleBgCP = !productTitleBgCP" v-bind:style="{backgroundColor: productTitleBgColor, borderColor: productTitleBgColor}">
                                                  Select Color
                                              </a-button>
                                              <swatches-picker v-if="productTitleBgCP" :value="productTitleBgColor" @input="setProductTitleBgColor($event.hex)" :disableAlpha="true" />
                                          </div>
                                          <div class="settings__modal-item">
                                              <p>Product Section Title</p>
                                              <div class="settings__switch">
                                                  <a-switch :defaultChecked="productTitleShow" @change="setProductTitleShow" size="small" />
                                              </div>
                                              <div class="pb-3">
                                                  <a-input @change="setProductTitleMain($event.target.value)" :placeholder="productTitleMain" />
                                                  <a-button type="primary" size="small" @click="prodTitleMainCP = !prodTitleMainCP" v-bind:style="{backgroundColor: productTitleMainColor, borderColor: productTitleMainColor}">
                                                      Select Color
                                                  </a-button>
                                                  <swatches-picker v-if="prodTitleMainCP" :value="productTitleMainColor" @input="setProductTitleMainColor($event.hex)" :disableAlpha="true" />
                                              </div>
                                              <div class="pb-3">
                                                  <a-input @change="setProductTitleSub($event.target.value)" :placeholder="productTitleSub" />
                                                  <a-button type="primary" size="small" @click="prodTitleSubCP = !prodTitleSubCP" v-bind:style="{backgroundColor: productTitleSubColor, borderColor: productTitleSubColor}">
                                                      Select Color
                                                  </a-button>
                                                  <swatches-picker v-if="prodTitleSubCP" :value="productTitleSubColor" @input="setProductTitleSubColor($event.hex)" :disableAlpha="true" />
                                              </div>
                                          </div>
                                          <div class="settings__modal-item">
                                              <p>Layout</p>
                                              <a-radio-group @change="setProductTitleLayout($event.target.value)" :defaultValue="productTitleLayout">
                                                  <a-radio :style="radioStyle" :value="1">Left</a-radio>
                                                  <a-radio :style="radioStyle" :value="2">Centered</a-radio>
                                                  <a-radio :style="radioStyle" :value="3">Right</a-radio>
                                              </a-radio-group>
                                          </div>
                                      </a-collapse-panel>
                                  </a-collapse>
                              </a-modal>
                          </div>
                      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>