<template>
  <div class="settings__footer">
    <div class="settings__item">
      <div class="settings__switch">
        <h3>Show</h3>
        <a-switch :defaultChecked="footerShow" @change="setFooterShow" size="small" />
      </div>
      <div class="settings__modal-item">
        <h3>Footer Layout</h3>
        <a-select :defaultValue="footerLayout" style="width: 200px" @change="setFooterLayout($event.target.value)">
          <a-select-option :value="1">Layout One</a-select-option>
          <a-select-option :value="2">Layout Two</a-select-option>
          <a-select-option :value="3">Layout Three</a-select-option>
        </a-select>
      </div>
    </div>
    <div class="settings__item">
        <div class="settings__switch">
          <h3>Show</h3>
          <a-switch :defaultChecked="subfooterShow" @change="setSubfooterShow" size="small" />
        </div>
        <div class="settings__modal-item">
          <h3>Subfooter Layout</h3>
          <a-select :defaultValue="subfooterLayout" style="width: 200px" @change="setSubfooterLayout($event.target.value)">
            <a-select-option :value="1">Layout One</a-select-option>
            <a-select-option :value="2">Layout Two</a-select-option>
            <a-select-option :value="3">Layout Three</a-select-option>
          </a-select>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters ([
      'footerShow',
      'footerLayout',
      'subfooterShow',
      'subfooterLayout'
    ])
  },
  methods: {
    ...mapMutations ([
      'setFooterLayout',
      'setSubfooterLayout'
    ]),
    setFooterShow(checked) {
      this.$store.commit('setFooterShow', checked);
    },
    setSubfooterShow(checked) {
      this.$store.commit('setSubfooterShow', checked);
    },
  }
}
</script>
