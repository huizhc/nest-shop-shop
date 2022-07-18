<template>
  <div class="banner_x center">
    <router-link to="/index">
      <div class="logo fl"></div>
    </router-link>
    <router-link to="/index">
        <div class="ad_top fl"></div>
    </router-link>
      <div class="nav fl">
        <ul class="clearfix" id="nav_list">
          <li v-for="(item, idx) in middle_nav" :key="item._id">
            <a href="#" target="_blank">{{ item.title }}</a>
            <ol
              v-if="item.subGoods && item.subGoods.length"
              class="children-list clearfix"
            >
              <li v-for="(item1, idx1) in item.subGoods" :key="item1._id">
                <a href="#">
                  <img :src="item1.goods_img" />
                  <p>{{ item1.shop_price }}</p>
                </a>
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <div class="search fr">
        <form action="" method="post">
          <div class="text fl">
            <input
              type="text"
              class="shuru"
              placeholder="小米6&nbsp;小米MIX现货"
            />
          </div>
          <div class="submit fl">
            <input type="submit" class="sousuo" value="搜索" />
          </div>
          <div class="clear"></div>
        </form>
        <div class="clear"></div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'banner_x',
    props: {
        middle_nav: Array
    }
}
</script>

<style>

</style>