<template>
  <div>
    <div class="wra_top">{{str1}}</div>
    <div class="wra_bottom">{{str2}}</div>
    <button @click="fn1">价格排序</button>
    <div class="wrapper">
      <ul>
        <li v-for="item in arr" :key="item.id">
          <img v-lazy="item.img" />
          <br />
          名称：{{item.title}}
          <br />
          价格：￥{{item.price}}
          <br />
          <button @click="add(item)">加入购物车</button>
          <router-link :to="'/Details?id='+item.id">
            <button>商品详情</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "../../node_modules/axios";
import BScroll from "better-scroll";
export default {
  name: "Goods",
  data() {
    return {
      arr: [],
      str1: "",
      str2: "",
      a: "asc",
      adval: true
    };
  },
  methods: {
    add(item) {
      this.$store.dispatch("cart/addToCart", item);
    },
    async fn1() {
      this.adval ? (this.a = "asc") : (this.a = "desc");
      this.adval = !this.adval;
      var { data } = await axios.get(
        "http://localhost:3000/steam?_sort=price&_order=" + this.a
      );
      // console.log(data)
      this.arr = data;
    }
  },
  async asyncData() {
    var { data } = await axios.get("http://localhost:3000/steam");
    // console.log(data)
    return { arr: data };
  },
  activated(){
      console.log(1)
      if(this.scroll){
          setTimeout(()=>{
              this.scroll.scrollTo(0,localStorage.getItem('y'));
          },100)
      }
  },
  async mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(".wrapper", {
        tap: true,
        click: true,
        pullDownRefresh: true,
        pullUpLoad: true
      });
      this.scroll.on("pullingDown", async () => {
        this.str1 = "正在刷新页面";
        setTimeout(() => {
          this.scroll.finishPullDown();
          this.str1 = "";
          this.img1 = "";
        }, 1000);
      });
      this.scroll.on("pullingUp", async () => {
        this.str2 = "加载完毕";
        setTimeout(() => {
          this.scroll.finishPullUp();
          this.str2 = "";
          this.scroll.refresh();
        }, 1000);
      }),
        this.scroll.on("scroll", ({ y }) => {
          if (y !== 0) {
            localStorage.setItem("y", y);
          }
        });
    });
  }
};
</script>


<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
}
.wra_top {
  position: absolute;
  top: 20px;
}
.wra_bottom {
  position: absolute;
  bottom: 0px;
}
.wrapper {
  width: 100%;
  height: 95.3%;
  overflow: hidden;
  position: absolute;
  top: 20px;
  margin-top: 10px;
}
li {
  margin-left: 10%;
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
  img {
    width: 80%;
  }
}
button {
  margin-left: 10%;
}
</style>