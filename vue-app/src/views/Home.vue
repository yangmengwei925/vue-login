<template>
  <div class="home">
    <div class="out" v-for="(item,index) in list" :key='index'>
      <img :src="item.classPic" alt="">
      <p @click="$router.push({name:'list',params:{class:item.class}})">
         蜡笔小新{{item.class}}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import{mapState,mapActions}from 'vuex'
export default {
  name: 'home',
  computed: {
    // mapState获取vue里所有的数据
    ...mapState(['list'])
  },
  methods: {
    //mapActions获取vuex里所有的方法
    ...mapActions(['getList'])
  },
  mounted() {
    this.getList({
      method:'get',
      url:'/new/list',
      data:[]
    })
  },
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
  .out{
    width: 50%;
    height: 160px;
    text-align: center;
    margin-top: 10px;
  }
  .out img{
    width: 50%;
    height: 80%;
  }
</style>
