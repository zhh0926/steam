import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

import img1 from '~/assets/01.jpg';
import img2 from '~/assets/02.jpg';

Vue.use(VueLazyLoad,{
    loading: img1,
       error: img2,
    throttleWait: 1000
})