<template>
  <div class="register_page">
    <div class="regist">
      <div class="regist_center">
        <div class="logo">
          <img src="/default/image/logo_top.png" alt="nest小米" />
        </div>
        <div class="regist_top">
          <h2>注册小米账户</h2>
        </div>
        <div class="regist_main center">
          <p>请输入您注册账户的密码</p>
          <br />
          <br />

          <form action="" @submit.prevent="submit" method="post" id="form">
            <input type="hidden" name="sign" value="<%=sign%>" />
            <input type="hidden" name="phone_code" value="<%=phone_code%>" />

            <div>
              <input
                class="form_input"
                type="password"
                id="password"
                v-model="password"
                name="password"
                placeholder="请输入密码"
              />
            </div>

            <div>
              <input
                class="form_input"
                type="password"
                id="rpassword"
                v-model="rpassword"
                name="rpassword"
                placeholder="请输入确认密码"
              />
            </div>

            <div class="regist_submit">
              <input
                class="submit"
                id="nextStep"
                type="submit"
                name="submit"
                value="完成注册"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { passDoRegister, passRegisterStep3 } from "@/api/api";
export default {
  data() {
    return {
      sign: this.$route.query.sign,
      phone_code: this.$route.query.phone_code,
      password: "",
      rpassword: "",
    };
  },
  async mounted() {
    let res = await passRegisterStep3({
      sign: this.sign,
      phone_code: this.phone_code,
    });
    if (res.data) {
    } else {
      return this.$router.replace("/pass/register_step1");
    }
  },
  methods: {
    submit(e) {
      if (this.password.length < 6) return alert("用户名的长度不能小于6位");
      if (this.password != this.rpassword) return alert("密码和确认密码不一致");
      passDoRegister({
        sign: this.sign,
        phone_code: this.phone_code,
        password: this.password,
        rpassword: this.rpassword,
      }).then((res) => {
        if (res.data) {
          this.$router.push('/')
        } else {
          this.$router.replace("/pass/register_step1");
        }
      })
    },
  },
};
</script>

<style>
@import "/public/default/css/login.css";
</style>