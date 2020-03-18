<template>
  <div>欢迎{{a}}</div>
</template>

<script>
export default {
  data() {
    return {
      a: ""
    };
  },
  mounted() {
    this.a = sessionStorage.getItem("username");
  }
};
</script>


<style lang="scss" scoped>
</style>