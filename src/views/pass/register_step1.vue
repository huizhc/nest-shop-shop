<template>
<div class="register_page">
		
			<div class="regist">
				<div class="regist_center">

					<div class="logo">
							<img src="/default/image/logo_top.png" alt="nest小米">
					</div>
					<div class="regist_top">
							<h2>注册小米账户</h2>
					</div>
					<div class="regist_main center">
					
						<input class="form_input" type="text" name="phone" id="phone" placeholder="请填写正确的手机号"/>

						<div class="yzm">
							<input type="text" id="identify_code" name="identify_code" placeholder="请输入验证码"/>
							<img :src="codeImg"  title="看不清？点击刷新" @click="changeImg">				
						</div>

						<div class="regist_submit">
								<button  class="submit" id="registerButton">
										下一步
								</button>

						</div>


						<br>
						<br>
						<div class="privacy_box">
							<div class="msg">
							<label class="n_checked now select-privacy">
								<input type="checkbox" checked="true" /> 注册帐号即表示您同意并愿意遵守Egg仿小米 <a href="https://static.account.xiaomi.com/html/agreement/account/cn.html" class="inspect_link " title="用户协议" target="_blank">用户协议</a>和<a href="https://www.mi.com/about/privacy/" class="inspect_link privacy_link" title=" 隐私政策 " target="_blank"> 隐私政策 </a>
							</label>
							</div>
						</div>
					</div>
					
					
				</div>
			</div>
	</div>
</template>

<script>
import { passSendCode } from '@/api/api'
export default {
  data () {
    return {
      codeImg: process.env.VUE_APP_BASE_API + "/base/pass/code",
    }
  },
  mounted () {
    let that = this
    				$(function(){
					$("#registerButton").click(function(e){

						var phone=$('#phone').val();
						var identify_code= $('#identify_code').val();
						
						var reg =/^[\d]{11}$/;
						if(!reg.test(phone)){
							alert('手机号输入错误');
							return false;
						}
						if(identify_code.length<4){
							alert('验证码长度不合法');
							return false;
						}
        passSendCode({phone:phone,identify_code:identify_code}).then(res => {
          that.$router.push({path: '/pass/register_step2', query: { sign: res.data.sign, identify_code }})
        }).catch(_ => {
          that.changeImg()
        })

					})
				})

  },
  methods: {
    changeImg() {
      this.codeImg = process.env.VUE_APP_BASE_API + "/base/pass/code?t=" + Date.now();
    },
  },
}
</script>

<style>
@import '/public/default/css/login.css';
</style>