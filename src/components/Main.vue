<template>
  <div class="hello">

    <el-menu
      :default-active="sInd"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">Vue规范确定</el-menu-item>
      <el-menu-item index="2">Vant移动端</el-menu-item>
      <el-menu-item index="3">Element桌面端</el-menu-item>
    </el-menu>
    <div style="margin-top:60px">
      <router-view></router-view>
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
      sInd:'1'
    };
  },
  methods: {
		created_fun() {
      this.handleSelect('1')
    },
    handleSelect(e){
      let page 
      switch (e) {
        case '1':
          page = 'vueStand'
          break;
        case '2':
          page = 'vueVant'
          break;
        case '3':
          page = 'vueElement'
          break;
      }
      this.$router.push(page)
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
