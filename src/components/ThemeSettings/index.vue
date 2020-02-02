<template>
    <div class="settings">
        <div class="container">
            <div class="settings__intro">
                <div class="d-inline-flex">
                    <h3>You are customizing</h3>
                    <a-popover trigger="click" placement="topRight">
                    <template slot="content">
                        <p class="pt-2">The Customizer allows you to change <br />the look and feel of your store and to <br />preview changes before publishing them.</p>
                        <a href="">Learn more</a>
                    </template>
                    <a-icon type="question-circle" />
                </a-popover>
                </div>
                <h1>{{storeName}}</h1>
                <a-divider />
                <div class="d-inline-flex">
                    <div>
                        <p class="mb-1">Active theme</p>
                        <h3>{{themeName}}</h3>
                    </div>
                    <a-button @click="changeThemes">Change</a-button>
                    <a-modal title="Select Your Theme" v-model="showThemes" @ok="saveThemes" okText="Save" width="1000px">
                        <ThemePicker />
                    </a-modal>
                </div>
                <a-divider />
            </div>
            <div class="settings__master">
                <div class="settings__title">
                    <h1>Master Settings</h1>
                </div>
                <a-collapse accordion>
                    <a-collapse-panel header="Fonts" key="1" :showArrow="false">
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
                    </a-collapse-panel>
                    <a-collapse-panel header="Colors" key="2" :showArrow="false">
                        <div class="settings__item">
                            <h3>Primary Color</h3>
                            <a-button type="primary" @click="priColorCP = !priColorCP" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">
                                Select Color
                            </a-button>
                            <swatches-picker v-if="priColorCP" :value="priColor" @input="setPriColor($event.hex)" :disableAlpha="true" />
                        </div>
                        <div class="settings__item">
                            <h3>Secondary Color</h3>
                            <a-button type="primary" @click="secColorCP = !secColorCP" v-bind:style="{backgroundColor: secColor, borderColor: secColor}">
                                Select Color
                            </a-button>
                            <swatches-picker v-if="secColorCP" :value="secColor" @input="setSecColor($event.hex)" :disableAlpha="true" />
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
                        <div class="settings__modal">
                            <a-button type="primary" @click="menuSettings">More Settings</a-button>
                            <a-modal title="Modify Menu Content" v-model="showMenuSettings" onOk="saveSettings" :style="modalStyle">
                                <template slot="footer">
                                    <a-button key="back" @click="menuCancel">Cancel</a-button>
                                    <a-button key="submit" type="primary" :loading="loading" @click="saveMenuSettings">Save</a-button>
                                </template>
                                <a-collapse defaultActiveKey="1" accordion>
                                    <a-collapse-panel header="Upload Logo" key="1" :showArrow="false">
                                        <div class="settings__modal-item">
                                            <p>Logo</p>
                                            <div class="settings__upload">
                                                <a-button type="primary" id="upload_widget" @click="uploadWidget()">
                                                    Upload Logo
                                                </a-button>
                                            </div>
                                        </div>
                                        <div class="settings__modal-item">
                                            <p>Text Logo</p>
                                            <a-button type="primary" size="small" @click="navLogoTextCP = !navLogoTextCP">
                                                Select Color
                                            </a-button>
                                            <swatches-picker v-if="navLogoTextCP" :value="navLogoTextColor" @input="setNavLogoTextColor($event.hex)" :disableAlpha="true" />
                                        </div>
                                        <div class="settings__modal-item">
                                            <p>Text Logo Size</p>
                                            <a-slider @change="setNavLogoTextSize" :min="10" :max="50" :defaultValue="navLogoTextSize" />
                                        </div>
                                    </a-collapse-panel>
                                    <a-collapse-panel header="Menu Type" key="2" :showArrow="false">
                                        <div class="settings__modal-item">
                                            <p>Choose Menu Type</p>
                                                <a-select :defaultValue="navType" style="width: 200px" @change="setNavType">
                                                    <a-select-option value="navFixed">Fixed Menu</a-select-option>
                                                    <a-select-option value="navTrans">Transparent Menu</a-select-option>
                                                </a-select>
                                        </div>
                                    </a-collapse-panel>
                                </a-collapse>
                            </a-modal>
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
                                <a-radio-group @change="setHeroLayout($event.target.value)" :defaultValue="heroLayout">
                                    <a-radio :style="radioStyle" :value="1">Left</a-radio>
                                    <a-radio :style="radioStyle" :value="2">Centered</a-radio>
                                    <a-radio :style="radioStyle" :value="3">Right</a-radio>
                                </a-radio-group>
                                <div class="settings__modal">
                                    <a-button type="primary" @click="heroSettings">More Settings</a-button>
                                    <a-modal title="Modify Hero Content" v-model="showHeroSettings" onOk="saveSettings" :style="modalStyle">
                                        <template slot="footer">
                                            <a-button key="back" @click="heroCancel">Cancel</a-button>
                                            <a-button key="submit" type="primary" :loading="loading" @click="saveHeroSettings">Save</a-button>
                                        </template>
                                        <a-collapse defaultActiveKey="1" accordion>
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
                                                        <a-button type="primary" @click="uploadWidget()">
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
                                                        <a-button type="primary" @click="uploadWidget()">
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
                        </a-collapse-panel>
                        <a-collapse-panel header="Collection" key="2" :showArrow="false">
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
                                    <a-collapse defaultActiveKey="1" accordion>
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
                                                    <a-button type="primary" @click="uploadWidget()">
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
                                                    <a-button type="primary" @click="uploadWidget()">
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
                                                    <a-button type="primary" @click="uploadWidget()">
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
                        </a-collapse-panel>
                        <a-collapse-panel header="Products" key="3" :showArrow="false">
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
                                        <a-collapse defaultActiveKey="1" accordion>
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
                        </a-collapse-panel>
                        <a-collapse-panel header="Newsletter" key="4" :showArrow="false">
                            <div class="settings__item">
                                <div class="settings__switch">
                                    <h3>Show</h3>
                                    <a-switch :defaultChecked="newsletterShow" @change="setNewsletterShow" size="small" />
                                </div>
                                <h3>Newsletter Layout</h3>
                                <a-radio-group @change="setNewsletterLayout($event.target.value)" :defaultValue="newsletterLayout">
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
                                <a-radio-group @change="setFooterLayout($event.target.value)" :defaultValue="footerLayout">
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
                                    <a-switch :defaultChecked="subfooterShow" @change="setSubfooterShow" size="small" />
                                </div>
                                <h3>Subfooter Layout</h3>
                                <a-radio-group @change="setSubfooterLayout($event.target.value)" :defaultValue="subfooterLayout">
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
                <a-button size="large" block  @click.prevent="gotoDashboard()"><a-icon type="dashboard" />Return to Dashboard</a-button>
            </div>
        </div>
    </div>
</template>

<script>
import ThemePicker from './components/ThemePicker';
import { Swatches } from 'vue-color';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    'swatches-picker': Swatches,
    ThemePicker,
  },
  data: () => ({
    loading: false,
    size: 'default',
    radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
    },
    modalStyle: {
        margin: '0 50px 0 0'
    },
    newHeroTitle: '',
    showThemes: false,
    showHeroSettings: false,
    showMenuSettings: false,
    showProductSettings: false,
    showCollectionSettings: false,
    priColorCP: false,
    secColorCP: false,
    navLogoTextCP: false,
    productTitleBgCP: false,
    heroColorCP: false,
    heroTitleCP: false,
    heroContentCP: false,
    heroBtnPriCP: false,
    heroBtnSecCP: false,
    collectionBgCP: false,
    collectionBtnCP: false,
    collectionOneBgCP: false,
    collectionTwoBgCP: false,
    collectionThreeBgCP: false,
    productTitleBgCP: false,
    prodTitleMainCP: false,
    prodTitleSubCP: false,
    prodBgCP: false,
  }),
  computed: {
    ...mapGetters([
      'styles',
      'themeName',
      'priColor',
      'secColor',
      'priFont',
      'secFont',
      'navFont',
      'navShow',
      'navType',
      'navLayout',
      'navLogoTextColor',
      'navLogoTextSize',
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
      'collectionShow',
      'collectionLayout',
      'collectionBgColor',
      'collectionBtnColor',
      'collectionOneShow',
      'collectionOneBg',
      'collectionOneTitle',
      'collectionOneSubtitle',
      'collectionOneImg',
      'collectionOneBtn',
      'collectionOneLink',
      'collectionTwoShow',
      'collectionTwoBg',
      'collectionTwoImg',
      'collectionTwoTitle',
      'collectionTwoSubtitle',
      'collectionTwoBtn',
      'collectionTwoLink',
      'collectionThreeShow',
      'collectionThreeBg',
      'collectionThreeImg',
      'collectionThreeTitle',
      'collectionThreeSubtitle',
      'collectionThreeBtn',
      'collectionThreeLink',
      'productTitleShow',
      'productTitleLayout',
      'productTitleBgColor',
      'productTitleMain',
      'productTitleMainColor',
      'productTitleSub',
      'productTitleSubColor',
      'productShow',
      'productLayout',
      'productBg',
      'newsletterShow',
      'newsletterLayout',
      'footerShow',
      'footerLayout',
      'subfooterShow',
      'subfooterLayout',
      'storeName'
    ])
  },
  methods: {
    gotoDashboard(){
        console.log("Jooo")
        window.location.href = `https://${window.location.host}/dashboard`;
    },
    //Theme Settings Modal
    changeThemes() {
        this.showThemes = true;
    },
    saveThemes() {
        this.loading = true;
        setTimeout(() => {
            this.showThemes = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    themesCancel(e) {
        this.showThemes = false;
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
    
    setPriFont(value) {
        this.$store.commit('setPriFont', value);
    },
    setSecFont(value) {
        this.$store.commit('setSecFont', value);
    },
    setNavFont(value) {
        this.$store.commit('setNavFont', value);
    },
    setHeroHeight(value) {
        this.$store.commit('setHeroHeight', value);
    },
    setNavType(value) {
        this.$store.commit('setNavType', value);
    },
    setNavLogoTextSize(value) {
        this.$store.commit('setNavLogoTextSize', value);
    },

    //Display
    setNavShow(checked) {
        this.$store.commit('setNavShow', checked);
    },
    setHeroShow(checked) {
        this.$store.commit('setHeroShow', checked);
    },
    setHeroBgImgShow(checked) {
        this.$store.commit('setHeroBgImgShow', checked);
    },
    setHeroImageShow(checked) {
        this.$store.commit('setHeroImageShow', checked);
        this.showHeroImageUpload = checked;
    },
    setCollectionShow(checked) {
        this.$store.commit('setCollectioShow', checked);
    },
    setCollectionOneShow(checked) {
        this.$store.commit('setCollectionOneShow', checked);
    },
    setCollectionTwoShow(checked) {
        this.$store.commit('setCollectionTwoShow', checked);
    },
    setCollectionThreeShow(checked) {
        this.$store.commit('setCollectionThreeShow', checked);
    },
    setProductTitleShow(checked) {
        this.$store.commit('setProductTitleShow', checked);
    },
    setProductShow(checked) {
        this.$store.commit('setProductShow', checked);
    },
    setProductTitleShow(checked) {
        this.$store.commit('setProductTitleShow', checked);
    },
    setNewsletterShow(checked) {
        this.$store.commit('setNewsletterShow', checked);
    },
    setFooterShow(checked) {
        this.$store.commit('setFooterShow', checked);
    },
    setSubfooterShow(checked) {
        this.$store.commit('setSubfooterShow', checked);
    },
    //END

    //Collection Settings Modal
    collectionSettings() {
        this.showCollectionSettings = true;
    },
    saveCollectionSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showCollectionSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    collectionCancel(e) {
        this.showCollectionSettings = false;
    },
    //END

    //Product Settings Modal
    productSettings() {
        this.showProductSettings = true;
    },
    saveProductSettings(e) {
        this.loading = true;
        setTimeout(() => {
            this.showProductSettings = false;
            this.loading = false;
        }, 1000);
        this.$message.success('Storefront design saved successfully!');
    },
    productCancel(e) {
        this.showProductSettings = false;
    },
    //END

    ...mapMutations([
      'setPriColor',
      'setSecColor',
      'setNavLayout',
      'setNavLogoTextColor',
      'setNavLogoTextSize',
      'setCollectionLayout',
      'setCollectionBgColor',
      'setCollectionBtnColor',
      'setCollectionOneBg',
      'setCollectionOneTitle',
      'setCollectionOneSubtitle',
      'setCollectionOneBtn',
      'setCollectionOneLink',
      'setCollectionTwoBg',
      'setCollectionTwoTitle',
      'setCollectionTwoSubtitle',
      'setCollectionTwoBtn',
      'setCollectionTwoLink',
      'setCollectionThreeBg',
      'setCollectionThreeTitle',
      'setCollectionThreeSubtitle',
      'setCollectionThreeBtn',
      'setCollectionThreeLink',
      'setProductTitleLayout',
      'setProductTitleBgColor',
      'setProductTitleMain',
      'setProductTitleMainColor',
      'setProductTitleSub',
      'setProductTitleSubColor',
      'setProductLayout',
      'setProductBg',
      'setNewsletterLayout',
      'setFooterLayout',
      'setSubfooterLayout',
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
    
    //Notification on Save
    openNotificationWithIcon(type) {
      this.$notification[type]({
      message: 'Success',
      description:
          'You have saved your storefront design successfully.',
      });
    },

    uploadWidget() {
      // TODO: Update present to support logo dimensions and use versions for updating logos
      // Save image with params e.g. heroBg, logo ...
      const myWidget = cloudinary.createUploadWidget(
          {
          cloudName: "mercurie",
          apiKey: "486138948246678",
          // uploadPreset: "mercuriemartlogos",
          uploadPreset: "preset1",
          multiple: false,
          cropping: true,
          defaultSource: "local",
          folder: "mercuriemartlogos",
          public_id: "testStore"
          },
          (error, result) => {
          if (!error && result && result.event === "success") {
              console.log("Done! Here is the image info: ", result.info);
          } else {
              console.log(error);
          }
          }
      );
      return myWidget.open()
    }
  },
  mounted(){
    // console.log(this.styles)
  },
  watch: {
    styles: {
      deep: true,
      handler(newStyles) {
        this.$store.dispatch("products/saveStoreStyles", {
          payload: newStyles
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './_index';
</style>