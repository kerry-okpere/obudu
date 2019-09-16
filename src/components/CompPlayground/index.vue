<template>
  <div>
    <b-form-group label="Inline radios (default)">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Stacked radios">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }
</script>