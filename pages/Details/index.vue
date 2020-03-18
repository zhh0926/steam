<template>
    <div>
        <img :src="img" v-if="img"><br>
        {{title}}<br>
        价格：{{price}}元<br>
        <button @click="back">返回上一页</button>
    </div>
</template>

<script>
import axios from "../../node_modules/axios";

export default {
    data(){
        return{
            img:'',
            title:'',
            price:''
        }
    },
    async created(){
        var {id}=this.$route.query;
        var {data}=await axios.get('http://localhost:3000/steam?id='+id);
        this.img=data[0].img;
        this.title=data[0].title;
        this.price=data[0].price;
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    margin-left: 10%;
    margin-right: 10%;
    font-size: 30px;
    line-height: 50px;
    button{
        width: 2rem;
        height: 1rem;
        background-color: black;
        color: white;
        font-size: 20px;
        line-height: 1rem;
        border: 1px solid black;
        border-radius: 10px;
    }
}
img{
    width: 100%;
    height: 3rem;
    // margin-left: 10%;
    // margin-right: 10%;
}
</style>