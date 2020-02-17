<template>
  <div class="about">
    <van-field v-model="user" placeholder='请输入用户名' />
    <van-field v-model="pwd" placeholder='请输入密码' />

    <van-button type="primary" v-show="!isShow" @click="loginIn('/login')">登录</van-button>
    <p v-show="!isShow" @click="isShow=true">没有账号,去注册</p>

    <van-button type="default" v-show="isShow" @click="loginIn('/register')">注册</van-button>
    <p v-show="isShow" @click="isShow=true">已有帐号,去登录</p>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:'',
      pwd:'',
      isShow:false
    }
  },
  methods: {
    async loginIn(url){
      const{user,pwd}=this;
      if(user==='') return alert('用户名不能为空')
      if(pwd==='')return alert('密码不能为空')

      let sendObj={
        user,pwd
      }
      let res=await this.http('post',url,sendObj)
      const {code,msg,data}=res.data;
      alert(msg)
      //登录成功
      if(code===0)
      {
        localStorage.setItem('token',data.token)
        this.$router.push('/home')
      }
      if(code===2)
      {
        alert(msg)
        this.isShow=false
      }
      
    }
  },
}
</script>
