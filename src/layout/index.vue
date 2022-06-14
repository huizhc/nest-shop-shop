<template>
  <!-- start header -->
  <div class="x-layout">
    <header>
      <div class="top center">
        <!-- <div class="left fl">
					<ul>					
						
						<%for(var i=0;i<topNav.length;i++){ %>

							<li><a href="<%=topNav[i].link%>"  <% if(topNav[i].is_opennew==2){%>target="_blank" <%}%> ><%=topNav[i].title%></a></li>
						<%}%>

						<div class="clear"></div>
					</ul>
				</div> -->
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

        <!-- <div class="left fl">
          <ul>
            <li><a href="http://www.mi.com/" target="_blank">小米商城</a></li>
            <li>|</li>
            <li><a href="">MIUI</a></li>
            <li>|</li>
            <li><a href="">米聊</a></li>
            <li>|</li>
            <li><a href="">游戏</a></li>
            <li>|</li>
            <li><a href="">多看阅读</a></li>
            <li>|</li>
            <li><a href="">云服务</a></li>
            <li>|</li>
            <li><a href="">金融</a></li>
            <li>|</li>
            <li><a href="">小米商城移动版</a></li>
            <li>|</li>
            <li><a href="">问题反馈</a></li>
            <li>|</li>
            <li><a href="">Select Region</a></li>
            <div class="clear"></div>
          </ul>
        </div> -->
        <div class="right fr">
          <div class="gouwuche fr"><a href="">购物车</a></div>
          <div class="fr">
            <ul>
              <li><a href="./login.html" target="_blank">登录</a></li>
              <li>|</li>
              <li><a href="./register.html" target="_blank">注册</a></li>
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
    <router-view ></router-view>
    <footer class="mt20 center">
      <div class="mt20">
        小米商城|MIUI|米聊|多看书城|小米路由器|视频电话|小米天猫店|小米淘宝直营店|小米网盟|小米移动|隐私政策|Select
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
export default {
  name: "Layout",
  components: { AppLink },
  data() {
    return {
      topNav: [],
      focus: [],
      goodsCate: [],
    };
  },
  mounted() {
    indexData().then((res) => {
      this.topNav = res.data.topNav;
      this.focus = res.data.focus;
      this.goodsCate = res.data.goodsCate;
    });
  },
};
</script>