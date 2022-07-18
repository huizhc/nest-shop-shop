<template>
  <!-- start header -->
  <div class="x-layout">
    <header>
      <div class="top center">
        <div class="left fl">
          <ul>
            <li v-for="(item, idx) in topNav" :key="item._id">
              <app-link :to="item.link" :target="item.is_opennew == 2 ? '_blank' : '_self'">{{
                item.title
              }}</app-link>
              <div class="clear"></div>
            </li>
          </ul>
        </div>

        <div class="right fr">
          <router-link to="/cart/cart">
          <div class="gouwuche fr"><a href="">购物车</a></div>
          </router-link>
          <div class="fr">
            <ul>
              
								<li v-if="userinfo && userinfo.username" class="userinfo"
               >
									<a href="#">{{userinfo.username}}</a
                 >
								
									<i class="i"></i>

									<ol>

										<li>
                      <router-link to="/user/welcome">个人中心</router-link>
                      <!-- <a href="/user/welcome">个人中心</a> -->
                      </li>

										<li><a href="#">喜欢</a></li>

										<li><a href="javascript:void(0)" @click="logout">退出登录</a></li>
									</ol>
								
								</li>
              <template v-else>
              <li>
              <router-link to="/pass/login" >登录</router-link>
                </li>
              <li>|</li>
              <li>
                <router-link to="/pass/register_step1">注册</router-link>
                </li>
              </template>
              <li>|</li>
              <li><a href="">消息通知</a></li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </header>
    <!-- <router-view :key="$route.path" ></router-view> -->
    <template v-if="$route.path.match(/^\/user\//)">
      <div class="">
    <banner_x :middle_nav="middleNav"></banner_x>
    <div class="grzxbj">
    <div class="selfinfo center">
        <div class="lfnav fl">
            <div class="ddzx">用户中心</div>
            <div class="subddzx">
              <ul>

    <li>
      <router-link active-class="active" to="/user/welcome">欢迎页面</router-link>
      <!-- <a  class="active" href="/user/welcome">欢迎页面</a> -->
      </li>
    <li>
      <!-- <a  class="active"  href="/user/order">我的订单</a> -->
      <router-link active-class="active" to="/user/order">我的订单</router-link>
      </li>
    <li><a href="#">用户信息</a></li>
    <li><a href="#">我的收藏</a></li>
    <li><a href="#">我的评论</a></li>
</ul>
            </div>
        </div>
    <router-view></router-view>

        <div class="clear"></div>
    </div>
</div>

  </div>

    </template>
    <router-view v-else ></router-view>
    
    <footer class="mt20 center">
      <div class="mt20">
        梨商城|MIUI|米聊|多看书城|小米路由器|视频电话|小米天猫店|小米淘宝直营店|小米网盟|小米移动|隐私政策|Select
        Region
      </div>
      <div>
        ©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号
        京网文[2014]0059-0009号
      </div>
      <div>
        违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
      </div>
    </footer>
  </div>
  <!--end header -->
</template>
<script>
import AppLink from "./Link";
import { indexData } from "@/api/api";
import banner_x from '@/components/banner_x'
export default {
  name: "Layout",
  components: { AppLink, banner_x },
  data() {
    return {
      topNav: [],
       focus: [],
      goodsCate: [],
      middleNav: [],
      phone: [],
    };
  },
  computed: {
    userinfo () {
      return this.$store.getters.userinfo
    }
  },
  mounted() {
    indexData().then((res) => {
      this.focus = res.data.focus;
      this.goodsCate = res.data.goodsCate;
      this.middleNav = res.data.middleNav;
      this.phone = res.data.phone;
      this.topNav = res.data.topNav;
    });
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(res => {
        location.reload()
      })
    }
  },
};
</script>

<style lang="scss">

  
.portal-content-box {

	padding: 10px;
	font-size: 14px;

	color:#666;
}
.portal-content-box  .box-bd{

	padding: 20px;
}
.portal-content-box .user-card {
    position: relative;
    float: left;
    width: 302px;
    height: 160px;
    padding-left: 180px;
    padding-top: 40px;
}
.portal-content-box .action-list li {
    position: relative;
    padding: 6px 0;
}

.portal-content-box .user-card .username {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    color: #616161;
}

.portal-content-box .user-card .tip {
    margin: 0 0 10px;
    color: #b0b0b0;
}

.portal-content-box .user-card .link {
    font-size: 12px;
    color: #ff6700;
}
.portal-content-box .user-card .avatar {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4px;
    border: 1px solid #e0e0e0;
    border-radius: 150px;
}

.portal-content-box .user-actions {
    float: right;
    width: 358px;
    margin-top: 35px;
}

.portal-content-box .portal-sub {
    border-top: 1px solid #e0e0e0;
}

.portal-content-box .info-list {
    margin: 0;
    padding: 60px 0 0;
    list-style-type: none;
    color: #757575;
}
.portal-content-box .info-list li {
    position: relative;
    float: left;
    width: 276px;
    height: 60px;
    padding-left: 112px;
    padding-top: 15px;
    margin-left: 14px;
    margin-bottom: 40px;
}
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}

.portal-content-box .info-list img {
    position: absolute;
    left: -10px;
    top: -10px;
}

.portal-content-box .info-list h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
}
.portal-content-box a {
    color: #fff;
    text-decoration: none;
}


.btn {
    display: inline-block;
    *zoom: 1;
    *display: inline;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}

.btn-small {
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
}


</style>