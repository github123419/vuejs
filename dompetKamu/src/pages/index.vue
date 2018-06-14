<template>
  <div class="page-index">
    <!-- iBanner -->
    <section class="iBanner">
      <div id="myCarousel" class="carousel slide">      
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" class=""></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol> 
        <div class="carousel-inner">
          <div class="item active" :style="'background-image:url('+ require('@/assets/images/index-banner-1.png') +');'">
            <div class="iCom-inner">
              <div class="item-inner">
                <h3 class="item-title" data-locale="index.banner.item01_h3">专业安全的理财平台</h3>
              </div>
            </div>
          </div>
          <div class="item" :style="'background-image:url('+ require('@/assets/images/index-banner-2.png') +');'">
            <div class="iCom-inner">
              <div class="item-inner">
                <h3 class="item-title" data-locale="index.banner.item02_h3">安心的理财运用</h3>
                <p class="item-subtitle" data-locale="index.banner.item02_p">资金投放完整告知资金运用及退款状况</p>
              </div>
            </div>
          </div>
          <div class="item" :style="'background-image:url('+ require('@/assets/images/index-banner-3.png') +');'">
            <div class="iCom-inner">
              <div class="item-inner">
                <h3 class="item-title" data-locale="index.banner.item03_h3">保证理财回馈，保证理财收益</h3>
                <p class="item-subtitle" data-locale="index.banner.item03_p">逾期客户平台理赔，稳定理财，信用致上</p>
              </div>
            </div>
          </div>

        </div>      
      </div>
    </section>

    <!-- iPro -->
    <section class="iPro">
      <div class="iCom-inner">
        <div class="iPro-item">
          <h3 class="iPro-title" data-locale="index.pro01.title">轻松赚</h3>
          <div class="iPro-con">
            <div class="iPro-pic">
              <div class="iPro-pic-bg"></div>
              <div class="iPro-pic-inner">
                <h4 class="iPro-pic-title" data-locale="index.pro01.picTitle">你的资金你做主</h4>
                <p class="iPro-pic-btns">
                  <router-link :to="{path:'/easy'}" class="iPro-pic-btn" data-locale="common.join">立即加入</router-link>
                </p>
              </div>
            </div>
            <div class="iPro-txt">
              <ul class="iPro-txt-hd">
                <li class="iPro-txt-item iPro-txt-item1">
                  <h4 class="iPro-txt-num"><em>24</em> <small>%</small></h4>
                  <p class="iPro-txt-des" data-locale="index.pro.expectRate">期待年回报率</p>
                </li>
                <li class="iPro-txt-item iPro-txt-item1">
                  <h4 class="iPro-txt-num">3<span data-locale="common.months">个月</span></h4>
                  <p class="iPro-txt-des" data-locale="index.pro.term">期限</p>
                </li>
                <li class="iPro-txt-item iPro-txt-item1">
                  <h4 class="iPro-txt-num">6000000RP</h4>
                  <p class="iPro-txt-des" data-locale="index.pro.loanAmount">出借额</p>
                </li>
              </ul>
              <div class="iPro-txt-bd">
                <a href="#" class="iPro-txt-btn iPro-txt-btn1" data-locale="index.pro.introduce">新手引导</a>
                <router-link :to="{path:'/easy'}" class="iPro-txt-btn iPro-txt-btn2 btn-success" data-locale="common.join">立即加入</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="iPro-item">
          <h3 class="iPro-title" data-locale="index.pro02.title">稳定赚</h3>
          <div class="iPro-con">
            <div class="iPro-pic">
              <div class="iPro-pic-bg iPro-pic-bg2"></div>
              <div class="iPro-pic-inner">
                <h4 class="iPro-pic-title" data-locale="index.pro02.picTitle">选择灵活多样</h4>
                <p class="iPro-pic-btns">
                  <router-link :to="{path:'/stable'}" class="iPro-pic-btn" data-locale="common.join">立即加入</router-link>
                </p>
              </div>
            </div>
            <div class="iPro-txt">
              <ul class="iPro-txt-hd">
                <li class="iPro-txt-item iPro-txt-item1">
                  <h4 class="iPro-txt-num"><em>26</em> <small>%</small></h4>
                  <p class="iPro-txt-des" data-locale="index.pro.expectRate">期待年回报率</p>
                </li>
                <li class="iPro-txt-item iPro-txt-item1">
                  <h4 class="iPro-txt-num">6<span data-locale="common.months">个月</span></h4>
                  <p class="iPro-txt-des" data-locale="index.pro.term">期限</p>
                </li>
                <li class="iPro-txt-item iPro-txt-item1">
                  <h4 class="iPro-txt-num">12000000RP</h4>
                  <p class="iPro-txt-des" data-locale="index.pro.loanAmount">出借额</p>
                </li>
              </ul>
              <div class="iPro-txt-bd">
                <a href="#" class="iPro-txt-btn iPro-txt-btn1" data-locale="index.pro.introduce">新手引导</a>
                <router-link :to="{path:'/stable'}" class="iPro-txt-btn iPro-txt-btn2 btn-success" data-locale="common.join">立即加入</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- iPart -->
    <section class="iPart">
      <div class="iCom-inner">
        <h2 class="iPart-title" data-locale="index.partner.title">合作伙伴</h2>
        <div class="iPart-con">
          <img src="@/assets/images/index-partner-1.png" alt="index-partner-1">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
  	return {
  		
  	}
  }
}
</script>

<style scoped>
	/*iBanner*/
  .iBanner{position: relative;z-index: 1;}
  .carousel-inner>.item{height:320px;background-position: top center;background-size:auto;background-repeat: no-repeat;}
  .carousel-indicators{bottom:10px;margin-bottom:0;}
  .carousel-indicators li{
    display: inline-block;
      width: 8px;
      height: 8px;
      margin: 0 6px;
      background: rgba(255,255,255,.5);
      border-radius: 50%;
      overflow: hidden;
      text-indent: -999em;
      cursor: pointer;
  }
  .carousel-indicators .active {
      width: 8px;
      height: 8px;
      margin: 0 6px;
      background-color: #fff;
  }
  .iBanner .item{text-align: center;}
  .iBanner .item-inner{    
      display: table-cell;
      width:1185px;
      height:300px;
      line-height:320px;
      vertical-align: middle;
      text-align: left;
  }
  .iBanner .item-title{color:#fff;font-weight: bold;font-size: 50px;line-height: 1.5;letter-spacing: 5px;}
  .iBanner .item-subtitle{color:#fff;font-weight: normal;font-size: 36px;line-height: 1.8;letter-spacing: 3px;display: table-cell;padding:0 20px;border-radius:8px; background:rgba(255,255,255,.35);}

  /*iPro*/
  .iPro{position: relative;z-index: 1;margin-bottom:50px;}
  .iPro-item{position: relative;clear:both;overflow:hidden;}
  .iPro-title{margin-top:15px;padding:15px 0;line-height: 30px;font-size: 20px;color:#333;}
  .iPro-con{position: relative;padding-left:398px;}
  .iPro-pic{position: absolute;left:0;top:0;width:382px;height:250px;}
  .iPro-pic-bg{position: absolute;z-index:1;left:0;right:0;top:0;bottom:0;background:url(../assets/images/index-pic-1.png) no-repeat top center;background-size:cover;}
  .iPro-pic-bg2{background:url(../assets/images/index-pic-2.png) no-repeat top center;background-size:cover;}
  .iPro-pic-bg:before{content:'';position: absolute;z-index:-1;left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,.5);}
  .iPro-pic-inner{position: relative;z-index: 2;padding:70px 30px 30px;text-align: center;}
  .iPro-pic-title{margin-bottom:10px; line-height: 40px;font-size:22px;color:#F2F2F2;font-weight: normal;}
  .iPro-pic-btn{display: inline-block;width:156px;height:36px;line-height: 36px;text-align: center;font-size: 16px;color:#F2F2F2; border:1px solid #F2F2F2;}
  .iPro-pic-btn:hover{border-color:#65B867;color:#65B867;}
  .iPro-txt{position: relative;padding-top:40px; background-color:#fff;height:250px;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    transition: all .2s linear;}
  .iPro-txt-hd{position: relative;padding:35px;height:150px;}
  .iPro-txt-item{float:left;width:33.333%;text-align: center;}
  .iPro-txt-num{display: inline-block;margin:0; margin-bottom:10px; font-size: 20px;color:#000;line-height:40px;height:40px;}
  .iPro-txt-num em{font-size: 38px;color:#359980;font-style: normal;display: inline-block;line-height:1; vertical-align: bottom;}
  .iPro-txt-num small{font-size: 18px;color:#359980;display: inline-block;line-height:1; vertical-align: bottom;}
  .iPro-txt-des{font-size: 12px;color:#666;}
  .iPro-txt-bd{position: absolute;bottom:0;left:0;width:100%;}
  .iPro-txt-btn{display: block;float:left; width:50%;height:60px;text-align: center;line-height:60px;font-size:20px;color:#999;}
  .iPro-txt-btn1{border-top:1px solid #ddd;}
  .iPro-txt-btn1:hover{color:#999;}
  .iPro-txt-btn2{background-color:#65B867;color:#fff;}
  .iPro-txt-btn2:hover{color:#fff;}

  .iPro-txt:hover {
      -webkit-box-shadow: 0 5px 20px 5px #ddd;
      -moz-box-shadow: 0 5px 20px 5px #ddd;
      box-shadow: 0 5px 20px 5px #ddd;
      -webkit-transform: translate3d(0,-2px,0);
      -moz-transform: translate3d(0,-2px,0);
      transform: translate3d(0,-2px,0);
  }

  /*iPart*/
  .iPart{position: relative;z-index: 1;background:#fff;}
  .iPart-title{margin:0;padding:40px;text-align: center;line-height: 1.5;font-size: 24px;color:#000;font-weight: normal;letter-spacing: 3px;}
  .iPart-con{padding-bottom:40px;text-align: center;}
  .iPart-con img{max-width:100%;width:auto;height:291px;}

  @media screen and (max-width:992px){
      .iPro-con{padding:0;}
      .iPro-pic{position: relative;left:auto;top:auto;margin:0 0 20px;}
  }

  @media screen and (max-width:768px){
      .iPro-title{padding: 15px 0 5px;}
      .iPro-pic{width:100%;}
      .iPart-con img{width:100%;height:auto;}
  }

  @media screen and (max-width:480px){    
      .carousel-inner>.item{height:240px;}
      .iBanner .item-title{font-size: 20px;letter-spacing: 2px;text-align: center;}
      .iBanner .item-subtitle{font-size: 14px;letter-spacing: 2px;text-align: center;display: block;padding:0;border-radius:0; background:rgba(255,255,255,0);}
      .iBanner .item-inner{width:480px;height:240px;}

      .iPro-pic{height:220px;}
      .iPro-pic-inner{padding:50px 16px 16px;}

      .iPro-txt{height:180px;padding-top:0px;}
      .iPro-txt-num{font-size: 16px;line-height: 30px;}
      .iPro-txt-num em{font-size: 28px;}
      .iPro-txt-num small{font-size: 14px;}
      .iPro-txt-btn{height:40px;line-height: 40px;font-size:16px;}
      .iPro-txt-hd{padding:35px 16px;}
  }

</style>