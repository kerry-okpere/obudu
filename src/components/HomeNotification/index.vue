<template>
  <section class="notification" v-if="notificationShow === true">

      <!-- Notification Layout One -->
      <div class="notification__one" v-if="notificationLayout === 1">
          <div class="container">
              <div class="row">
                  <div class="col">
                      <h1>{{notificationTitle}}</h1>
                      <p>{{notificationContent}}</p>
                  </div>
                  <div class="col">
                    <a-button type="primary">{{notificationButton}}</a-button>
                  </div>
              </div>
          </div>

      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({

    }),

    computed: {
        ...mapGetters ([
            'notificationShow',
            'notificationLayout',
            'notificationPri',
            'notificationSec',
            'notificationTitle',
            'notificationContent',
            'notificationButton',
            'notificationButtonPri',
            'notificationButtonSec'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>