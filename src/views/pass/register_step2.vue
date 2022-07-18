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
          <p>
            验证码已通过短信发送至{{
              phone_parsed
            }}，请输入完成验证。手机绑定是为保障用户的信息真实性和帐号安全性
          </p>

          <br />
          <br />

          <div class="yzm">
            <input
              type="hidden"
              id="identify_code"
              name="identify_code"
              value="<%=identify_code%>"
            />
            <!-- <input type="hidden" id="phone" name="phone" value="<%=phone%>" /> -->
            <!-- <input type="hidden" id="sign" name="sign" value="<%=sign%>" /> -->

            <input
              type="text"
              id="phone_code"
              name="phone_code"
              placeholder="请输入验证码"
            />

            <button id="sendCode">重新发送</button>
          </div>

          <div class="regist_submit">
            <input
              class="submit"
              id="nextStep"
              type="button"
              name="submit"
              value="下一步"
            />

            <br />

            <input
            @click="$router.back()"
              class="return"
              id="returnButton"
              type="button"
              name="return"
              value="返回"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { passRegisterStep2, passSendCode, passValidatePhoneCode } from "@/api/api";
export default {
  data() {
    return {
      sign: this.$route.query.sign,
      identify_code: this.$route.query.identify_code,
      phone: "",
    };
  },
  computed: {
    phone_parsed () {
      return this.phone.toString().replace(/^(\d{3})\d+(\d{4})$/, '$1****$2')
    }
  },
  async mounted() {
    let that = this
    if (!this.$route.query.sign) {
      return this.$router.replace("/pass/register_step1");
    }
    let res = await passRegisterStep2({
      sign: this.sign,
      identify_code: this.identify_code,
    });
    if (res.data) {
      this.phone = res.data.phone
    } else {
      return this.$router.replace("/pass/register_step1");
    }
    $(function () {
      var timer = 6;
      function Countdown() {
        if (timer >= 1) {
          timer -= 1;
          $("#sendCode").attr("disabled", true);
          $("#sendCode").html("重新发送(" + timer + ")");
          setTimeout(function () {
            Countdown();
          }, 1000);
        } else {
          $("#sendCode").attr("disabled", false);
          $("#sendCode").html("重新发送");
        }
      }
      Countdown();

      $("#sendCode").click(function () {
        timer = 6;
        Countdown();
        var phone = that.phone;
        var identify_code = that.identify_code;
          passSendCode({phone:phone,identify_code:identify_code}).then(res => {
            console.log('发送验证码成功')
        })
      });
    });

    $(function () {
      $("#nextStep").click(function (e) {
        // var sign = $("#sign").val();
        var sign = that.sign;
        var phone_code = $("#phone_code").val();
passValidatePhoneCode({ sign: sign, phone_code: phone_code }).then(res => {
  that.$router.push({path: '/pass/register_step3', query: {sign, phone_code}})
})
        // $.get('/pass/validatePhoneCode', { sign: sign, phone_code: phone_code }, function (response) {

        // 	if (response.success == true) {
        // 		location.href = "/pass/registerStep3?sign=" + response.sign + '&phone_code=' + phone_code;
        // 	} else {
        // 		alert(response.msg);
        // 	}
        // })
      });
    });
  },
};
</script>

<style>
@import "/public/default/css/login.css";
</style>