<template>
  <div class="home">
    <MyCard class="motivationPorn">
      <template #title> 毒鸡汤 </template>
      <template #right>
        <van-icon @click="replay" name="replay" />
      </template>
      <template #content>
        <div class="content">{{ say }}</div>
      </template>
    </MyCard>
    <MyCard class="randomImg">
      <template #title> 随机图 </template>
      <template #content>
        <div class="content">
          <img src="https://api.wrdan.com/randimg" alt="随机图接口出现问题" />
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
  mounted() {
    this.loadSays();
  },
  methods: {
    replay() {
      this.loadSays();
    },
    loadSays() {
      this.$axios
        .get("https://v.api.aa1.cn/api/api-wenan-dujitang/index.php?aa1=json")
        .then((result) => {
          this.say = result.data[0].dujitang;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
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
