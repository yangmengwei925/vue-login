import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //组件的初始化数据
    list:[]
  },
  //mutations只能修改state中的数据
  mutations: {
    changeList(state,options){
      // console.log(options) 第一季 第二季
      state.list=[...options]
      console.log(state.list)
    }
  },
  //异步请求
  actions: {
    async getList(store,options){
      // console.log(store)
      //从vue实例中引用http请求数据方法
      const{http}=Vue.prototype;
      let res=await http(options.method,options.url,options.data)
      const {code,msg,data}=res.data
      console.log(data)
      if(code===0)
      {
        store.commit('changeList',data)
        return
      }
      alert(msg)
    }
  },
  modules: {
  }
})
