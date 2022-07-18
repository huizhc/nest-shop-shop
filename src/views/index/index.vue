
	<template>
  <div>
    <!-- start banner_x -->
    <banner_x :middle_nav="middleNav"></banner_x>
    <!-- end banner_x -->

    <!-- start banner_y -->
    <div class="banner_y center">
      <div class="nav">
        <ul>
          <li v-for="(item, idx) in goodsCate" :key="item._id">
            <a v-if="item.link" :href="item.link" target="_blank">{{
              item.title
            }}</a>
            <router-link v-else :to="'/category/' + item._id">{{
              item.title
            }}</router-link>
            <div class="pop">
              <ol class="cate_list clear">
                <li v-for="(item1, idx1) in item.items" :key="item1._id">
                  <div class="xuangou_left fl">
                    <router-link v-if="item1.link" :to="item1.link">
                      <div class="img fl">
                        <img :src="item1.cate_img" :alt="item1.title" />
                      </div>
                      <span class="fl"> {{ item1.title }} </span>
                    </router-link>
                    <router-link v-else :to="'/category/' + item1._id">
                      <div class="img fl">
                        <img :src="item1.cate_img" :alt="item1.title" />
                      </div>
                      <span class="fl">{{ item1.title }}</span></router-link
                    >
                  </div>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/image/focus/focus1.jpg" alt="focus1" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/image/focus/focus2.jpg" alt="focus2" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/image/focus/focus3.jpg" alt="focus3" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>

    <div class="sub_banner center">
      <div class="sidebar fl">
        <div class="fl">
          <a href=""><img src="./../../assets/image/hjh_01.gif" /></a>
        </div>
        <div class="fl">
          <a href=""><img src="./../../assets/image/hjh_02.gif" /></a>
        </div>
        <div class="fl">
          <a href=""><img src="./../../assets/image/hjh_03.gif" /></a>
        </div>
        <div class="fl">
          <a href=""><img src="./../../assets/image/hjh_04.gif" /></a>
        </div>
        <div class="fl">
          <a href=""><img src="./../../assets/image/hjh_05.gif" /></a>
        </div>
        <div class="fl">
          <a href=""><img src="./../../assets/image/hjh_06.gif" /></a>
        </div>
        <div class="clear"></div>
      </div>
      <div class="datu fl">
        <a href=""><img src="./../../assets/image/hongmi4x.png" alt="" /></a>
      </div>
      <div class="datu fl">
        <a href=""><img src="./../../assets/image/xiaomi5.jpg" alt="" /></a>
      </div>
      <div class="datu fr">
        <a href=""><img src="./../../assets/image/pinghengche.jpg" alt="" /></a>
      </div>
      <div class="clear"></div>
    </div>
    <!-- end banner -->

    <!-- start danpin -->
    <div class="danpin center">
      <div class="title center">小米明星单品</div>
      <div class="main center">
        <div class="mingxing fl">
          <div class="sub_mingxing">
            <a href=""><img src="./../../assets/image/pinpai1.png" alt="" /></a>
          </div>
          <div class="pinpai"><a href="">小米MIX</a></div>
          <div class="youhui">5月9日-21日享花呗12期分期免息</div>
          <div class="jiage">3499元起</div>
        </div>
        <div class="mingxing fl">
          <div class="sub_mingxing">
            <a href=""><img src="./../../assets/image/pinpai2.png" alt="" /></a>
          </div>
          <div class="pinpai"><a href="">小米5s</a></div>
          <div class="youhui">5月9日-10日，下单立减200元</div>
          <div class="jiage">1999元</div>
        </div>
        <div class="mingxing fl">
          <div class="sub_mingxing">
            <a href=""><img src="./../../assets/image/pinpai3.png" alt="" /></a>
          </div>
          <div class="pinpai"><a href="">小米手机5 64GB</a></div>
          <div class="youhui">5月9日-10日，下单立减100元</div>
          <div class="jiage">1799元</div>
        </div>
        <div class="mingxing fl">
          <div class="sub_mingxing">
            <a href=""><img src="./../../assets/image/pinpai4.png" alt="" /></a>
          </div>
          <div class="pinpai"><a href="">小米电视3s 55英寸</a></div>
          <div class="youhui">5月9日，下单立减200元</div>
          <div class="jiage">3999元</div>
        </div>
        <div class="mingxing fl">
          <div class="sub_mingxing">
            <a href=""><img src="./../../assets/image/pinpai5.png" alt="" /></a>
          </div>
          <div class="pinpai"><a href="">小米笔记本</a></div>
          <div class="youhui">更轻更薄，像杂志一样随身携带</div>
          <div class="jiage">3599元起</div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!-- 手机 -->
    <div class="category_item w">
      <div class="title center">手机</div>
      <div class="main center">
        <div class="category_item_left">
          <img src="/default/image/shouji.jpg" alt="手机" />
        </div>

        <div class="category_item_right">
          <div v-for="(item, idx) in phone" class="hot fl">
            <div class="tu">
              <a href="#">
                <img :src="item.goods_img" />
              </a>
            </div>
            <div class="miaoshu">
              <a href="#">{{ item.title }}</a>
            </div>
            <div class="jiage">{{ item.shop_price }}元</div>
            <div class="piao">
              <a href="#">
                <span>{{ item.sub_title }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 配件 -->
    <div class="category_item w">
      <div class="title center">配件</div>
      <div class="main center">
        <div class="content">
          <div class="hot fl">
            <a href=""><img src="./../../assets/image/peijian1.jpg" /></a>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span>新品</span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian2.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">小米6 硅胶保护套</a></div>
            <div class="jiage">49元</div>
            <div class="pingjia">372人评价</div>
            <div class="piao">
              <a href="">
                <span>发货速度很快！很配小米6！</span>
                <span>来至于mi狼牙的评价</span>
              </a>
            </div>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span style="background: #fff"></span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian3.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">小米手机4c 小米4c 智能</a></div>
            <div class="jiage">29元</div>
            <div class="pingjia">372人评价</div>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span style="background: red">享6折</span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian4.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">红米NOTE 4X 红米note4X</a></div>
            <div class="jiage">19元</div>
            <div class="pingjia">372人评价</div>
            <div class="piao">
              <a href="">
                <span>发货速度很快！很配小米6！</span>
                <span>来至于mi狼牙的评价</span>
              </a>
            </div>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span style="background: #fff"></span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian5.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">小米支架式自拍杆</a></div>
            <div class="jiage">89元</div>
            <div class="pingjia">372人评价</div>
            <div class="piao">
              <a href="">
                <span>发货速度很快！很配小米6！</span>
                <span>来至于mi狼牙的评价</span>
              </a>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="content">
          <div class="hot fl">
            <a href=""><img src="./../../assets/image/peijian6.png" /></a>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span style="background: #fff"></span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian7.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">小米指环支架</a></div>
            <div class="jiage">19元</div>
            <div class="pingjia">372人评价</div>
            <div class="piao">
              <a href="">
                <span>发货速度很快！很配小米6！</span>
                <span>来至于mi狼牙的评价</span>
              </a>
            </div>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span style="background: #fff"></span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian8.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">米家随身风扇</a></div>
            <div class="jiage">19.9元</div>
            <div class="pingjia">372人评价</div>
          </div>
          <div class="hot fl">
            <div class="xinpin"><span style="background: #fff"></span></div>
            <div class="tu">
              <a href=""><img src="./../../assets/image/peijian9.jpg" /></a>
            </div>
            <div class="miaoshu"><a href="">红米4X高透软胶保护套</a></div>
            <div class="jiage">59元</div>
            <div class="pingjia">775人评价</div>
          </div>
          <div class="hotlast fr">
            <div class="hongmi">
              <a href=""
                ><img src="./../../assets/image/hongmin4.png" alt=""
              /></a>
            </div>
            <div class="liulangengduo">
              <a href=""
                ><img src="./../../assets/image/liulangengduo.png" alt=""
              /></a>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { indexData } from "@/api/api";
import banner_x from '@/components/banner_x'
export default {
  components: {banner_x},
  data() {
    return {
      focus: [],
      goodsCate: [],
      middleNav: [],
      phone: [],
    };
  },
  methods: {},
  mounted() {
    indexData().then((res) => {
      this.focus = res.data.focus;
      this.goodsCate = res.data.goodsCate;
      this.middleNav = res.data.middleNav;
      this.phone = res.data.phone;
      this.$nextTick(() => {
        $("#nav_list>li").hover(
          function () {
            $(this).find(".children-list").show();
          },
          function () {
            $(this).find(".children-list").hide();
          }
        );
      });
    });
  },
};
</script>