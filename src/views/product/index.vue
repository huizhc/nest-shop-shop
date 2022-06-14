<template>
  <div>
    <div class="jieshao mt20 w">
      <div class="left fl">
        <div class="swiper-container">
          <div class="swiper-wrapper" id="swiper-wrapper">
            <div
              v-for="(item, idx) in goodsImage"
              :key="item._id"
              class="swiper-slide"
            >
              <img :src="item.img_url" />
            </div>
          </div>

          <div class="swiper-pagination"></div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="right fr">
        <div class="h3 ml20 mt20">{{ goodsInfo.title }}</div>
        <div class="jianjie mr40 ml20 mt10">{{ goodsInfo.sub_title }}</div>
        <div class="jiage ml20 mt10">{{ goodsInfo.shop_price }}元</div>

        <template v-if="relationGoods.length">
          <div class="ft20 ml20 mt20">选择版本</div>
          <div class="xzbb ml20 mt10">
            <div
              v-for="(item, idx) in relationGoods"
              :key="item._id"
              class="banben fl"
              :class="{ active: goodsInfo._id == item._id }"
            >
              <router-link :to="'/product/' + item._id">
                <span>{{ item.goods_version }}</span>
                <span>{{ item.shop_price }}元</span>
              </router-link>
            </div>

            <div class="clear"></div>
          </div>
        </template>

        <template v-if="goodsColor.length">
          <div class="ft20 ml20 mt20 clear">选择颜色</div>
          <div class="xzbb ml20 mt10 clearfix" id="color_list">
            <div
              v-for="(item, idx) in goodsColor"
              :key="item._id"
              class="banben fl"
              :class="{ active: idx == 0 }"
              :data-goods_id="goodsInfo._id"
              :data-color_id="item._id"
              :data-color_idx="idx"
            >
              <a>
                <span
                  class="yuandian"
                  :style="{ background: item.color_value }"
                ></span>
                <span class="yanse">{{ item.color_name }}</span>
              </a>
            </div>
          </div>
        </template>

        <div class="xqxq mt10 ml20">
          <div class="top1 mt10">
            <div class="left1 fl">版本: {{ goodsInfo.goods_version }}</div>
            <div class="right1 fr">价格: {{ goodsInfo.shop_price }} 元</div>
            <div class="clear"></div>
          </div>
          <div class="bot mt20 ft20 ftbc">
            总计：{{ goodsInfo.shop_price }} 元
          </div>
        </div>
        <div class="xiadan ml20 mt10">
          <input
            class="jrgwc"
            type="button"
            @click="addCart"
            name="jrgwc"
            id="addCart"
            value="加入购物车"
          />
        </div>
      </div>
      <div class="clear"></div>
    </div>

    <div class="container clearfix">
      <div class="c_left">
        <h2>看了又看</h2>

        <div class="item">
          <a target="_blank" href="#">
            <img
              src="//img10.360buyimg.com/N1/jfs/t24550/324/210570328/559386/cc08975f/5b2910bbNfaceb0b4.jpg"
            />

            <p class="price recommendLookPrice4183081">￥31.90</p>

            <p>
              三利 纯棉A类标准简约素雅大浴巾 70×140cm 男女同款
              柔软舒适吸水裹身巾 豆绿
            </p>
          </a>
        </div>
        <div class="item">
          <a target="_blank" href="#">
            <img
              src="//img10.360buyimg.com/N1/jfs/t24550/324/210570328/559386/cc08975f/5b2910bbNfaceb0b4.jpg"
            />

            <p class="price recommendLookPrice4183081">￥31.90</p>

            <p>
              三利 纯棉A类标准简约素雅大浴巾 70×140cm 男女同款
              柔软舒适吸水裹身巾 豆绿
            </p>
          </a>
        </div>
        <div class="item">
          <a target="_blank" href="#">
            <img
              src="//img10.360buyimg.com/N1/jfs/t24550/324/210570328/559386/cc08975f/5b2910bbNfaceb0b4.jpg"
            />

            <p class="price recommendLookPrice4183081">￥31.90</p>

            <p>
              三利 纯棉A类标准简约素雅大浴巾 70×140cm 男女同款
              柔软舒适吸水裹身巾 豆绿
            </p>
          </a>
        </div>
      </div>

      <div class="c_right">
        <ul class="detail_list clearfix">
          <li class="">详情描述</li>

          <li class="">规格参数</li>

          <li class="">用户评价</li>
        </ul>

        <div class="detail_info">
          <div class="detail_info_item" v-html="goodsInfo.goods_content"></div>
          <div class="detail_info_item">
            <ul>
              <template v-for="(item, idx) in goodsAttr">
                <template v-if="item.attribute_value">
                  <li class="row clearfix" :key="item._id">
                    <div class="span5">
                      <h2>{{ item.attribute_title }}</h2>
                    </div>
                    <div
                      class="span15"
                      v-html="$options.filters.formatAttr(item.attribute_value)"
                    ></div>
                  </li>
                </template>
              </template>
            </ul>
          </div>

          <div class="detail_info_item">
            <ul class="comment_list">
              <li>
                <div>
                  <img
                    src="https://www.itying.com/themes/itying/images/stars5.gif"
                  />
                </div>
                <p>
                  这已经是第六部了，一如既往地好用。美中不足得是，尾插和数据线的链接口，用过一段时间，就会有充电接触不良的问题，希望厂家将来有改进。
                </p>

                <p class="eval-order-info">
                  <span class="eval-time">2018-11-18 14:00:35</span
                  ><span>月岩白</span><span>6GB+64GB</span><span></span>
                </p>
              </li>
              <li>
                <div>
                  <img
                    src="https://www.itying.com/themes/itying/images/stars5.gif"
                  />
                </div>
                <p>
                  这已经是第六部了，一如既往地好用。美中不足得是，尾插和数据线的链接口，用过一段时间，就会有充电接触不良的问题，希望厂家将来有改进。
                </p>

                <p class="eval-order-info">
                  <span class="eval-time">2018-11-18 14:00:35</span
                  ><span>月岩白</span><span>6GB+64GB</span><span></span>
                </p>
              </li>
              <li>
                <div>
                  <img
                    src="https://www.itying.com/themes/itying/images/stars5.gif"
                  />
                </div>
                <p>
                  这已经是第六部了，一如既往地好用。美中不足得是，尾插和数据线的链接口，用过一段时间，就会有充电接触不良的问题，希望厂家将来有改进。
                </p>

                <p class="eval-order-info">
                  <span class="eval-time">2018-11-18 14:00:35</span
                  ><span>月岩白</span><span>6GB+64GB</span><span></span>
                </p>
              </li>
              <li>
                <div>
                  <img
                    src="https://www.itying.com/themes/itying/images/stars5.gif"
                  />
                </div>
                <p>
                  这已经是第六部了，一如既往地好用。美中不足得是，尾插和数据线的链接口，用过一段时间，就会有充电接触不良的问题，希望厂家将来有改进。
                </p>

                <p class="eval-order-info">
                  <span class="eval-time">2018-11-18 14:00:35</span
                  ><span>月岩白</span><span>6GB+64GB</span><span></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as showdown from "showdown";
import { productDetail, productGetImagelist } from "@/api/api";
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsInfo: {},
      relationGoods: [],
      goodsGift: [],
      goodsColor: [],
      goodsFitting: [],
      goodsImage: [],
      goodsAttr: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  filters: {
    formatAttr(str) {
      let converter = new showdown.Converter();
      let html = converter.makeHtml(str);
      return html;
    },
  },
  methods: {
    fetchData() {
      productDetail({ id: this.id }).then((res) => {
        this.goodsInfo = res.data.goodsInfo;
        this.relationGoods = res.data.relationGoods;
        this.goodsGift = res.data.goodsGift;
        this.goodsColor = res.data.goodsColor;
        this.goodsFitting = res.data.goodsFitting;
        this.goodsImage = res.data.goodsImage;
        this.goodsAttr = res.data.goodsAttr;
        this.$nextTick(() => {
          this.initSwiper();
          this.initContentTabs();
          this.initColorSelect();
        });
      });
    },
    initSwiper: function () {
      new Swiper(".swiper-container", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },

    initContentTabs: function () {
      $(".detail_list li").removeClass("active");
      $(".detail_info .detail_info_item:first").addClass("active");
      $(".detail_list li:first").addClass("active");
      $(".detail_list li").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".detail_info .detail_info_item")
          .removeClass("active")
          .eq(index)
          .addClass("active");
      });
    },
    initColorSelect: function () {
      var _that = this;
      $("#color_list .banben").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var color_id = $(this).attr("data-color_id");
        var goods_id = $(this).attr("data-goods_id");
        productGetImagelist({ goods_id, color_id }).then((res) => {
          _that.goodsImage = res.data;
          _that.$nextTick(() => {
            _that.initSwiper();
          });
        });
      });
    },
    addCart() {

      var goods_id = $("#color_list .active").attr("data-goods_id");
      var color_id = $("#color_list .active").attr("data-color_id");
      var color_idx = $("#color_list .active").attr("data-color_idx");

         // 1、获取增加购物车的数据  （把哪一个商品加入到购物车）
         let currentData = {
            _id: goods_id,
            title: this.goodsInfo.title,
            price: this.goodsInfo.shop_price,
            goods_version: this.goodsInfo.goods_version,
            num: 1,
            color: this.goodsColor[color_idx].color_name,
            goods_img: this.goodsInfo.goods_img,
            goods_gift: this.goodsGift,  /*赠品*/
            goods_attr: "",          //根据自己的需求拓展
            checked: true           /*默认选中*/
        }

        console.log(currentData);
        let str
        let cartList =
                    (str = sessionStorage.getItem("cartList")) && JSON.parse(str)

        if(cartList && cartList.length>0){
            //4、如果购物车有数据
                // 4、1、判断购物车有没有当前数据  
                if(this.cartHasData(cartList,currentData)){
                    // 有当前数据让当前数据的数量加1，然后写入到cookie
                    for(var i=0;i<cartList.length;i++){
                        if(cartList[i]._id.toString()==currentData._id.toString() && cartList[i].color == currentData.color && cartList[i].goods_attr == currentData.goods_attr){
                            cartList[i].num=cartList[i].num+1
                        }
                    }
                    // this.cookieService.set(res,"cartList",cartList);
                    sessionStorage.setItem("cartList", JSON.stringify(cartList))

                }else{  // 如果没有当前数据  把当前数据放在cartList里面 直接写入cookie
                    cartList.push(currentData);
                    sessionStorage.setItem("cartList", JSON.stringify(cartList))
                    // this.cookieService.set(res,"cartList",cartList);
                }

        }else{
            //3、如果购物车没有任何数据  直接把当前数据写入cookie            
            var tempArr=[];
            tempArr.push(currentData);
            // this.cookieService.set(res,"cartList",tempArr);
            sessionStorage.setItem("cartList", JSON.stringify(tempArr))

        }
       
        // res.send("加入购物车成功");

        // res.redirect('/cart/addCartSuccess?goods_id='+goods_id+'&color_id='+color_id);
      this.$router.push({name: 'cart-success', params: { goods: this.goodsInfo, color: this.goodsColor[color_idx] }})

    
      // var goods_id = $("#color_list .active").attr("data-goods_id");
      // var color_id = $("#color_list .active").attr("data-color_id");
      // this.$router.push({
      //   path: "/cart/addCart",
      //   query: {
      //     goods_id,
      //     color_id,
      //   },
      // });
    },
        cartHasData(cartList,currentData){

    
        if(cartList.length>0){
            for(var i=0;i<cartList.length;i++){
                if(cartList[i]._id.toString()==currentData._id.toString() && cartList[i].color == currentData.color && cartList[i].goods_attr == currentData.goods_attr){
                    return true;
                }
            }
        }
        return false;

    }

  },
  watch: {
    $route(val) {
      this.id = val.params.id;
      this.fetchData();
    },
  },
};
</script>

<style>
@import "/public/default/css/product.css";

.swiper-slide img {
  max-width: 560px;
}
</style>