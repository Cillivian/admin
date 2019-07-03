<template>
<div id="index">
<video-bg :sources="[path]" img="../assets/logo.png">
<!-- 登陆界面 -->
<div class="wrapper">
<div class="container">
<div class='login-logo'>
<img src="../assets/images/logo.png">
</div>
<a-form
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item  >
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="username"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your password!' }] }
        ]"
        type="password"
        placeholder="password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
      class="login-form-checkbox"
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        Remember me
      </a-checkbox>
      <a
        class="login-form-forgot"
        href=""
      >
        Forgot password
      </a>
       </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
      Or <a href="">
        register now!
      </a>
    </a-form-item>
  </a-form>
</div>

</div>


</video-bg>

</div>
</template>
<script>

export default{
    beforeCreate () {
    this.form = this.$form.createForm(this);
  },
    name:'index',
        data(){
            return {
                from:{},
                path:require('../assets/materials/video2.mp4'),
            }

        },
         methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
        //   console.log('Received values of form: ', values);
        var that =this;
        this.$api({
             type: 'json',
            url:'/user',
            method:'get',
            // params:{
            //     username:that.form.username,
            //     userpass:that.form.password,
            // }
        }).then(res=>{
            console.log(res);
        }).catch(res=>{
            console.log(res);
        })
        }
      });
    },
  },
    
}
</script>
<style>
.login-logo{
    height: 150px;
    width: 100%;
}
.wrapper{
  width:100%;
  height:100%;
  position:absolute;
}
.container{
position:relative;
  background-color: rgba(255,255,255,0.6);
  width:700px;
  height:400px;
  top:50%;
  left:50%;
  margin: -200px 0 0 -350px;
  border-radius: 20px;
 /* align-items: center; */
 
}
 .login-form {
 margin:10px 30px 0px 30px;
 max-width: 80%;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 80%;
}
.login-form-checkbox{
    float:left;
}
</style>