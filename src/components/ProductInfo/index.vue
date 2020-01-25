<template>
    <div class="product__info">
        <div class="product__info-name">
            <h1>{{singleProd.name}}</h1>
            <a-rate v-model="rating" />
            <h4>(2 ratings)</h4>
            <h2>{{singleProd.basePrice}}</h2>
            <!-- {{singleProds}} -->
        </div>
        <!-- <div class="product__info-description">
            <p>{{singleProd.description}}</p>
            <p>Logitech Wireless Mouse M186 is compatible with all brands of
            laptops and computers. It has been integrated with Bluetooth technology
            which ensures it has a great range of about 10 metres. It communicates
            and connects to devices through radio.</p>
        </div> -->

        <div class="product__info-variant">
            <div v-for="(type, index) in attrType" :key="index" :value="type">
                <h4>{{type}}</h4>
                <a-button-group>
                    <a-button v-for="(val, index) in attrVal" :key="index">{{val}}</a-button>
                    <!-- <a-button>M</a-button>
                    <a-button>L</a-button>
                    <a-button>XL</a-button> -->
                </a-button-group>
            </div>
        </div>
        <div class="product__info-variant">
            <!-- <h4>Variant</h4>
            <a-select defaultValue="variant" @change="selectVariant">
                <a-select-option v-for="(type, index) in attrType" :key="index" :value="type">{{type}}</a-select-option>
            </a-select> -->
        </div>
        <div class="product__info-quantity">
            <h4>Quantity</h4>
            <a-input-number :min="1" :max="10" v-model="value" @change="changeQuant" />
        </div>
        <div class="product__info-cart">
            <a-button type="primary" icon="plus" :size="btnSize" block>Add to Cart</a-button>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            value: 1,
            btnSize: 'large',
            singleProd: {},
            rating: 4,
            variantAttr: {},
            attrType: [],
            attrVal: [],
            loading: false,
            dupObj: {},
            distObj: {}
        }),

        computed: {
            singleProds(){
                return this.$store.getters["products/getProduct"];
            }
        },
        methods: {
            changeQuant(value) {
                console.log('changed', value)
            },
            selectVariant(value) {
                console.log(`selected ${value}`)
            },
            zip(arr1, arr2, out={}){
                let newArr = [];
                let obj = {}
                arr1.map( (val, idx) => {
                    obj = { [val]: arr2[idx]}
                    newArr.push(obj);
                } );
                return newArr;
            },
            mergeArr(arr, distinctKeys){
                console.log(arr);
                let bigArr = new Array();
                arr.map( (val, index) => {
                    if(index <= distinctKeys.length){
                        bigArr[`${distinctKeys}`]
                    }
                })
                // let  bigArr,smallArr = new Array();
                // let obj= {};
                // let counter = 0;
                // arr.map( (val, index) => {
                //     distinctKeys.map ( (item, indx) => {
                //         if(Object.keys(val) == item) {
                //             obj = { [`${item}`] : [item] = val[`${item}`] }
                //         }

                //     })
                // })
            },
            formatVariantsAttr(variantArr) {
                let typesArr = [];
                let valuesArr = [];
                let newAtrr = {};
                variantArr.map(variantAttr => {
                    variantAttr.variantAttributes.map( item => {
                        typesArr.push(item.type);
                        valuesArr.push(item.value)
                    })
                })

                newAtrr =  { type: typesArr, value: valuesArr };
                this.loading = true;

                return newAtrr;
            }
        },

        async beforeCreate(){
            //get slugUrl
            let slug = this.$route.params.slug;
            
            this.singleProd = await this.$store.dispatch('products/fetchSingleProducts',{
                prodId: slug
            });

            this.variantAttr =  this.formatVariantsAttr(this.singleProd.variants);
            this.attrType= Array.from(new Set(this.variantAttr.type));
            this.attrVal= this.variantAttr.value;

            console.log(this.attrVal)

            // let newObj = this.zip(this.variantAttr.type, this.variantAttr.value);
            

            // console.log(newObj);
            // let check = this.mergeArr(newObj, this.attrType)


        }
    }
</script>

<style lang="scss" scoped>
    @import './_index';
</style>