<template>
  <div class="danpin center">
    <div class="search-filter center">
      <ul class="item show-less" id="list_item_class">
        <!-- <span class="label"> 分类： </span> -->
        <li class="label">分类：</li>
        <li v-for="(item, idx) in subCate" :key="item._id">
          <router-link active-class="active" :to="'/category/' + item._id">{{
            item.title
          }}</router-link>
          <!-- <a class="active" href="/category/<%=subCate[i]._id%>"
            ><%=subCate[i].title%></a
          > -->
        </li>
        <!-- <li>
          <a href="/category/<%=subCate[i]._id%>"><%=subCate[i].title%></a>
        </li> -->
      </ul>
    </div>

    <!-- <div class="main center">
	
		
		<%for(var i=0;i<goodsList.length;i++){%>
			<div class="mingxing fl mb20" style="border:2px solid #fff;width:230px;cursor:pointer;" onmouseout="this.style.border='2px solid #fff'" onmousemove="this.style.border='2px solid red'">
				<div class="sub_mingxing">
					
					<a href="/product/<%=goodsList[i]._id%>" target="_blank"><img src="/<%=goodsList[i].goods_img%>" alt="" /></a>
				
				</div>
				<div class="pinpai"><a href="/product/<%=goodsList[i]._id%>" target="_blank"><%=goodsList[i].title%></a></div>
				
				<div class="jiage"><%=goodsList[i].shop_price%>元</div>
			</div>
		<%}%>

		<div class="clear"></div>
	</div> -->
    <div class="main center">
      <div
        v-for="(item, idx) in goodsList"
        :key="item._id"
        class="mingxing fl mb20"
        style="border: 2px solid #fff; width: 230px; cursor: pointer"
        onmouseout="this.style.border='2px solid #fff'"
        onmousemove="this.style.border='2px solid red'"
      >
        <div class="sub_mingxing">
          <router-link :to="'/product/' + item._id" :key="item._id">
            <img :src="item.goods_img" alt="" />
          </router-link>
          <!-- <a href="/product/_id>" target="_blank"
            ><img src="goods_img" alt=""
          /></a> -->
        </div>
        <div class="pinpai">
          <router-link :to="'/product/' + item._id" :key="item._id">
            {{ item.title }}
            <!-- <a href="/product/_id>" target="_blank">title</a> -->
          </router-link>
        </div>

        <div class="jiage">{{ item.shop_price }}元</div>
      </div>

      <div class="clear"></div>
    </div>

    <div class="clear"></div>
  </div>
</template>

<script>
import { categoryList } from "@/api/api";
export default {
  data() {
    return {
      current: this.$route.params.id,
      listQuery: {
        pid: this.$route.params.id,
        page: 1,
      },
      currentCate: {},
      goodsList: [],
      subCate: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      categoryList(this.listQuery).then((res) => {
        this.currentCate = res.data.currentCate;
        this.goodsList = res.data.goodsList;
        this.subCate = res.data.subCate;
      });
    },
  },
  watch: {
    $route(val, old) {
      this.current = val.params.id
      this.listQuery.pid = val.params.id
      this.fetchData();
    },
  },
};
</script>

<style>
</style>