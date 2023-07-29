<template>
  <div class="home">
    <MyCard class="motivationPorn">
      <template #title> 毒鸡汤 </template>
      <template #right>
        <van-icon name="replay" />
      </template>
      <template #content>
        <div class="content">{{ say }}</div>
      </template>
    </MyCard>
    <MyCard class="randomImg">
      <template #title> 随机图 </template>
      <template #content>
        <div class="content">
          <img src="https://sex.nyan.xyz/api/v2/img" alt="" />
        </div>
      </template>
    </MyCard>
  </div>
</template>

<script>
import MyCard from "@/components/MyCard.vue";

export default {
  name: "HomeView",
  data() {
    return {
      say: "年低不处对象，怕你是冲着我压岁钱来的。",
    };
  },
  components: {
    MyCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #eee;
  height: 100%;
  .motivationPorn,
  .randomImg {
    width: 96%;
    margin: 0 auto;
    margin-top: 20px;
    .content {
      img {
        width: 100%;
      }
    }
  }
}
</style>
