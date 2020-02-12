<template>
  <div class="product__info">
    <div class="product__info-name">
      <h1>{{ singleProd.name }}</h1>
      <!-- <h1>{{ selectedVariant }}</h1> -->
      <!-- <a-rate v-model="rating" />
      <h4>(2 ratings)</h4> -->
      <h2>&#x20A6;{{ formatPrice(selectedVariant.price || singleProd.basePrice) }}</h2>
      <!-- {{singleProds}} -->
    </div>
    <div class="product__info-description">
      <p>{{singleProd.description}}</p>
    </div>

    <div class="product__info-variant">
      <div v-for="(va, index) in attrType" :key="index">
        <h4>{{ va }}</h4>
        <a-radio-group @change="onChange" :v-model="value">
          <a-radio-button
            v-for="(value, index) in attrVal[va]"
            :key="index"
            :value="`${va}:${value}`"
          >{{ value }}</a-radio-button>
        </a-radio-group>
      </div>
    </div>

    <div class="product__info-quantity">
      <h4>Quantity</h4>
      <a-input-number :min="1" :max="10" v-model="value" @change="changeQuant" />
    </div>
    <div class="product__info-cart">
      <s-button v-if="!selectedVariant" :pri="priColor" :sec="secColor" class="disabled">Add to Cart</s-button>
      <s-button v-else :pri="priColor" :sec="secColor" @click="addToCart(selectedVariant)"><a-icon type="plus" class="pr-2" />Add to Cart</s-button>
      <!-- <a-button v-if="!selectedVariant" :size="btnSize" block disabled>Add to Cart</a-button> -->
      <!-- <a-button v-else type="primary" icon="plus" :size="btnSize" @click="addToCart(selectedVariant)" block >Add to Cart</a-button> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    value: 1,
    btnSize: "large",
    singleProd: {},
    rating: 4,
    variantAttr: {},
    attrType: [],
    attrVal: [],
    variantsArr: [],
    loading: false,
    dupObj: {},
    distObj: {},
    variantId: "",
    distinctTypes: "",
    selectedVariant: false,
    hasDefaultVariant: false
  }),

  computed: {
    singleProds() {
      return this.$store.getters["products/getProduct"];
    },
    ...mapGetters([
      'priColor',
      'secColor'
    ])
  },
  methods: {
    changeQuant(value) {
      console.log("changed", value);
    },
    addToCart(selectedVariant) {
      let prodObj = selectedVariant;
      prodObj.selectedQuantity = this.value;
      let product = this.$store.dispatch("addProductToCart", prodObj);
      this.$message.success('Added to cart!');
    },
    openNotification() {
      this.$notification.open({
        message: "Product added to cart",
        duration: 1.5
      });
    },
    selectVariant(index) {
      // Listening to variant options
      this.selectedVariant = this.singleProd.variants.filter(
        v => v.index == index
      )[0];
    },
    formatPrice(price) {
      // Apply currency
      if (typeof price !== "number") {
        if(price !== undefined){
          return Number(price.replace(/\D/g, "").slice(0, -2));
        }
      } else {
        return price;
      }
    },
    onChange(e) {
      let variant = e.target.value;
      let variantArr = variant.split(":");
      let newAtrr = [];

      this.variantsArr[variantArr[0]] = variantArr[1];
      let finalArr = this.variantsArr;
      for (let [key, value] of Object.entries(finalArr)) {
        newAtrr.push(value);
      }

      let selectedVariant = this.findVariant(newAtrr.toString());
      if (selectedVariant !== undefined) this.selectedVariant = selectedVariant;
    },

    formatInfo(variants, types) {
      let variantsArr = new Array();
      let saturationVal = variants.length;
      types.map((type, index) => {
        variants.map(item => {
          let newArr = item.variantValues.split(",");
          if (!variantsArr[type]) {
            variantsArr[type] = new Array(newArr[index]);
          } else {
            variantsArr[type].push(newArr[index]);
          }

          if (variantsArr[type].length == saturationVal) {
            variantsArr[type] = Array.from(new Set(variantsArr[type]));
          }
        });
      });

      return variantsArr;
    },

    findVariant(array) {
      return this.singleProd.variants.find(item => item.variantValues == array);
    }
  },
  async created() {
    //get slugUrl
    let slug = this.$route.params.slug;

    this.singleProd = await this.$store.dispatch(
      "products/fetchSingleProducts",
      {
        prodId: slug
      }
    );

    if(this.singleProd.variants.length <= 1){
      this.hasDefaultVariant = true;
      this.selectedVariant = this.singleProd.variants[0];
      return;
    }

    console.log("here");

    let singleProduct = this.singleProd;
    let variantTypes = singleProduct.variants[0].variantTypes;
    this.attrType = variantTypes.split(",");
    let newVariantValues = this.formatInfo(
      singleProduct.variants,
      this.attrType
    );

    this.attrVal = newVariantValues;
    // this.variantId = this.singleProd.variants[0].index; // Setting initial variant
  },
  watch: {
    variantId(index) {
      // Setting initial variant
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
