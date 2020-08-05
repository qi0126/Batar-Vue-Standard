<template>
  <div id="app">
    <div>
      <div>热销产品</div>
        <van-card
          v-for="(item,indOne) in 5"
          num="2"
          tag="标签"
          price="10.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <view slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </view>

        </van-card>

      <!-- 优惠券显示 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px;"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <!-- 购物车底部 -->
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" badge="12" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script lang="ts">
  // import Vue from 'vue'
  import { Tab, Tabs ,Tabbar, TabbarItem,Checkbox,Area,Card,CouponCell, CouponList,GoodsAction, GoodsActionIcon, GoodsActionButton,Toast,SwipeCell  } from 'vant';
  import { Vue, Component, Prop, Watch, Emit} from "vue-property-decorator"
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(Area);
  Vue.use(Card);
  Vue.use(GoodsAction);
  Vue.use(GoodsActionButton);
  Vue.use(GoodsActionIcon);
  Vue.use(SwipeCell);
  
  //优惠卷
  const coupon = {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
  };

	@Component({components: {}})
	export default class ProductNew extends Vue {
      chosenCoupon:number = -1
      coupons:Array<object> = [coupon]
      disabledCoupons:Array<object> =  [coupon]
      showList:boolean = false
      tabList:Array<string> = ['111111','2222222','3333333','44444444','55555','666666','7777777','88888','999999999']
      imageURL:string = 'https://img.yzcdn.cn/vant/ipad.jpeg'
      created_fun() {
      }
      onChange(index:number) {
        this.showList = false;
        this.chosenCoupon = index;
      }
      onExchange() {
        this.coupons.push(coupon);
      }
      onClickIcon() {
        Toast('点击图标');
        this.$router.push('/vueVant')
      }
      onClickButton() {
        Toast('点击按钮');
        this.$router.push('/vueVant')
      }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
