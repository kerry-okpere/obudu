<template>
  <div class="product__info">
    <div class="product__info-name">
      <h1>{{ singleProd.name }}</h1>
      <!-- <h1>{{ selectedVariant }}</h1> -->
      <a-rate v-model="rating" />
      <h4>(2 ratings)</h4>
      <h2>&#x20A6;{{ formatPrice(selectedVariant.price || singleProd.basePrice) }}</h2>
      <!-- {{singleProds}} -->
    </div>
    <!-- <div class="product__info-description">
            <p>{{singleProd.description}}</p>
            <p>Logitech Wireless Mouse M186 is compatible with all brands of
            laptops and computers. It has been integrated with Bluetooth technology
            which ensures it has a great range of about 10 metres. It communicates
            and connects to devices through radio.</p>
        </div> -->

    <!-- <div class="product__info-variant">
      <h4>Variants</h4>
      <a-select defaultValue="Select Variant" @change="selectVariant">
        <a-select-option
          v-for="(variant, index) in singleProd.variants"
          :key="index"
          :value="variant.index"
          :v-model="variantId"
        >
          <div>
            <span v-for="(va, i) in variant.variantAttributes" :key="i">
              {{ va.value }}
            </span>
            <span v-for="(va, i) in variant.variantAttributes" :key="i">
              {{ va.value }}
            </span>
          </div>
        </a-select-option>
      </a-select>
    </div> -->

    <div class="product__info-variant">
      <div v-for="(va, index) in attrType" :key="index">
        <h4>{{ va }}</h4>

        <a-button-group v-for="(value, index) in Array.from(new Set(distinctTypes[va]))" :key="index">
            <a-button> {{value[va]}} </a-button>
        </a-button-group>
      </div>
    </div>

    <!-- <div class="product__info-variant">
      <div v-for="(va, index) in selectedVariant.variantAttributes" :key="index">
        <h4>{{ va.type }}</h4>
        <a-button-group>
            <a-button> {{va.value}} </a-button>
        </a-button-group>
      </div>
    </div> -->

    <div class="product__info-quantity">
      <h4>Quantity</h4>
      <a-input-number
        :min="1"
        :max="10"
        v-model="value"
        @change="changeQuant"
      />
    </div>
    <div class="product__info-cart">
      <a-button type="primary" icon="plus" :size="btnSize" block
        >Add to Cart</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    btnSize: "large",
    singleProd: {},
    rating: 4,
    variantAttr: {},
    attrType: [],
    attrVal: [],
    loading: false,
    dupObj: {},
    distObj: {},
    variantId: "",
    distinctTypes: "",
    selectedVariant: {}
  }),

  computed: {
    singleProds() {
      return this.$store.getters["products/getProduct"];
    }
  },
  methods: {
    changeQuant(value) {
      console.log("changed", value);
    },
    selectVariant(index) { // Listening to variant options 
      this.selectedVariant = this.singleProd.variants.filter(v => v.index == index)[0]
    },
    zip(arr1, arr2, out = {}) {
      let newArr = [];
      let obj = {};
      arr1.map((val, idx) => {
        obj = { [val]: arr2[idx] };
        newArr.push(obj);
      });
      return newArr;
    },
    mergeArr(arr, distinctKeys) {
      let bigArr = new Array();
      arr.map((val, index) => {
          let key = Object.keys(val);
          distinctKeys.map(item => {
            if(key == item){
                if(!bigArr[key]){
                  bigArr[key] = new Array(val);
                } else if(bigArr[key].length >= 1){
                    bigArr[key].push(val)
                }
            }
          })
      });

      return bigArr;
    },
    formatVariantsAttr(variantArr) {
      let typesArr = [];
      let valuesArr = [];
      let newAtrr = {};
      variantArr.map(variantAttr => {
        variantAttr.variantAttributes.map(item => {
          typesArr.push(item.type);
          valuesArr.push(item.value);
        });
      });

      newAtrr = { type: typesArr, value: valuesArr };
      this.loading = true;

      return newAtrr;
    },
    distinctTypesFunc(arr, distinctKeys){
      let bigArr = new Array();
      distinctKeys.map(item => { 
        arr[item].map( ele => {
          console.log(ele);
        })
      })

    },
    formatPrice(price){
       // Apply currency
      return Number(price.replace(/\D/g, "").slice(0, -2))
    }
  },

  async beforeCreate() {
    //get slugUrl
    let slug = this.$route.params.slug;

    this.singleProd = await this.$store.dispatch(
      "products/fetchSingleProducts",
      {
        prodId: slug
      }
    );
    this.variantId = this.singleProd.variants[0].index; // Setting initial variant

    // console.log(this.singleProd.variants);

    this.variantAttr = this.formatVariantsAttr(this.singleProd.variants);
    // console.log("Variant Attributes", this.variantAttr);
    this.attrType = Array.from(new Set(this.variantAttr.type));
    this.attrVal =  this.variantAttr.value;

    // console.log(this.attrVal);

    let newObj = this.zip(this.variantAttr.type, this.variantAttr.value);

    let check = this.distinctTypesFunc(this.mergeArr(newObj, this.attrType), this.attrType) ;
    this.distinctTypes = this.mergeArr(newObj, this.attrType);

    console.log(check);
  },
  watch: {
    variantId(index) { // Setting initial variant
      this.selectedVariant = this.singleProd.variants.filter(
        v => v.index == index
      )[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_index";
</style>
