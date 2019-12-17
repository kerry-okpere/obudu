<template>
    <section class="newsletter" v-if="this.$store.state.styles.newsletterShow === true">

        <!-- Newsletter Layout One -->
        <div class="newsletter__one" v-if="this.$store.state.styles.newsletterLayout === 1">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="newsletter__one-title">
                            <h3>Subscribe to Our Newsletter</h3>
                            <p>Get notified of our latest products straight in your inbox.</p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="newsletter__one-form">
                            <a-form layout="inline">
                                <a-form-item>
                                    <a-input placeholder="Enter your email to subscribe"></a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-button type="primary" html-type="submit">Subscribe</a-button>
                                </a-form-item>
                            </a-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter Layout Two -->
        <div class="newsletter__two" v-if="this.$store.state.styles.newsletterLayout === 2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="newsletter__two-title">
                            <h3>Get the latest deals straight in your mail!</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="newsletter__one-form">
                            <a-form layout="inline">
                                <a-form-item>
                                    <a-input placeholder="Enter your email to subscribe"></a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-button type="primary" html-type="submit">Subscribe</a-button>
                                </a-form-item>
                            </a-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter Layout Three -->
        <div class="newsletter__three" v-if="this.$store.state.styles.newsletterLayout === 3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="newsletter__three-title">
                            <h3>Subscribe to Our Newsletter</h3>
                            <p>Get notified of our latest products straight in your inbox.</p>
                        </div>
                        <div class="newsletter__three-form">
                            <a-form>
                                <a-form-item>
                                    <a-input placeholder="Enter your email to subscribe"></a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-button type="primary" html-type="submit">Subscribe</a-button>
                                </a-form-item>
                            </a-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './_index';
</style>