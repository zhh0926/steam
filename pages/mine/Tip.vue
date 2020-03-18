<template>
    <div v-show="a">
        {{str}}
    </div>
</template>


<script>
export default {
    data(){
        return{
            a:false,
            str:''
        }
    },
   mounted(){
       this.$eventbus.$on("fn2",function(payload){
           this.a=true;
           this.str=payload
            console.log(this.a,this.str)
           setTimeout(()=>{
               this.a=false
               console.log(this.a)
           },2000)
       }.bind(this))
       
    }
}
</script>



<style lang="scss" scoped>
div{
    width: 2.6rem;
    height: 2rem;
    line-height: 1rem;
    font-size: 30px;
    background-color: aqua;
    text-align: center;
}
</style>