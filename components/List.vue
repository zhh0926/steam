<template>
  <div v-if="show">
      <ul>
        <li>
          <a href="#">社区</a>
        </li>
        <li>
          <a href="#">您与好友</a>
        </li>
        <li>
          <a href="#">客服</a>
        </li>
        <li>
          <a href="#">更改语言</a>
        </li>
        <li>
          <a href="#">偏更改用户</a>
        </li>
      </ul>
    <img
      src="https://store.st.dl.bscstorage.net/public/shared/images/responsive/logo_valve_footer.png"
    />
    <br />@ Valve Corporation。保留所有权利。所有商标均为其在美国及其它国家/地区的各自持有者所有。
    <span class="list-title">
      <a
        href="https://store.steampowered.com/privacy_agreement/?snr=1_4_4__global-responsive-menu"
      >Privacy Policy</a>
      &nbsp;| &nbsp;
      <a href="http://www.valvesoftware.com/legal.htm">Legal</a>
      &nbsp;| &nbsp;
      <a
        href="https://store.steampowered.com/subscriber_agreement/?snr=1_4_4__global-responsive-menu"
      >Steam Subscriber Agreement</a>
      &nbsp;| &nbsp;
      <a
        href="https://store.steampowered.com/steam_refunds/?snr=1_4_4__global-responsive-menu"
      >Refunds</a>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["show"])
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>