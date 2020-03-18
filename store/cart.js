
export const state = () => {
    return {
        buycar: [],
        // buycar: JSON.parse(localStorage.getItem('buycar') || '[]') 
        // username2:JSON.parse(sessionStorage.getItem('username'))
        // usernames:JSON.parse(localStorage.getItem("zhh")||'[]')

    }
}
export const mutations = {
    init(state, payload){
        // console.log('init:', payload)
        state.buycar = payload
    },
    addToCart(state, payload) {
        state.buycar.push(payload);
        // console.log(state.username2)
        // console.log(sessionStorage.getItem('username'))
        localStorage.setItem(getters.zusername(),JSON.stringify(state.buycar))
        // console.log(getters.zusername())
    },
    jia(state, payload) {
        state.buycar[payload].num++;
        localStorage.setItem(getters.zusername(),JSON.stringify(state.buycar))
        // localStorage.setItem(state.username2,state.buycar)
    },
    jian(state, payload) {
        state.buycar[payload].num--;
        if (state.buycar[payload].num === 0) {
            state.buycar.splice(payload, 1)
            localStorage.setItem(getters.zusername(),JSON.stringify(state.buycar))   
        }
        localStorage.setItem(getters.zusername(),JSON.stringify(state.buycar))
    },
    mounted(){
        this.buycar=JSON.parse(localStorage.getItem(this.getters.zusername))
    }
}

export const actions = {
    addToCart(context, payload) {
        var index = context.state.buycar.findIndex(item => item.id === payload.id)
        if (index === -1) {
            context.commit('addToCart', { ...payload, num: 1 })
        } else {
            context.commit('jia', index)
        }
    },
    jian(context, payload) {
        var index = context.state.buycar.findIndex(item => item.id === payload.id)
        context.commit('jian', index)
    }   
}

export const getters ={
    zusername(){
        return sessionStorage.getItem('username');
    }
}
