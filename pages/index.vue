<template>
  <div>
    <div class="swiper-container box">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="https://media.st.dl.bscstorage.net/steam/apps/814380/ss_2036ad636be8fa2c4bf926004f369bb97490350a.600x338.jpg"/>
        </div>
        <div class="swiper-slide">
            <img src="https://media.st.dl.bscstorage.net/steam/apps/1094520/ss_3b8f4ddc008f0b521f82ae38a8c25827cace8c34.600x338.jpg"/>
        </div>
        <div class="swiper-slide">
            <img src="https://media.st.dl.bscstorage.net/steam/apps/512900/ss_9fc33552a95fada32c6bc0a75b6d899244c4779c.600x338.jpg"/>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
<div class="box2">
<img src="https://media.st.dl.bscstorage.net/steam/apps/641960/header_292x136.jpg?t=1577717046">
<img src="https://media.st.dl.bscstorage.net/steam/apps/342180/header_292x136.jpg?t=1574952890">
</div>
<div class="box3">
  <img src="https://media.st.dl.bscstorage.net/steam/apps/755790/capsule_616x353.jpg?t=1578395079">
<div class="content">"© Valve Corporation PLAYERUNKNOWN'S BATTLEGROUNDS 🎁🎁🎁🎁绝地求生 玩家 补偿 （枫叶M4武器 狐狸套装 PGI纪念皮肤 ） 限时领取 特此公告 🎁🎁🎁🎁补偿补偿领取地址： 👉 https://pubgdream.club 👈 🎁🎁🎁🎁 🎁🎁🎁🎁绝地求生 玩家 补偿 （枫叶M4武器 狐狸套装 PGI纪念皮肤 ） 限时领取 特此公告..."</div>
</div>
  </div>
</template>

<script>
 import Swiper from 'swiper';
export default {
  components: {
   
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})
  }
}

</script>

<style lang="scss">
.box{
    border: 1px solid gray;
    height:300px;
}

.swiper-slide img{
    width:100%;
    height:300px;
}
.box2{
  display: flex;
  width: 100%;
  height: 3rem;
  img{
    width: 50%;
    height: 100%;
  }
}
.box3{
  img{
    width: 100%;
    height: 6rem;
  }
  .content{
    width: 100%;
    height: 3rem;
    color: #ebebeb;
    background-color: black;
  }
}
</style>
