<template>
    <div>
        <van-search v-model="keyword" placeholder='请输入搜索关键词'/>
        <div v-for="item in list.filter(item=>item.title.indexOf(keyword)!==-1)" :key='item.id'>
                    <p @click="$router.push({name:'detail',params:item})">{{item.title}}</p>

        </div>
    </div>
</template>

<script>
import{mapState,mapActions}from 'vuex'
export default {
    data() {
        return {
            keyword:''
        }
    },
    computed: {
        ...mapState(['list'])
    },
    methods: {
        ...mapActions(['getList'])
    },
    created() {
        //刷新页面不丢失数据
        if(this.$route.params.class!==undefined)
        {
            sessionStorage.setItem('key',this.$route.params.class)//传过来第几季  通过第几季去拿里边的东西
        }
        this.getList({
            method:'post',
            url:'/new/somelist',
            data:{key:sessionStorage.getItem('key')}
        })
    },
}
</script>