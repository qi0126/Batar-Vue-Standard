<template>
  <div class="hello">

    <div class="cellDiv">
      <van-swipe-cell v-for="item in 7" :key="item" class="cellDivOne">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="移动端"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot color="#07c160"/>
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" color="#ff5000"/>
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button,SwipeCell,Card,GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(Button);
Vue.use(Card);
Vue.use(SwipeCell);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  created() {
		this.created_fun()
  },
  data:function() {
  return {
    };
  },
  methods: {
		created_fun() {
    },
    handleSelect(e){
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.delete-button{
  height:100%
}
.el-menu-demo{
  position: fixed;
  top: 0px;
  z-index:100;
  width:100%;
}
.cellDiv{
  margin:60px 0;
}
.cellDivOne{
  border-top:1px solid #f0f0f0
}
</style>
