<template>
  <div class="page-about">
    <!-- about_top_banner -->
    <div class="about_top_banner">
        <div class="iCom-inner">
            <div class="banner-inner">
                <h3 class="banner-title">Dompet Kamu</h3> 
                <p class="banner-subTitle" data-locale="about.banner.subTitle">理财版</p>
            </div>
        </div>
    </div>
    <!-- iAboutHd -->
    <section class="iAboutHd">
      <div class="iCom-inner">
         <div class="about_text">
          <div class="title" data-locale="about.hd.title">平台介绍 Platform Introduction</div>
            <h3 class="subTitle" data-locale="about.hd.subTitle">完善的平台模式和领先的技术是理财安全的根本,除了技术和模式，如何保障您的投资理财安全</h3>
            <div class="content">
              <p data-locale="about.hd.content01">1.项目风控</p>
              <p data-locale="about.hd.content02">2.Dompetkamu贷款 风控系统，具有领先在印尼的决策引擎，保障放款安全，安全审视借款人，极低的呆帐率表现。</p>
              <p data-locale="about.hd.content03">3.资金保护 ：平台支付系统与银行托管协议，交易资金直接与银行进行托管协议，完全根据您的订单需求，进行资金与借款人媒和，平台触摸不到您的钱。</p>
              <p data-locale="about.hd.content04">4.合同保护，保证收益：签订理财合同为保证收益，媒合之借款人产生逾期或是呆帐情形，直接转让债权给予平台，让投资人保障收益，由平台进行剩下债权之催收。</p>
              <p data-locale="about.hd.content05">5.隐私保护：我们采用本地数据库，金融级安全凭证系统，您的数据受到严格的保护。</p>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'PageAbout',
  data(){
  	return {
  		
  	}
  }
}
</script>

<style scoped>
  .about_top_banner{ width: 100%; height: 320px;text-align: center;line-height: 1.5; 
    background: url('../assets/images/about_top_banner.jpg') center;}
  .banner-inner{display: table-cell;vertical-align: middle;height:320px;width:1185px;max-width:100%;}
  .banner-title{font-size: 52px;color:#fff;}
  .banner-subTitle{font-size: 66px;color:#fff;}
  .about_text{ padding: 90px 0 100px 150px;}
  .about_text .title{ margin-bottom:30px;font-size: 26px; line-height: 34px; color:#575c5c;}
  .about_text .subTitle{position: relative;margin:0; font-size: 20px;line-height:40px;color:#575c5c;font-weight: normal;}
  .about_text .subTitle:before{content:'';display:block;position: absolute;top:0;left:0;width:40px;height:0;border-top:1px solid #b2a377;}
  .about_text p{ font-size: 14px; line-height: 28px;color:#575c5c;}
  @media screen and (max-width:1200px){
      .about_text{ padding: 90px 0 100px 0;}
  }
  @media screen and (max-width:768px){
      .banner-title{font-size: 40px;}
      .banner-subTitle{font-size: 50px;}
  }
  @media screen and (max-width:480px){
      .about_top_banner,.banner-inner{height:240px;}
      .banner-title{font-size: 30px;}
      .banner-subTitle{font-size: 36px;}
      .about_text{ padding: 40px 0 60px 0;}
  }
</style>