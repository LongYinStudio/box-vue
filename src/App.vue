<template>
  <div id="app">
    <div class="header" ref="header">百宝箱</div>
    <router-view class="content" />
    <van-tabbar ref="tabbar" v-model="active" active-color="#3F51B5">
      <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/tools" name="tool" icon="apps-o"
        >工具</van-tabbar-item
      >
      <van-tabbar-item to="/others" name="other" icon="guide-o"
        >其他</van-tabbar-item
      >
      <van-tabbar-item to="/mine" name="mine" icon="user-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "home",
      contentPaddingTop: 0,
      contentPaddingBottom: 0,
    };
  },
  mounted() {
    this.$data.contentPaddingTop = this.$refs.header.offsetHeight + "px";
    this.$data.contentPaddingBottom = this.$refs.tabbar.$el.offsetHeight + "px";
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    text-align: left;
    --hp: 18px;
    padding: var(--hp) 0px var(--hp) var(--hp);
    background: #3f51b5;
    color: #fff;
    font-weight: 500;
    position: fixed;
    width: 100%;
    z-index: 999;
  }
  .content {
    --cpt: 0px;
    --cpb: 0px;
    padding-top: v-bind(contentPaddingTop);
    padding-bottom: v-bind(contentPaddingBottom);
  }
}
</style>
