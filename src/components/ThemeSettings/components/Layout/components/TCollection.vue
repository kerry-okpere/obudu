<template>
  <div>
                            <div class="settings__item">
                          <div class="settings__switch" style="padding: 0 0 0;">
                              <h3>Show</h3>
                              <a-switch :defaultChecked="collectionShow" @change="setCollectionShow" size="small" />
                          </div>
                          <h3>Collection Layout</h3>
                          <a-radio-group @change="setCollectionLayout($event.target.value)" :defaultValue="collectionLayout">
                              <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                              <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                              <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                          </a-radio-group>
                      </div>
                      <div class="settings__modal">
                          <a-button type="primary" @click="collectionSettings">More Settings</a-button>
                          <a-modal title="Modify Collection Content" v-model="showCollectionSettings" onOk="saveCollectionSettings" :style="modalStyle">
                              <template slot="footer">
                                  <a-button key="back" @click="collectionCancel">Cancel</a-button>
                                  <a-button key="submit" type="primary" :loading="loading" @click="saveCollectionSettings">Save</a-button>
                              </template>
                              <a-collapse accordion>
                                  <a-collapse-panel header="Collection Settings" key="1" :showArrow="false">
                                      <div class="settings__modal-item">
                                          <p>Button Color</p>
                                          <a-button type="primary" @click="collectionBtnCP = !collectionBtnCP" v-bind:style="{backgroundColor: collectionBtnColor, borderColor: collectionBtnColor}">
                                              Select Color
                                          </a-button>
                                          <swatches-picker v-if="collectionBtnCP" :value="collectionBtnColor" @input="setCollectionBtnColor($event.hex)" :disableAlpha="true" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Background Color</p>
                                          <a-button type="primary" @click="collectionBgCP = !collectionBgCP" v-bind:style="{backgroundColor: collectionBgColor, borderColor: collectionBgColor}">
                                              Select Color
                                          </a-button>
                                          <swatches-picker v-if="collectionBgCP" :value="collectionBgColor" @input="setCollectionBgColor($event.hex)" :disableAlpha="true" />
                                      </div>
                                  </a-collapse-panel>
                                  <a-collapse-panel header="Collection One" key="2" :showArrow="false">
                                      <div class="settings__modal-item">
                                          <p>Collection One Settings</p>
                                          <div class="settings__switch">
                                              <a-switch :defaultChecked="collectionOneShow" @change="setCollectionOneShow" size="small" />
                                          </div>
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Background</p>
                                          <a-button type="primary" @click="collectionOneBgCP = !collectionOneBgCP" v-bind:style="{backgroundColor: collectionOneBg, borderColor: collectionOneBg}">
                                              Select Color
                                          </a-button>
                                          <swatches-picker v-if="collectionOneBgCP" :value="collectionOneBg" @input="setCollectionOneBg($event.hex)" :disableAlpha="true" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Title</p>
                                          <a-input @change="setCollectionOneTitle($event.target.value)" :placeholder="collectionOneTitle" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Image</p>
                                          <div class="settings__upload">
                                              <a-button type="primary" @click="upCollectionOneImg">
                                                  Upload Image
                                              </a-button>
                                          </div>
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Description</p>
                                          <a-input @change="setCollectionOneSubtitle($event.target.value)" :placeholder="collectionOneSubtitle" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Button</p>
                                          <a-input @change="setCollectionOneBtn($event.target.value)" :placeholder="collectionOneBtn" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Button Link</p>
                                          <a-input @change="setCollectionOneLink($event.target.value)" :placeholder="collectionOneLink" />
                                      </div>
                                  </a-collapse-panel>
                                  <a-collapse-panel header="Collection Two" key="3" :showArrow="false">
                                      <div class="settings__modal-item">
                                          <p>Collection Two Settings</p>
                                          <div class="settings__switch">
                                              <a-switch :defaultChecked="collectionTwoShow" @change="setCollectionTwoShow" size="small" />
                                          </div>
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Background</p>
                                          <a-button type="primary" @click="collectionTwoBgCP = !collectionTwoBgCP" v-bind:style="{backgroundColor: collectionTwoBg, borderColor: collectionTwoBg}">
                                              Select Color
                                          </a-button>
                                          <swatches-picker v-if="collectionTwoBgCP" :value="collectionTwoBg" @input="setCollectionTwoBg($event.hex)" :disableAlpha="true" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Title</p>
                                          <a-input @change="setCollectionTwoTitle($event.target.value)" :placeholder="collectionTwoTitle" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Description</p>
                                          <a-input @change="setCollectionTwoSubtitle($event.target.value)" :placeholder="collectionTwoSubtitle" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Image</p>
                                          <div class="settings__upload">
                                              <a-button type="primary" @click="upCollectionTwoImg">
                                                  Upload Image
                                              </a-button>
                                          </div>
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Button</p>
                                          <a-input @change="setCollectionTwoBtn($event.target.value)" :placeholder="collectionTwoBtn" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Button Link</p>
                                          <a-input @change="setCollectionTwoLink($event.target.value)" :placeholder="collectionTwoLink" />
                                      </div>
                                  </a-collapse-panel>
                                  <a-collapse-panel header="Collection Three" key="4" :showArrow="false">
                                      <div class="settings__modal-item">
                                          <p>Collection Three Settings</p>
                                          <div class="settings__switch">
                                              <a-switch :defaultChecked="collectionThreeShow" @change="setCollectionThreeShow" size="small" />
                                          </div>
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Background</p>
                                          <a-button type="primary" @click="collectionThreeBgCP = !collectionThreeBgCP" v-bind:style="{backgroundColor: collectionThreeBg, borderColor: collectionThreeBg}">
                                              Select Color
                                          </a-button>
                                          <swatches-picker v-if="collectionThreeBgCP" :value="collectionThreeBg" @input="setCollectionThreeBg($event.hex)" :disableAlpha="true" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Title</p>
                                          <a-input @change="setCollectionThreeTitle($event.target.value)" :placeholder="collectionThreeTitle" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Description</p>
                                          <a-input @change="setCollectionThreeSubtitle($event.target.value)" :placeholder="collectionThreeSubtitle" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Image</p>
                                          <div class="settings__upload">
                                              <a-button type="primary" @click="upCollectionThreeImg">
                                                  Upload Image
                                              </a-button>
                                          </div>
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Button</p>
                                          <a-input @change="setCollectionThreeBtn($event.target.value)" :placeholder="collectionThreeBtn" />
                                      </div>
                                      <div class="settings__modal-item">
                                          <p>Collection Button Link</p>
                                          <a-input @change="setCollectionThreeLink($event.target.value)" :placeholder="collectionThreeLink" />
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