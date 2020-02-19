<template>
    <section class="section-title">
    <div class="container">
        <div class="row">
            <div class="col-12 col-xl-12 text-center">
                <h3>{{ title }}</h3>
                <!-- <p>{{ subtitle }}</p> -->
                <!-- <a-breadcrumb>
                    <a-breadcrumb-item><router-link to="/" :style="{color: priColor, fontWeight: 'bold'}">Home</router-link></a-breadcrumb-item>
                    <a-breadcrumb-item>{{title}}</a-breadcrumb-item>
                </a-breadcrumb> -->
                <slot name="image"></slot>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    props: {
        title: String,
        subtitle: String,
    },
    computed: {
        ...mapGetters ([
            'priColor'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>