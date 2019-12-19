<template>
    <section v-show="loginShow" class="login">
        <div class="login__overlay">
            <div class="login__wrap">
                <div class="login__main">
                    <a-tabs defaultActiveKey="1" @change="callback">
                        <a-tab-pane tab="Login" key="1">
                            <a-form
                            id="components-form-demo-normal-login"
                            :form="form"
                            class="login-form"
                            @submit="handleSubmit">
                            <a-form-item>
                            <a-input
                                v-decorator="[
                                'userName',
                                { rules: [{ required: true, message: 'Please input your username!' }] },
                                ]"
                                placeholder="Username"
                            >
                                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                            </a-form-item>
                            <a-form-item>
                            <a-input
                                v-decorator="[
                                'password',
                                { rules: [{ required: true, message: 'Please input your Password!' }] },
                                ]"
                                type="password"
                                placeholder="Password"
                            >
                                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                            </a-form-item>
                            <a-form-item>
                            <a-checkbox
                                v-decorator="[
                                'remember',
                                {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                },
                                ]"
                            >
                                Remember me
                            </a-checkbox>
                            <a class="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <a-button type="primary" html-type="submit" class="login-form-button">
                                Log in
                            </a-button>
                            Or
                            <a href="">
                                register now!
                            </a>
                            </a-form-item>
                        </a-form>
                        </a-tab-pane>
                        <a-tab-pane tab="Register" key="2" forceRender>
                            <a-form
                            id="components-form-demo-normal-login"
                            :form="form"
                            class="login-form"
                            @submit="handleSubmit" >
                            <a-form-item>
                            <a-input
                                v-decorator="[
                                'userName',
                                { rules: [{ required: true, message: 'Please input your username!' }] },
                                ]"
                                placeholder="Username"
                            >
                                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                            </a-form-item>
                            <a-form-item>
                            <a-input
                                v-decorator="[
                                'password',
                                { rules: [{ required: true, message: 'Please input your Password!' }] },
                                ]"
                                type="password"
                                placeholder="Password"
                            >
                                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                            </a-form-item>
                            <a-form-item>
                            <a-checkbox
                                v-decorator="[
                                'remember',
                                {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                },
                                ]"
                            >
                                Remember me
                            </a-checkbox>
                            <a class="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <a-button type="primary" html-type="submit" class="login-form-button">
                                Log in
                            </a-button>
                            Or
                            <a href="">
                                register now!
                            </a>
                            </a-form-item>
                        </a-form>
                        </a-tab-pane>
                        <a-button @click="setLoginShow" slot="tabBarExtraContent" icon="close">Close</a-button>
                    </a-tabs>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        setLoginShow(e) {
            this.$store.state.styles.loginShow = false;
        },
        callback(key) {
            console.log(key);
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        },
    },
    computed: {
        ...mapGetters ([
            'loginShow'
        ])
    }
};
</script>

<style lang="scss" scoped>
@import './_index';
</style>