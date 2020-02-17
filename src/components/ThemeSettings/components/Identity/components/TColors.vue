<template>
  <div class="settings__color">
    <div class="settings__item">
      <h3>Primary Color</h3>
      <a-button type="primary" :size="size" @click="priColorCP = !priColorCP" v-bind:style="{backgroundColor: priColor, borderColor: priColor}">
          Set Color
      </a-button>
      <swatches-picker v-if="priColorCP" :value="priColor" @input="setPriColor($event.hex)" :disableAlpha="true" />
    </div>
    <div class="settings__item">
      <h3>Secondary Color</h3> 
      <a-button type="primary" :size="size" @click="secColorCP = !secColorCP" v-bind:style="{backgroundColor: secColor, borderColor: secColor}">
          Set Color
      </a-button>
      <swatches-picker v-if="secColorCP" :value="secColor" @input="setSecColor($event.hex)" :disableAlpha="true" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { Swatches } from 'vue-color'; 

export default {
  data: () => ({
    size: 'small',
    priColorCP: false,
    secColorCP: false,
  }),
  components: {
    'swatches-picker': Swatches,
  },
  computed: {
    ...mapGetters([
      'priColor',
      'secColor'
    ])
  },
  methods: {
    ...mapMutations([
      'setPriColor',
      'setSecColor',
    ])
  }
}
</script>
