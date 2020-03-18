<template>
  <div class="container">
    <Header class="header"></Header>
    <keep-alive include="Goods">
 <router-view class="main"></router-view>
    </keep-alive>
    <Footer class="footer"></Footer>
    <transition
      enter-class=""
      enter-active-class="fadeInLeft"
      enter-to-class=""
      leave-class=""
      leave-active-class="fadeOutLeft"
      leave-to-class=""
    >
      <List class="animated list" ></List>
    </transition>
    <Tip class="tip"></Tip>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import List from "../components/List.vue";
import Tip from "../components/Tip.vue";
export default {
  components: {
    Header,
    Footer,
    List,
    Tip
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html,
#__nuxt,
#__layout,
.container {
  height: 100%;
}
$a: black;
$b: white;
div {
  font-size: 0.3rem;
}
.container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.tip{
  position: absolute;
  top:6rem;
  left: 2.3rem;
  z-index: 100;
}
.main {
  flex: 1;
  margin-top: 10px;
  overflow: auto;
}
.header {
  height: 1rem;
  background: $a;
  color: $b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}
.footer {
  height: 1rem;
  background: $a;
  color: $b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  a {
    text-decoration: none;
    color: $b;
  }
  .nuxt-link-exact-active {
    color: green !important;
  }
}
.list {
  position: fixed;
  top: 1rem;
  left: 0;
  height: 85%;
  width: 6rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: gray;
  z-index: 999;
  ul {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      border-bottom: 1px solid white;
      font-size: 30px;
      padding-bottom: 8px;
    }
    a {
      color: gray;
      text-decoration: none;
    }
  }
  img {
    margin-top: 50px;
  }
  .list-title {
    display: block;
    margin-top: 10px;
    a {
      color: gray;
    }
  }
}
</style>
