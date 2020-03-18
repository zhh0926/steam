import Vue from 'vue';
import eventbus from '../plugins/eventbus'
Vue.prototype.$eventbus = eventbus

export const state = () => ({
    show: false
})
export const mutations = {
    toggle(state) {
        state.show = !state.show
    }
}
export const actions={
    toggle(context){
        context.commit('toggle');
    }
}
export const getters ={
    allMoney(state){
        var m=0;
        var len=state.cart.buycar.length;
        for(var i=0;i<len;i++){
            var g=state.cart.buycar[i];
            m+=g.num*g.price;
        }
        return m;
    },
    zusername(){
        return sessionStorage.getItem("username")
    }
}
 
