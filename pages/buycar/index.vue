<template>
<div>
    <ul v-if="a">
    <li v-for="item in buycar" :key="item.id">
        <img v-lazy="item.img"><br>
        <!-- <img :src="'http://localhost:3000/'+item.img"><br> -->
        {{item.title}}
        {{item.price}}元
        <button @click="jian(item)">-</button>
        {{item.num}}
        <button @click="jia(item)">+</button>
        总价：{{item.price*item.num}}元
    </li>
     <li>所有商品总价：{{allMoney}}元</li>
   </ul> 
<Nouser v-if="b"></Nouser>
</div>
</template>

<script>
import Nouser from "./Nouser";
import {mapGetters} from 'vuex';
export default {
    components:{
        Nouser
    },
    data(){
        return{
            a:true,
            b:false
        }
    },
    computed:{
        buycar(){
            return this.$store.state.cart.buycar;
        },
       allMoney(){
            return this.$store.getters.allMoney;   
       }
    },
    methods:{
        jia(item){
            this.$store.dispatch('cart/addToCart',item);
        },
        jian(item){
            this.$store.dispatch('cart/jian',item);
        }, 
    },
    mounted(){
        if(!sessionStorage.getItem('username')){
            // console.log(1)
            this.a=false,
            this.b=true
        }
        //this.buycar=JSON.parse(localStorage.getItem(this.$store.getters.zusername))
        //console.log(this.buycar)
        // this.$store.state.cart.buycar=this.buycar
        var r = JSON.parse(localStorage.getItem(this.$store.getters.zusername) || '[]')
        this.$store.commit('cart/init', r)
    
    }
}

// this.$store.subscribe(function(){
//     console.log(mutation,state)
//     localStorage.setItem('buycar', JSON.stringify(store.state.buycar));
//     console.log('购物车商品更新完毕，数据本地保存完毕。')
// })
</script>


<style lang="scss" scoped>
li{
    margin-left: 10%;
    font-size: 20px;
    color: gray;
    margin-bottom: 10px;
    img{
        width: 80%;
        }
    }

</style>