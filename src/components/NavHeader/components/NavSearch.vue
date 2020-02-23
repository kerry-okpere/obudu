<template>
    <div class="navbar__one-search search" :style="{color: navColor}">
        <a-input-search placeholder="Search store..." style="width: 250px;float: right;" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'navColor'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../index';
</style>