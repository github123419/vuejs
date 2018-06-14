<template>
  <div class="page-reg">
    <!-- iRegHd -->
    <section class="iRegHd">
        <div class="iCom-inner">
            <div class="bg-inner">
                <h3 class="bg-title" data-locale="login.bg.title">专业安全的理财平台</h3>
                <p class="bg-subTitle" data-locale="login.bg.subTitle">Professional and secure financial platform</p>
            </div>
            <div class="iReg-wrapper">
                <nav class="iReg-nav">
                    <router-link class="iReg-nav-item " :to="{path:'login'}"  data-locale="common.login">登录</router-link>
                    <router-link class="iReg-nav-item active"  :to="{path:'reg'}" data-locale="common.register" >注册</router-link>
                </nav>

                <div class="form-group form-group1">
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="form-group form-group2">
                    <input type="text" placeholder="短信验证码">
                    <span class="sendMsgBtn" data-locale="common.sendMsg">获取验证码</span>
                </div>
                <div class="form-group form-group3">
                    <input type="text" placeholder="密码为8-16位数字、字母或符号组成">
                </div>
                <p class="form-proto"><span class="check"></span><span data-locale="reg.readAgree">我已阅读并同意</span><a href="#" data-locale="common.protocol">《Dompet Kamu 理財版服务条款协议》</a></p>
                <div class="form-sub">
                    <a href="javascript:;" class="btn btn-block" data-locale="common.register">注册</a>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageReg',
  data(){
  	return {
  		
  	}
  },
  created(){
    
  }
}
</script>

<style scoped>
  .iRegHd{position: relative;z-index: 1;height:540px;background:url(../assets/images/reg-banner-1.png) no-repeat center;background-size:auto;}
  .iRegHd .iCom-inner{position: relative;height:100%;}
  .iReg-wrapper{position: absolute;right:30px;top:32px;padding:45px; width:400px;height:477px;background:#fff;font-family: '黑体';}

  .iReg-nav{position: relative;height: 28px;margin-bottom:26px;}
  .iReg-nav-item{cursor: pointer; position: relative;display: block;width:50%;float:left;line-height: 28px;text-align: center;color:#888;font-size: 22px;}
  .iReg-nav-item:first-of-type:after{content:''; position: absolute;top:5px;bottom:5px;right:0;width:0;border-right:1px solid #e5e5e5;}
  .iReg-nav-item.active{color:#359980;}

  .bg-inner{display: table-cell;height:500px;width:1336px;vertical-align: middle;}
  .bg-title{font-size: 60px;color:#fff;line-height: 1.5;letter-spacing: 3px;margin-bottom:20px;margin-left:-100px;}
  .bg-subTitle{font-size: 26px;color:#fff;line-height: 1.5;letter-spacing: 3px;margin-left:-100px;}

  .form-group{position: relative;margin-bottom:20px;line-height:35px;padding:0 0 10px 0;border-bottom:1px solid #e5e5e5;}
  .form-group2{padding:0 100px 10px 0;}
  .form-group input{display: block;padding:0 4px; width:100%;height:35px;line-height: 35px;outline: none;color:#333;font-size: 14px;border:none;}
  .sendMsgBtn{position: absolute;right:0;top:0;width:92px;text-align: center; height:35px;line-height:35px;border:1px solid #999999;border-radius:2px; color:#359980;font-size: 14px;cursor: pointer;}
  .form-group input::-webkit-input-placeholder{
      color:#a3a3a3;
  }
  .form-group input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#a3a3a3;
  }
  .form-group input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#a3a3a3;
  }
  .form-group input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
      color:#a3a3a3;
  }
  .form-proto{position: relative;margin-bottom:14px; line-height: 18px;font-size: 14px;color:#6c6c6c;}
  .form-proto a{color:#359980;}
  .form-proto .check{cursor: pointer; display: inline-block;width:13px;height:13px;line-height: 13px;vertical-align: middle;margin-right:5px; background-image:url(../assets/images/check-1.png);background-repeat: no-repeat;background-size: cover;}


  .form-sub .btn{background-color:#359980;font-size: 18px;height:48px;line-height: 36px;color:#fff;}

  .iLogHd .form-sub{padding-top:40px;}

  @media screen and (max-width:768px){
      .bg-title{font-size: 40px;}
      .bg-subTitle{font-size: 20px;}
  }
  @media screen and (max-width:480px){
      .iReg-wrapper{ right:50%;top:50%;width:90%;height:420px;margin:-210px -45% 0 0;padding:30px 20px 0;border-radius:4px;}
      .iLogHd .iReg-wrapper{height:340px;margin-top:-170px;}
  }
</style>