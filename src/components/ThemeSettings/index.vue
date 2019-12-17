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
                <h1>Store Name</h1>
                <a-divider />
                <div class="d-inline-flex">
                    <div>
                        <p class="mb-1">Active theme</p>
                        <h3>Venus</h3>
                    </div>
                    <a-button>Change</a-button>
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
                                <a-select-option value="fontPriLato" class="fontPriLato">Lato</a-select-option>
                                <a-select-option value="fontPriPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
                                <a-select-option value="fontPriRoboto" class="fontPriRoboto">Roboto</a-select-option>
                                <a-select-option value="fontPriOpensans" class="fontPriOpensans">Open Sans</a-select-option>
                                <a-select-option value="fontPriPoppins" class="fontPriPoppins">Poppins</a-select-option>
                                <a-select-option value="fontPriAbril" class="fontPriAbril">Abril Fatface</a-select-option>
                                <a-select-option value="fontPriCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
                                <a-select-option value="fontPriMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
                                <a-select-option value="fontPriCormorant" class="fontPriCormorant">Cormorant Garamond</a-select-option>
                                <a-select-option value="fontPriNunito" class="fontPriNunito">Nunito</a-select-option>
                            </a-select>
                        </div>
                        <div class="settings__item">
                            <h3>Secondary Font</h3>
                            <a-select :defaultValue="secFont" :size="size" style="width: 200px" @change="setSecFont">
                                <a-select-option value="fontSecLato" class="fontPriLato">Lato</a-select-option>
                                <a-select-option value="fontSecPlayfair" class="fontPriPlayfair">Playfair Display</a-select-option>
                                <a-select-option value="fontSecRoboto" class="fontPriRoboto">Roboto</a-select-option>
                                <a-select-option value="fontSecOpensans" class="fontPriOpensans">Open Sans</a-select-option>
                                <a-select-option value="fontSecPoppins" class="fontPriPoppins">Poppins</a-select-option>
                                <a-select-option value="fontSecAbril" class="fontPriAbril">Abril Fatface</a-select-option>
                                <a-select-option value="fontSecCalistoga" class="fontPriCalistoga">Calistoga</a-select-option>
                                <a-select-option value="fontSecMontserrat" class="fontPriMontserrat">Montserrat</a-select-option>
                                <a-select-option value="fontSecCormorant" class="fontPriCormorant">Cormorant Garamond</a-select-option>
                                <a-select-option value="fontSecNunito" class="fontPriNunito">Nunito</a-select-option>
                            </a-select>
                        </div>
                    </a-collapse-panel>
                    <a-collapse-panel header="Colors" key="2" :showArrow="false">
                        <div class="settings__item">
                            <h3>Primary Color</h3>
                            <a-button type="primary" @click="showPriColorCP = !showPriColorCP" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">
                                Select Color
                            </a-button>
                            <swatches-picker v-if="priColorCP" :value="priColor" @input="setPriColor($event.hex)" :disableAlpha="true" />
                        </div>
                        <div class="settings__item">
                            <h3>Secondary Color</h3>
                            <a-button type="primary" @click="showSecColorCP = !showSecColorCP" v-bind:style="{backgroundColor: secColor, borderColor: secColor}">
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
                            <a-modal title="Modify Menu Content" v-model="showMenuSettings" onOk="saveSettings">
                                <template slot="footer">
                                    <a-button key="back" @click="menuCancel">Cancel</a-button>
                                    <a-button key="submit" type="primary" :loading="loading" @click="saveMenuSettings">Save</a-button>
                                </template>
                                <a-collapse defaultActiveKey="1" accordion>
                                    <a-collapse-panel header="Upload Logo" key="1" :showArrow="false">
                                        <div class="settings__modal-item">
                                            <p>Logo</p>
                                            <div class="settings__upload">
                                                <a-button type="primary">
                                                    Upload Logo
                                                </a-button>
                                            </div>
                                        </div>
                                        <div class="settings__modal-item">
                                            <p>Text Logo</p>
                                            <a-button type="primary" size="small" @click="showNavLogoTextCP = !showNavLogoTextCP">
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
                                    <a-modal title="Modify Hero Content" v-model="showHeroSettings" onOk="saveSettings">
                                        <template slot="footer">
                                            <a-button key="back" @click="heroCancel">Cancel</a-button>
                                            <a-button key="submit" type="primary" :loading="loading" @click="saveHeroSettings">Save</a-button>
                                        </template>
                                        <a-collapse defaultActiveKey="1" accordion>
                                            <a-collapse-panel header="Hero Background" key="1" :showArrow="false">
                                                <div class="settings__modal-item">
                                                    <p>Background Color</p>
                                                    <a-button type="primary" @click="showHeroColorCP = !showHeroColorCP" v-bind:style="{backgroundColor: heroColor, borderColor: heroColor}">
                                                        Select Color
                                                    </a-button>
                                                    <swatches-picker v-if="showHeroColorCP" :value="heroColor" @input="setHeroColor($event.hex)" :disableAlpha="true" />
                                                </div>
                                                <div class="settings__modal-item">
                                                    <p>Background Image</p>
                                                    <div class="settings__switch">
                                                        <a-switch :defaultChecked="heroBgImgShow" @change="setHeroBgImgShow" />
                                                    </div>
                                                    <div class="settings__upload">
                                                        <a-button type="primary">
                                                            Upload Image
                                                        </a-button>
                                                    </div>
                                                </div>
                                            </a-collapse-panel>
                                            <a-collapse-panel header="Hero Content" key="2" :showArrow="false">
                                                <div class="settings__modal-item">
                                                    <p>Hero Title</p>
                                                    <a-input @change="setHeroTitle($event.target.value)" :placeholder="heroTitle" />
                                                    <a-button type="primary" size="small" @click="showHeroTitleCP = !showHeroTitleCP">
                                                        Select Color
                                                    </a-button>
                                                    <swatches-picker v-if="heroTitleCP" :value="heroTitleColor" @input="setHeroTitleColor($event.hex)" :disableAlpha="true" />
                                                </div>
                                                <div class="settings__modal-item">
                                                    <p>Hero Content</p>
                                                    <a-textarea @change="setHeroContent($event.target.value)" :placeholder="heroContent" autosize />
                                                    <a-button type="primary" size="small" @click="showHeroContentCP = !showHeroContentCP">
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
                                                        <a-button type="primary">
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
                                                    <a-button type="primary" size="small" @click="showHeroBtnPriCP = !showHeroBtnPriCP" v-bind:style="{backgroundColor: heroBtnPri, borderColor: heroBtnPri, color: heroBtnSec}">
                                                        Select Color
                                                    </a-button>
                                                    <swatches-picker v-if="heroBtnPriCP" :value="heroBtnPri" @input="setHeroBtnPri($event.hex)" :disableAlpha="true" />
                                                </div>
                                                <div class="settings__modal-item">
                                                    <p>Secondary Color</p>
                                                    <a-button type="primary" size="small" @click="showHeroBtnSecCP = !showHeroBtnSecCP" v-bind:style="{backgroundColor: heroBtnPri, borderColor: heroBtnPri, color: heroBtnSec}">
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
                                <!-- <h3>Collection Layout</h3>
                                <a-radio-group @change="setCollectionLayout($event.target.value)" :defaultValue="collectionLayout">
                                    <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
                                    <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
                                    <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
                                </a-radio-group> -->
                            </div>
                            <div class="settings__modal">
                                <a-button type="primary" @click="collectionSettings">More Settings</a-button>
                                <a-modal title="Modify Collection Content" v-model="showCollectionSettings" onOk="saveCollectionSettings">
                                    <template slot="footer">
                                        <a-button key="back" @click="collectionCancel">Cancel</a-button>
                                        <a-button key="submit" type="primary" :loading="loading" @click="saveCollectionSettings">Save</a-button>
                                    </template>
                                    <a-collapse defaultActiveKey="1" accordion>
                                        <a-collapse-panel header="Collection Settings" key="1" :showArrow="false">
                                            <div class="settings__modal-item">
                                                <p>Button Color</p>
                                                <a-button type="primary" @click="showCollectionBtnCP = !showCollectionBtnCP" v-bind:style="{backgroundColor: collectionBtnColor, borderColor: collectionBtnColor}">
                                                    Select Color
                                                </a-button>
                                                <swatches-picker v-if="collectionBtnCP" :value="collectionBtnColor" @input="setCollectionBtnColor($event.hex)" :disableAlpha="true" />
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
                                                <a-button type="primary" @click="showCollectionOneBgCP = !showCollectionOneBgCP" v-bind:style="{backgroundColor: collectionOneBg, borderColor: collectionOneBg}">
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
                                                    <a-button type="primary">
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
                                                <a-button type="primary" @click="showCollectionTwoBgCP = !showCollectionTwoBgCP" v-bind:style="{backgroundColor: collectionTwoBg, borderColor: collectionTwoBg}">
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
                                                    <a-button type="primary">
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
                                                <a-button type="primary" @click="showCollectionThreeBgCP = !showCollectionThreeBgCP" v-bind:style="{backgroundColor: collectionThreeBg, borderColor: collectionThreeBg}">
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
                                                    <a-button type="primary">
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
                                    <a-button type="primary" @click="productSettings">More Settings</a-button>
                                    <a-modal title="Modify Product Content" v-model="showProductSettings" onOk="saveProductSettings">
                                        <template slot="footer">
                                            <a-button key="back" @click="productCancel">Cancel</a-button>
                                            <a-button key="submit" type="primary" :loading="loading" @click="saveProductSettings">Save</a-button>
                                        </template>
                                        <a-collapse defaultActiveKey="1" accordion>
                                            <a-collapse-panel header="Product Background" key="1" :showArrow="false">
                                                <div class="settings__modal-item">
                                                <p>Product Section Background</p>
                                                    <a-button type="primary" @click="showProdBgCP = !showProdBgCP" v-bind:style="{backgroundColor: productBg, borderColor: productBg}">
                                                        Select Color
                                                    </a-button>
                                                    <swatches-picker v-if="prodBgCP" :value="productBg" @input="setProductBg($event.hex)" :disableAlpha="true" />
                                                </div>
                                            </a-collapse-panel>
                                            <a-collapse-panel header="Product Section Title" key="2" :showArrow="false">
                                                <div class="settings__modal-item">
                                                    <p>Background Color</p>
                                                    <a-button type="primary" @click="showProductTitleBgCP = !showProductTitleBgCP" v-bind:style="{backgroundColor: productTitleBgColor, borderColor: productTitleBgColor}">
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
                                                        <a-button type="primary" size="small" @click="showProdTitleMainCP = !showProdTitleMainCP" v-bind:style="{backgroundColor: productTitleMainColor, borderColor: productTitleMainColor}">
                                                            Select Color
                                                        </a-button>
                                                        <swatches-picker v-if="prodTitleMainCP" :value="productTitleMainColor" @input="setProductTitleMainColor($event.hex)" :disableAlpha="true" />
                                                    </div>
                                                    <div class="pb-3">
                                                        <a-input @change="setProductTitleSub($event.target.value)" :placeholder="productTitleSub" />
                                                        <a-button type="primary" size="small" @click="showProdTitleSubCP = !showProdTitleSubCP" v-bind:style="{backgroundColor: productTitleSubColor, borderColor: productTitleSubColor}">
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
                <a-button size="large" block><a-icon type="dashboard" />Return to Dashboard</a-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swatches } from 'vue-color'
import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            'swatches-picker': Swatches
        },

        data: () => ({
            loading: false,
            size: 'default',
            radioStyle: {
                display: 'block',
                height: '30px',
                lineHeight: '30px'
            },
            showHeroSettings: false,
            showHeroImageUpload: false,
            heroImageModal: false,
            heroImagePreview: '',
            newHeroTitle: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'hero.png',
                    status: 'done',
                    url: 'https://via.placeholder.com/500x300'
                }
            ],
            showMenuSettings: false,
            showCollectionSettings: false,
            showProductSettings: false,
            priColorCP: false,
            secColorCP: false,
            navLogoTextCP: false,
            productTitleBgCP: false,
            heroColorCP: false,
            heroTitleCP: false,
            heroContentCP: false,
            heroBtnPriCP: false,
            heroBtnSecCP: false,
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
                'priColor',
                'secColor',
                'priFont',
                'secFont',
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
                'subfooterLayout'
            ])
        },

        methods: {
            
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
                this.openNotificationWithIcon('success');
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
                this.openNotificationWithIcon('success');
            },
            heroCancel(e) {
                this.showHeroSettings = false;
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
            showPriColorCP() {
                this.priColorCP = true;
            },
            showSecColorCP() {
                this.secColorCP = true;
            },
            showNavLogoTextCP() {
                this.navLogoTextCP = true;
            },
            showHeroColorCP() {
                this.heroColorCP = true;
            },
            showHeroTitleCP() {
                this.heroTitleCP = true;
            },
            showHeroContentCP() {
                this.heroContentCP = true;
            },
            showCollectionBtnCP() {
                this.collectionBtnCP = true;
            },
            showCollectionOneBgCP() {
                this.collectionOneBgCP = true;
            },
            showCollectionTwoBgCP() {
                this.collectionTwoBgCP = true;
            },
            showCollectionThreeBgCP() {
                this.collectionThreeBgCP = true;
            },
            showProductTitleBgCP() {
                this.productTitleBgCP = true;
            },
            showProdTitleMainCP() {
                this.prodTitleMainCP = true;
            },
            showProdTitleSubCP() {
                this.prodTitleSubCP = true;
            },
            showProdBgCP() {
                this.prodBgCP = true;
            },
            showHeroBtnPriCP() {
                this.heroBtnPriCP = true;
            },
            showHeroBtnSecCP() {
                this.heroBtnSecCP = true;
            },
            //END

            setPriFont(value) {
                this.$store.commit('setPriFont', value);
            },
            setSecFont(value) {
                this.$store.commit('setSecFont', value);
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
                this.openNotificationWithIcon('success');
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
                this.openNotificationWithIcon('success');
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
            
        }
    }
</script>

<style lang="scss" scoped>
    @import './_index';
</style>