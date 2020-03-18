<template>
    <div>
        <i class="fa fa-reorder" aria-hidden="true" @click="toggle1"></i>
        <img src="https://store.st.dl.bscstorage.net/public/shared/images/responsive/header_logo.png" height="36" border="0" alt="STEAM">
    </div>
</template>

<script>
// import {mapActions} from 'vuex';
export default {
    methods:{
        //   ...mapActions(['toggle']),
          toggle1(){
              this.$store.dispatch("toggle");
          }
    }
}
</script>


<style lang="scss" scoped>

</style>