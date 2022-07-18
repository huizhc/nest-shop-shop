<template>
  <div>
    <div class="banner_x center">
      <router-link to="/">
      <div class="logo fl"></div>
      </router-link>
      <!-- <a href="/" target="_blank">
      </a> -->

      <div class="wdgwc fl ml40">我的购物车</div>
      <div class="wxts fl ml20">
        温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
      </div>
      <div class="dlzc fr">
        <ul>
          <li><a href="./login.html" target="_blank">登录</a></li>
          <li>|</li>
          <li><a href="./register.html" target="_blank">注册</a></li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <div class="xiantiao"></div>

    <template v-if="cartList.length">
      <div class="gwcxqbj">
        <div class="gwcxd center">
          <table class="table">
            <tr class="th">
              <th>
                <input type="checkbox" id="checkAll" />
                全选
              </th>
              <th>商品名称</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>

            <tr
              v-for="(item, idx) in cartList"
              :key="item._id"
              class="cart_list"
            >
              <td>
                <input
                  :goods_id="item._id"
                  :color="item.color"
                  :goods_idx="idx"
                  type="checkbox"
                  :checked="item.checked"
                />
              </td>

              <td>
                <div class="col_pic">
                  <img :src="item.goods_img" />
                </div>
                <div class="col_title">
                  {{ item.title }} -- {{ item.color }} {{ item.goods_version }}
                </div>
              </td>

              <td class="price">{{ item.price }}元</td>

              <td>
                <div class="cart_number">
                  <div
                    class="input_left decCart"
                    :goods_id="item._id"
                    :color="item.color"
                    :goods_idx="idx"
                  >
                    -
                  </div>

                  <div class="input_center">
                    <input
                      id="num"
                      name="num"
                      readonly="readonly"
                      type="text"
                      :value="item.num"
                    />
                  </div>
                  <div
                    class="input_right incCart"
                    :goods_id="item._id"
                    :goods_idx="idx"
                    :color="item.color"
                  >
                    +
                  </div>
                </div>
              </td>

              <td class="totalPrice">
                {{ parseFloat(item.price) * item.num }}元
              </td>
              <td>
                <span
                  ><a href="javascript:void(0)" class="delete" :data-idx="idx">
                    删除</a
                  ></span
                >
              </td>
            </tr>
          </table>
        </div>
        <div class="jiesuandan mt20 center">
          <div class="tishi fl ml20">
            <ul>
              <li><a href="/">继续购物</a></li>
              <li>|</li>
              <li>共<span>{{cartList.length}}</span>件商品，已选择<span>{{checkbox_num}}</span>件</li>
              <div class="clear"></div>
            </ul>
          </div>
          <div class="jiesuan fr">
            <div class="jiesuanjiage fl">
              合计（不含运费）：<span id="allPrice">{{ allPrice }}元</span>
            </div>
            <div class="jsanniu fr">
              <router-link to="/buy/checkout">
              <input
                class="jsan"
                type="submit"
                name="jiesuan"
                id="checkout"
                value="去结算"
              />
              </router-link>
            </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </template>

    <p
      v-else
      style="
        text-align: center;
        color: red;
        margin-top: 100px;
        margin-bottom: 100px;
      "
    >
      您的购物车空空的...
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: [],
      // allPrice: 0
    };
  },
  computed: {
    allPrice() {
      let res = 0;
      if (this.cartList && this.cartList.length > 0) {
        for (var i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].checked) {
            res += this.cartList[i].price * this.cartList[i].num;
          }
        }
      }

      return res;
    },
	checkbox_num () {
		return this.cartList.filter(v => v.checked).length
	}
  },
  mounted() {
    // let cartList=this.cookieService.get(req,"cartList");
    let str;
    let cartList =
      (str = sessionStorage.getItem("cartList")) && JSON.parse(str);
    // var allPrice = 0;

    // if (cartList && cartList.length>0) {
    //     for (var i = 0; i < cartList.length; i++) {
    //         if (cartList[i].checked) {
    //             allPrice += cartList[i].price * cartList[i].num;
    //         }
    //     }

    // }

    this.cartList = cartList && cartList.length > 0 ? cartList : [];
    // this.allPrice = allPrice
    this.$nextTick(() => {
      this.changeCartNum();
      this.initCheckBox();
      this.isCheckedAll();
      this.deleteConfirm();
    });
    // return {
    //     cartList: cartList&& cartList.length>0?cartList:[],
    //     allPrice: allPrice
    // }
  },
  methods: {
    deleteConfirm: function () {
      let that = this;
      $(".delete").click(function () {
        var flag = confirm("您确定要删除吗?");
        if (flag) {
          that.cartList.splice(this.dataset.idx, 1);
          sessionStorage.setItem("cartList", JSON.stringify(that.cartList));
        }
      });
    },
    initCheckBox() {
      var _that = this;
      $("#checkAll").click(function () {
        if (this.checked) {
          $(":checkbox").prop("checked", true);
          _that.cartList.forEach((v) => (v.checked = true));
          sessionStorage.setItem("cartList", JSON.stringify(_that.cartList));
        } else {
          $(":checkbox").prop("checked", false);
          _that.cartList.forEach((v) => (v.checked = false));
          sessionStorage.setItem("cartList", JSON.stringify(_that.cartList));
        }
      });
      $(".cart_list input:checkbox").click(function () {
        _that.isCheckedAll();
        //改变当前商品的状态
        //  var goods_id = $(this).attr('goods_id');
        //  var color = $(this).attr('color');
        var goods_idx = $(this).attr("goods_idx");
        _that.cartList[goods_idx].checked = !_that.cartList[goods_idx].checked;
        sessionStorage.setItem("cartList", JSON.stringify(_that.cartList));

        //  $.get('/cart/changeOneCart?goods_id='+goods_id+'&color='+color,function(response){
        //     if(response.success){
        //         $("#allPrice").html(response.allPrice+'元');
        //     }
        // });
      });
    },
    //判断全选是否选择
    isCheckedAll() {
      var chknum = $(".cart_list input:checkbox").size(); //checkbox总个数
      var chk = 0; //checkbox checked=true总个数
      $(".cart_list input:checkbox").each(function () {
        if ($(this).prop("checked") == true) {
          chk++;
        }
      });
      if (chknum == chk) {
        //全选
        $("#checkAll").prop("checked", true);
      } else {
        //不全选
        $("#checkAll").prop("checked", false);
      }
    },
    changeCartNum() {
      var that = this;
      $(".decCart").click(function () {
        var goods_idx = $(this).attr("goods_idx");
        let cur = that.cartList[goods_idx];
        if (cur.num > 1) {
          cur.num -= 1;
        }
        sessionStorage.setItem("cartList", JSON.stringify(that.cartList));
      });

      $(".incCart").click(function () {
        var goods_idx = $(this).attr("goods_idx");
        let cur = that.cartList[goods_idx];
        cur.num += 1;
        sessionStorage.setItem("cartList", JSON.stringify(that.cartList));
      });
    },
  },
};
</script>

<style>
@import "/public/default/css/cart.css";
</style>