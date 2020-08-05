<template>
  <div class="hello">
    <div class="cellDiv">
      10231321423
    </div>
    <div>
      1234153456
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
