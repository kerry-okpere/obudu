<template>
    <section class="under-construction text-center">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-12">
                    <img src="../../assets/img/construction.png" width="400" alt="Under construction">
                    <h1>Store Under Construction</h1>
                    <h3>Please check again soon</h3>
                    <s-button :pri="priColor">Thank You</s-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters ([
            'priColor',
            'secColor'
        ])
    }
}
</script>

<style lang="scss" scoped>
.under-construction {
    margin: 120px 0 150px;
    h1 {
        font-size: 50px;
        font-weight: 600;
        padding: 10px 0 0;
    }
    h3 {
        font-size: 24px;
        padding: 5px 0 10px;
    }
    button {
        &:hover {
            cursor: auto;
        }
    }
}
</style>
