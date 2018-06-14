<template>
  <div class="page-easy">
    <!-- iEasyHd -->
    <section class="iEasyHd">
      <div class="iCom-inner">
          <div class="iEasyHd-info">
              <h2 class="title" data-locale="easy.hd.title">dompet kamu 轻松赚0001
                <!-- <span>产品编号：0001<a href="/monthly" class="pushstate">查看往期</a></span> -->
              </h2>
              <div class="iEasyHd-brief formonthly">
                  <div class="iEasyHd-brief-top monthly">
                      <dl class="rate-box">
                          <dd>
                              <p>24<span>%</span></p>
                          </dd>
                          <dt>
                              <span data-locale="easy.hd.expectRate">期待年回报率</span>
                              <i class="glyphicon glyphicon-question-sign"><span class="hide-ask-info" data-locale="easy.hd.expectRatePop">期待年回报率不代表实际回报率</span></i>
                          </dt>
                      </dl>
                      <dl>
                          <dd>
                              <p>3<span data-locale="common.months">个月</span></p>
                          </dd>
                          <dt data-locale="easy.hd.lockTerm">锁定期限</dt>
                      </dl>
                      <dl>
                          <dd>
                              <p>6000000<span>RP</span></p>
                          </dd>
                          <dt data-locale="easy.hd.projectAmount">项目金额</dt>
                      </dl>
                  </div>
                  <div class="progress-info">
                      <span class="progress-label"><span data-locale="easy.hd.progress">进度</span> 62%</span>
                      <div class="progress">
                          <div class="progress-bar" data-width="62%" style="width: 62%">
                              <span class="blind">62%</span>
                          </div>
                      </div>
                  </div>
                  <div class="iEasyHd-brief-bot">
                      <ul>
                          <li>
                              <span data-locale="easy.hd.repayment">回款方式</span>：<em data-locale="easy.hd.repayment2">一次性还本付息</em>
                          </li>
                          <li>
                              <span data-locale="easy.hd.expectDate">预计起息日</span>：<em data-locale="easy.hd.expectDate2">充值到帳日</em>
                              <i class="glyphicon glyphicon-question-sign">
                                  <span class="hide-ask-info" data-locale="easy.hd.expectDatePop">实际起息日以进入锁定期时间为准</span>
                              </i>
                          </li>
                          <li>
                              <span data-locale="easy.hd.shortestTime">最短持有时间</span>：3<em data-locale="common.months">个月</em>
                          </li>
                          <li>
                              <span data-locale="easy.hd.longestTime">最长可持有时间</span>：
                              12<em data-locale="common.months">个月</em>
                              <i class="glyphicon glyphicon-question-sign">
                                  <span class="hide-transfer-info" data-locale="easy.hd.longestTimePop">
                                      3个月满后可继续持有，每月按递增回报率分别计算利息，最长可持有12个月
                                  </span>
                              </i>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="iEasyHd-control" id="form-info">
              <p>
                  <span data-locale="easy.hd.surplusAmount">剩余可投金额</span>：<span>740,700.00 <em data-locale="common.yuan">元</em></span>
              </p>
              <p>
                  <span data-locale="easy.hd.maxLoan">最高出借限额</span>：<span>50,000.00<em data-locale="common.yuan">元</em></span>
              </p>
              <form method="post" action="./login.html" id="bidForm" novalidate="novalidate">
                  <div id="bidFormData">
                      <p><span data-locale="easy.hd.balance">账户余额</span>：<a href="./login.html" class="open_login_layer ignore" data-locale="nav.login">登录</a><span data-locale="easy.hd.laterVisible">后可见</span></p>
                      <ul>
                          <li>
                              <input type="text" name="money" id="pay_money" class="input-normal" placeholder="加入金额为100的整数倍"
                              maxlength="10">
                              <span data-locale="common.yuan">元</span>
                              <p class="error-info" id="error-info"><i class="icon icon-error"></i><span data-locale="easy.hd.inputAmount">请输入金额</span></p>
                          </li>
                          <li class="coupon">
                              <input type="hidden" id="voucher_money">
                              <input type="hidden" id="voucher_type">
                              <input type="hidden" id="is_asseted">
                              <input type="hidden" id="is_title">
                              <div class="coupon-group input-normal disabled" data-locale="easy.hd.chooseCoupon">选择卡券</div>
                              <span class="warning" data-locale="easy.hd.unavailable">暂无可用</span>
                          </li>
                          <li class="income month">
                              <div style="display: none">
                                  <span data-locale="easy.hd.expectInterest">预期利息回报</span>：<em id="result"></em><em data-locale="common.yuan">元</em>
                                  <i class="glyphicon glyphicon-question-sign">
                                      <span class="hide-ask-info" data-locale="easy.hd.expectInterestPop">显示锁定期结束及到期的回报区间</span>
                                  </i>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <button type="submit" class="btn btn-success btn-block" data-locale="common.join">立即加入</button>
              </form>

          </div>
      </div>
    </section>

    <!-- iEasyWd -->
    <section class="iEasyWd">
      <div class="iCom-inner">
        <div class="iEasyWd-warning"><span data-locale="easy.wd.expectInterest">引入保险机制，市场有风险，出借需谨慎，详情请查看</span><a rel="nofollow" href="#" target="_blank" data-locale="easy.wd.protocol">《Dompetkamu理财产品服务协议》</a></div>
      </div>
    </section>
    <!-- iEasyTd -->
  <section class="iEasyTd">
    <div class="iCom-inner">
      <ul class="iEasyTd-nav">            
              <li class="on"><a href="javascript:;" data-locale="easy.td1.title">轻松赚详情</a></li>             
              <li class=""><a href="javascript:;" data-locale="easy.td2.title">标的组成</a></li>
          </ul>
          <div class="iEasyTd-con">
            <div class="iEasyTd-item on">
              <div class="invest-detail-content">
                
              <!-- <div class="project-progress">
                  <div class="progress-name">轻松赚进度</div>
                  <div class="progress-step">
                      <dl>
                          <dt>发布时间</dt>
                          <dd>2018-06-06</dd>
                      </dl>
                      <dl>
                          <dt>进入锁定期</dt>
                          <dd>2018-06-11</dd>
                      </dl>
                      <dl>
                          <dt>锁定期结束</dt>
                          <dd>2018-07-11</dd>
                      </dl>
                      <dl>
                          <dt>到期退出</dt>
                          <dd>2021-06-11</dd>
                      </dl>
                  </div>
                  <div class="progress-color-bar">
                      <dl class="active">
                          <dt></dt>
                          <dd></dd>
                      </dl>                     
                      <dl>
                          <dt></dt>
                          <dd></dd>
                      </dl>
                      <dl>
                          <dt></dt>
                          <dd></dd>
                      </dl>                 
                      <dl>
                          <dt></dt>
                          <dd></dd>
                      </dl>
                  </div>
              </div> -->

              <ul class="detail-list">
                  <li class="detail-list-element even">
                      <span class="s-title" data-locale="easy.td1.name">轻松赚名称</span>
                      <span class="s-content" data-locale="easy.hd.title">dompet kamu 轻松赚0001</span>
                  </li>
                  <li class="detail-list-element">
                      <span class="s-title" data-locale="easy.td1.introduce">轻松赚介绍</span>
                      <span class="s-content" data-locale="easy.td1.introduce2">轻松赚是dompetkamu为您提供的本金循环出借，到期固定保证收益退出工具。轻松赚的内容包含Dompetkamu贷款性信用贷及小额贷款商品。三个月锁定期后可自由申请退出，退出成功后，按照持有时间及对应的商品年报酬率计算收益，轻松赚适合对资金灵活性高的出借人。
                      </span>
                  </li>
                  <li class="detail-list-element even">
                      <span class="s-title" data-locale="easy.td1.type">标的类型</span>
                      <span class="s-content" data-locale="easy.td1.type2">信用贷，小额贷</span>
                  </li>
                  <li class="detail-list-element">
                      <span class="s-title" data-locale="easy.td1.condition">加入条件</span>
                      <span class="s-content" data-locale="easy.td1.condition2">每次最少6000000RP 每次6000000RP递增，一人限购60000000RP
                      </span>
                  </li>
                  <li class="detail-list-element even">
                      <span class="s-title" data-locale="easy.td1.lockTime">进入锁定期时间</span>
                      <span class="s-content" data-locale="easy.td1.lockTime2">充值到帐日</span>
                  </li>
                  <li class="detail-list-element">
                      <span class="s-title" data-locale="easy.td1.holdTime">持有时间</span>
                      <span class="s-content" data-locale="easy.td1.holdTime2">最短持有3个月 最常持有12个月</span>
                  </li>
                  <li class="detail-list-element even">
                      <span class="s-title" data-locale="easy.td1.gain">获得收益</span>
                      <span class="s-content" data-locale="easy.td1.gain2">进入锁定期后，开始计息，出借人退出成功后一次性计算本金和收益，每月分别计算收益，不足月部分按日计算。</span>
                  </li>
                  <li class="detail-list-element">
                          <span class="s-title" data-locale="easy.td1.quit">如何退出</span>
                          <span class="s-content" data-locale="easy.td1.quit2">锁定期后随时可以退出，锁定期内不能退出，申请退出后，债权将批次转让，按此批次撮合交易，视债权转让交易情况而定，一般为提交退出的五个自然工作日，退出期间仍然计息，计息截止到实际退出的前一日。
                          </span>
                  </li>
                  <li class="detail-list-element even">
                      <span class="s-title" data-locale="easy.td1.cost">费用</span>
                      <span class="s-content">
                          <span data-locale="easy.td1.cost2">管理服务费</span>  <a href="#" class="link pushstate" target="_blank">【<span data-locale="easy.td1.viewDetail">查看详情</span>】</a>
                      </span>
                  </li>
                  <li class="detail-list-element">
                      <span class="s-title" data-locale="easy.td1.protocol">服务协议</span>
                      <span class="s-content">
                          <a href="#" class="link" target="_blank" data-locale="easy.td1.protocol2">《dompet kamu 轻松赚0001》</a>
                      </span>
                  </li>
              </ul>
          </div>
            </div>
            <div class="iEasyTd-item">
              <div class="package-composition">
              <p class="fre-msg">                 
                  <i class="pocket-icon glyphicon glyphicon-info-sign"></i><span data-locale="easy.td2.warn">为了保护借款人信息，仅展示部分标的，轻松赚内匹配标的以实际情况为准，进入锁定期即可查看所有标的详情。</span>
              </p>
              <table class="table">
                  <colgroup>
                      <col width="540px">
                      <col width="500px">
                      <col width="100px">
                  </colgroup>
                  <thead>
                  <tr>
                      <th data-locale="easy.td2.th1">项目名称</th>
                      <th data-locale="easy.td2.th2">项目金额</th>
                      <th data-locale="easy.td2.th3">借款期限</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  <tr>
                  <td><a href="/bids/193078132" class="pushstate">【寿险贷】扩大经营</a></td>
                  <td>62,207.01元</td>
                  <td>36个月</td>
                  </tr>
                  
                  </tbody>
              </table>
          </div>
            </div>
            <!-- <div class="iEasyTd-item">
              <div class="package-records">
              <table class="table">
                  <colgroup>
                      <col width="180px">
                      <col width="280px">
                      <col width="220px">
                      <col width="300px">
                      <col width="">
                  </colgroup>
                  <thead>
                  <tr>
                      <th>序号</th>
                      <th>出借人</th>
                      <th>加入金额</th>
                      <th>加入渠道</th>
                      <th>加入时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  <tr>
                      <td>1</td>
                      <td>lun****</td>
                      <td>50,000.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 16:54:50</td>
                  </tr>
                  
                  <tr>
                      <td>2</td>
                      <td>hxd************</td>
                      <td>1,000.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 16:40:56</td>
                  </tr>
                  
                  <tr>
                      <td>3</td>
                      <td>136********</td>
                      <td>49,900.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 16:30:51</td>
                  </tr>
                  
                  <tr>
                      <td>4</td>
                      <td>136********</td>
                      <td>300.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 16:16:16</td>
                  </tr>
                  
                  <tr>
                      <td>5</td>
                      <td>hxd************</td>
                      <td>1,000.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 16:16:04</td>
                  </tr>
                  
                  <tr>
                      <td>6</td>
                      <td>153********</td>
                      <td>35,000.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 16:07:57</td>
                  </tr>
                  
                  <tr>
                      <td>7</td>
                      <td>186********</td>
                      <td>50,000.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 15:08:30</td>
                  </tr>
                  
                  <tr>
                      <td>8</td>
                      <td>182********</td>
                      <td>300.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 15:05:25</td>
                  </tr>
                  
                  <tr>
                      <td>9</td>
                      <td>che****</td>
                      <td>100.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 15:01:46</td>
                  </tr>
                  
                  <tr>
                      <td>10</td>
                      <td>zhy******</td>
                      <td>300.00</td>
                      <td>客户端</td>
                      <td>2018-06-07 15:00:53</td>
                  </tr>
                  
                  </tbody>
              </table>
          </div>
            </div>
            <div class="iEasyTd-item">
              <div class="package-qa">
              <ul>
                  <li>
                      <span>轻松赚有什么特点？适合什么样的出借人？</span>
                  </li>
                  <li>
                      100元起投，1个月锁定期，逐月加息，适合对资金灵活性要求较高的出借人。
                  </li>
                  <li>
                      <span>轻松赚与踏实赚有哪些不同？</span>
                  </li>
                  <li>
                      轻松赚锁定期短，只有1个月，踏实赚锁定期相对较长。<br>
                      轻松赚锁定期内不能退出，踏实赚锁定期内持满1个月可紧急退出。<br>
                      计息方式上，轻松赚每月分别计算利息，踏实赚按最长持有时间对应的期待年回报率统一结算。
                  </li>
                  <li>
                      <span>轻松赚的利息是如何计算的？</span>
                  </li>
                  <li>
                      每月分别计算利息，不足月部分按当月期待年回报率按日计息；<br>
                      以首月期待年回报率为5%，出借1万元，持有3个月零10天(假定持有期间为2017/01/01-2017/04/11)的利息约为：<br>
                      10000*（5%+5.5%+6%）/12+10000*6.3%/12*10/30=155元。
                  </li>
                  <li>
                      <span>轻松赚利息是怎么结算的？</span>
                  </li>
                  <li>
                      进入锁定期后开始计息，持有满1个月后可随时申请退出，退出成功后一次性还本付息到您的存管账户中。
                  </li>
                  <li>
                      <span>申请退出轻松赚需要等待多长时间才能正常退出？</span>
                  </li>
                  <li>
                      您申请退出后，系统将以债权转让方式退出并按批次撮合交易，视债权转让交易情况而定，一般为提交之日起的5个自然日。退出期间仍然计息，计息截止至成功退出日前一日。
                  </li>
                  <li>
                      <span>退出有什么注意事项吗？</span>
                  </li>
                  <li>
                      退出时间：持有1个月后可申请退出，视债权转让交易情况而定，一般为提交之日起的5个自然日。<br>
                      退出申请：点击申请退出后，在项目进入“退出中”状态前可取消申请，每天每个项目仅可申请退出1次。<br>
                      退出费用：免费。
                  </li>
              </ul>
          </div>
            </div> -->
          </div>
    </div>
  </section>
  
  </div>
</template>

<script>
export default {
  name: 'PageEasy',
  data(){
  	return {
  		
  	}
  }
}
</script>

<style scoped>
	p,dl,h2{margin:0;}
  dt{font-weight: normal;}
  /*iEasyHd*/
  .iEasyHd{position: relative;z-index: 1; margin-top:20px;clear:both;overflow:hidden;}
  .iEasyHd-info{position: relative;width: 800px;height: 420px;background: #fff; float: left; border-right: 1px solid #e0e0e0;}
  .iEasyHd-control{ float: left;padding: 20px 30px;width: 380px;height: 420px; background: #fff;}


  .iEasyHd-info .title {
    height: 59px;
    line-height: 60px;
    font-size: 18px;
    padding: 0 20px 0 50px;
    background: #fff;
    color: #333;
    border-bottom: 1px solid #e0e0e0
  }

  .iEasyHd-info .title .icon {
    vertical-align: text-bottom;
    margin-right: 6px
  }

  .iEasyHd-info .title span {
    float: right;
    font-size: 14px;
    color: #999
  }

  .iEasyHd-info .title a {
    color: #0091ea;
    margin-left: 5px
  }

  .iEasyHd-info .iEasyHd-brief {
    padding-top: 55px
  }

  .iEasyHd-info .iEasyHd-brief .part-line {
    width: 100%;
    height: 1px;
    border-top: 1px solid #e0e0e0;
    margin: 25px 0 20px
  }

  .iEasyHd-info .iEasyHd-brief.forpocket {
    padding-top: 35px
  }

  .iEasyHd-info .iEasyHd-brief-top {
    width: 720px;
    height: 100px;
    padding-left: 55px
  }

  .iEasyHd-info .iEasyHd-brief-top dl,.iEasyHd-info .iEasyHd-brief-top.monthly dl {
    width: 200px;
    height: 110px;
    float: left
  }

  .iEasyHd-info .iEasyHd-brief-top dl dd {
    color: #313131;
    font-size: 16px;
    height: 84px;
    position: relative
  }

  .iEasyHd-info .iEasyHd-brief-top dl dt {
    color: #999;
    font-size: 14px
  }

  .iEasyHd-info .iEasyHd-brief-top dl.last-dl-box {
    width: 320px;
    height: 110px;
    float: left
  }

  .iEasyHd-info .iEasyHd-brief-top.monthly dl.rate-box {
    width: 260px;
    height: 110px;
    float: left
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box {
    width: 200px
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dt i {
    position: relative;
    margin-top: 2px;
    margin-left: 5px;
    cursor: help
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dt i .hide-ask-info {
    background: url(../assets/images/hide-ask-info-bg.png) no-repeat;
    width: 152px;
    height: 52px;
    display: none;
    position: absolute;
    top: -60px;
    left: -78px;
    text-align: left;
    line-height: 20px;
    z-index: 2;
    padding: 5px 10px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dt i:hover .hide-ask-info {
    display: block
  }

  .iEasyHd-info .iEasyHd-brief-top dl b {
    color: #0091ea;
    display: inline-block;
    margin-left: 5px;
    position: relative;
    font-size: 14px;
    cursor: help
  }

  .iEasyHd-info .iEasyHd-brief-top dl b u {
    color: #313131;
    display: block;
    text-decoration: none;
    line-height: 20px
  }

  .iEasyHd-info .iEasyHd-brief-top dl b i {
    color: #65B867;
    margin-top: 2px
  }

  .iEasyHd-info .hide-transfer-info {
    background: url(../assets/images/hide-ask-info-bg2.png) no-repeat;
    width: 183px;
    height: 68px;
    display: none;
    position: absolute;
    top: -80px;
    left: -85px;
    padding-top: 15px;
    padding-left: 15px;
    z-index: 2
  }

  .iEasyHd-info .formonthly .hide-transfer-info {
    background: url(../assets/images/hide-ask-info-bg2.png) no-repeat;
    width: 178px;
    height: 63px;
    left: -90px;
    padding: 10px;
    line-height: 18px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .iEasyHd-info i:hover .hide-transfer-info,.iEasyHd-info b:hover .hide-transfer-info {
    display: block
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position {
    width: 120px;
    height: 24px;
    position: absolute;
    top: 0;
    right: 20px
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .plus {
    color: #65B867;
    margin-right: 5px
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .discount,.iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .reward {
    font-size: 14px;
    border: 1px solid #65B867;
    border-radius: 4px;
    color: #65B867
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .discount>em,.iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .reward>em {
    background: #65B867;
    color: #fff;
    padding: 0 10px
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .discount>span,.iEasyHd-info .iEasyHd-brief-top dl.rate-box dd .rate-box-position .reward>span {
    padding: 0 5px
  }

  .iEasyHd-info .iEasyHd-brief-top dl dd p {
    font-size: 48px;
    color: #313131
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd p {
    font-size: 48px;
    color: #65B867
  }

  .iEasyHd-info .iEasyHd-brief-top dl dd p span {
    font-size: 18px;
    color: #313131
  }

  .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd p span {
    font-size: 18px;
    color: #65B867
  }

  .iEasyHd-info .iEasyHd-brief-bot {
    width: 720px;
    height: 90px;
    padding-left: 55px
  }

  .iEasyHd-info .iEasyHd-brief-bot.fornovices {
    height: 75px;
    padding-top: 15px
  }

  .iEasyHd-info .iEasyHd-brief-bot ul {
    padding-top: 14px
  }

  .iEasyHd-info .iEasyHd-brief-bot ul li {
    font-size: 14px;
    color: #333;
    min-width: 280px;
    float: left;
    line-height: 34px
  }

  .iEasyHd-info .iEasyHd-brief-bot ul.transfer {
    padding-top: 0
  }

  .iEasyHd-info .iEasyHd-brief-bot ul.transfer li {
    line-height: 24px;
    width: 340px
  }

  .iEasyHd-info .iEasyHd-brief-bot ul.transfer li a {
    color: #0091ea
  }

  .iEasyHd-info .iEasyHd-brief-bot ul li span {
    font-size: 14px;
    color: #999
  }
  .iEasyHd-info .iEasyHd-brief-bot ul li em{font-style: normal;}
  .iEasyHd-info .iEasyHd-brief-bot i {
    position: relative;
    margin-top: 9px;
    margin-left: 5px;
    cursor: help
  }

  .iEasyHd-info .iEasyHd-brief-bot .hide-ask-info {
    background: url(../assets/images/hide-ask-info-bg.png) no-repeat;
    width: 152px;
    height: 52px;
    display: none;
    position: absolute;
    top: -60px;
    left: -78px;
    text-align: left;
    line-height: 20px;
    z-index: 2;
    padding: 5px 10px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .iEasyHd-info .iEasyHd-brief-bot i:hover .hide-ask-info {
    display: block
  }

  .iEasyHd-control p {
    height: 30px;
    font-size: 14px;
    color: #888
  }

  .iEasyHd-control p.warning-info {
    text-align: center;
    color: #65B867
  }

  .iEasyHd-control p a {
    color: #65B867
  }

  .iEasyHd-control p a.recharge {
    float: right;
    color: #0091ea
  }

  .iEasyHd-control p.fortransfer {
    position: relative
  }

  .iEasyHd-control p.fortransfer a.recharge {
    position: absolute;
    top: 150px;
    right: 0
  }

  .iEasyHd-control dl {
    margin-top: 20px
  }

  .iEasyHd-control dl dd {
    font-size: 24px;
    color: #313131;
    margin-bottom: 10px
  }

  .iEasyHd-control dl dd.text-red {
    color: #65B867
  }
  .iEasyHd-control .input-normal {
      font-size: 14px;
      width: 100%;
      height: 38px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 10px;
      display: block;
      background: #fff;
  }

  .iEasyHd-control .coupon-group {
      cursor: pointer;
      line-height: 38px;
      color: #313131;
      font-size: 14px;
  }

  .iEasyHd-control ul li.coupon .warning {
      color: #65B867;
  }
  .iEasyHd-brief .progress-info {
      line-height: 30px;
      padding-left: 55px;
      position: relative;
      color: #888;
      clear: both;
      font-size: 14px;
      padding-top: 20px;
  }
  .iEasyHd-brief .progress-info .progress {
      width: 585px;
      height: 4px;
      background-color: #eceff1;
      position: absolute;
      top: 33px;
      left: 135px;
  }
  .iEasyHd-brief .progress-info .progress-bar {
      width: 0;
      height: 4px;
      background-color: #65B867;
  }

  .iEasyHd-control ul li span {
      font-size: 14px;
      position: absolute;
      right: 10px;
      top: 10px;
      color: #313131;
  }
  .iEasyHd-control ul{padding-top:20px;}
  .iEasyHd-control ul li{ position: relative;}
  .iEasyHd-control ul li.coupon{height:42px;}
  .iEasyHd-control ul li.income {
      height: 28px;
      line-height: 26px;
      color: #7d7d7d;
  }
  .iEasyHd-control p.bankInfo {
      font-size: 12px;
      color: #999;
      text-align: center;
      padding-top: 25px;
  }
  .glyphicon-question-sign{color:#999;}

  .iEasyHd-control ul li.month .hide-ask-info, .iEasyHd-control ul li.pocket .hide-ask-info {
      display: none;
      position: absolute;
      text-align: left;
      line-height: 20px;
      padding: 5px 10px;
      font-size:14px;
      z-index: 2;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
  }
  .iEasyHd-control ul li.month .hide-ask-info {
      background: url(../assets/images/hide-ask-info-bg.png) no-repeat;
      width: 152px;
      height: 52px;
      top: -60px;
      left: -78px;
  }

  .iEasyHd-control ul li.month i:hover .hide-ask-info {
    display: block
  }
  /*iEasyWd*/
  .iEasyWd .iCom-inner{background-color:#fff;margin-top:20px;}
  .iEasyWd-warning {padding-left: 40px;height: 60px;line-height: 60px;font-size: 14px; color: #999; }
  .iEasyWd-warning a{color:#0091ea;}

  /*iEasyTd*/
  .iEasyTd .iCom-inner{
      min-height: 500px;
      background: #fff;
      margin: 20px auto;
  }
  .iEasyTd-nav{
      color: #999;
      height: 52px;
      background: #fff;
      border-bottom: 1px solid #f2f2f2;
  }
  .iEasyTd-nav li{
    float: left;
      width: 25%;
      text-align: center;
  }
  .iEasyTd-nav li a {
      color: #999;
      height: 52px;
      font-size: 16px;
      line-height: 50px;
  }
  .iEasyTd-nav li a:hover, 
  .iEasyTd-nav li.on a {
      color: #65B867;
      border-bottom: 2px solid #65B867;
      padding-bottom: 16px;
      padding-left: 2px;
      padding-right: 2px;
      text-decoration: none;
  }

  .iEasyTd-item{display: none;}
  .iEasyTd-item.on{display: block;}


  .project-progress {
      width: 1140px;
      height: 235px;
      padding-top: 40px;
      background: #fff
  }

  .project-progress.fornovices {
      padding-left: 40px;
      margin-top: 20px;
      height: 270px
  }

  .project-progress .progress-name {
      width: 130px;
      height: 195px;
      margin-right: 30px;
      float: left;
      text-align: right;
      font-size: 14px;
      color: #888
  }

  .project-progress.fornovices .progress-name {
      height: 50px;
      float: none;
      font-size: 16px;
      color: #333;
      text-align: left
  }

  .project-progress .progress-step {
      float: left;
      width: 890px;
      height: 80px
  }

  .project-progress.fornovices .progress-step {
      float: none;
      width: 1100px;
      position: relative
  }

  .project-progress.fornovices .novice-tips {
      position: absolute;
      font-size: 14px;
      color: #65B867;
      left: 710px;
      top: 37px
  }

  .project-progress.fornovices .novice-tips .hide-transfer-info {
      background: url(//static.hexindai.com/lv2/img/hide-transfer-info-dafae2a1e9.png) no-repeat;
      width: 182px;
      height: 53px;
      display: none;
      position: absolute;
      top: -80px;
      left: 110px;
      padding: 15px 8px;
      z-index: 2;
      line-height: 22px;
      color: #333;
      font-size: 12px
  }

  .project-progress.fornovices .novice-tips .icon {
      margin-top: 2px
  }

  .project-progress.fornovices .novice-tips .icon:hover .hide-transfer-info {
      display: block
  }

  .project-progress.fornovices .progress-color-bar dl,.project-progress.fornovices .progress-color-bar dl dd {
      width: 274px
  }

  .project-progress.fornovices .progress-color-bar dl:last-child dt {
      margin-left: 214px
  }

  .project-progress .progress-step dl {
      width: 221px;
      height: 80px;
      float: left;
      text-align: left
  }

  .project-progress.fornovices .progress-step dl {
      width: 274px
  }

  .project-progress .progress-step dl:last-child,.project-progress.fornovices .progress-step dl.lastDl {
      text-align: right
  }

  .project-progress .progress-step dl.two-length {
      width: 443px
  }

  .project-progress.fornovices .progress-step dl.two-length {
      width: 549px
  }

  .project-progress .progress-step dl dt {
      font-size: 16px;
      color: #333;
      line-height: 30px;
      height: 30px
  }

  .project-progress .progress-step dl dd {
      font-size: 15px;
      color: #999;
      line-height: 32px;
      height: 50px
  }

  .project-progress .progress-color-bar dl {
      width: 221px;
      height: 60px;
      float: left;
      text-align: left
  }

  .project-progress .progress-color-bar dl.two-length {
      width: 443px
  }

  .project-progress.fornovices .progress-color-bar dl.two-length {
      width: 549px
  }

  .project-progress .progress-color-bar dl dt {
      width: 60px;
      height: 29px;
      border-top: 1px solid #E0E0E0;
      border-left: 1px solid #E0E0E0
  }

  .project-progress .progress-color-bar dl dd {
      width: 221px;
      height: 30px;
      background: #E0E0E0;
      border-left: 1px solid #fff
  }

  .project-progress .progress-color-bar dl.two-length dd {
      width: 443px
  }

  .project-progress.fornovices .progress-color-bar dl.two-length dd {
      width: 549px
  }

  .project-progress .progress-color-bar dl.active dt {
      border-left: 1px solid #65B867;
      border-top: 1px solid #65B867
  }

  .project-progress .progress-color-bar dl:first-child dd,.project-progress .progress-color-bar dl:last-child dd {
      border-left: 1px solid #E0E0E0
  }

  .project-progress .progress-color-bar dl:first-child dt {
      margin-left: 1px
  }

  .project-progress .progress-color-bar dl.active.over dd {
      background: #65B867
  }
  .project-progress .progress-color-bar dl:last-child dt {
      border-right: 1px solid #E0E0E0;
      border-top: 1px solid #E0E0E0;
      border-left: 0;
      margin-left: 161px;
  }
  .detail-list .detail-list-element {
      padding: 20px 0;
      background: #fafafa;
      overflow: hidden;
      color: #313131
  }

  .detail-list .detail-list-element:nth-child(2n) {
      background: #fff
  }

  .detail-list .detail-list-element.even {
      background: #fafafa
  }

  .detail-list .detail-list-element .s-title {
      display: block;
      float: left;
      width: 130px;
      text-align: right;
      font-size: 14px;
      margin-right: 20px;
      line-height: 24px;
      color: #999
  }

  .detail-list .detail-list-element .s-content {
      display: block;
      float: left;
      width: 980px;
      font-size: 14px;
      line-height: 24px
  }

  .detail-list .detail-list-element .s-content em {
      display: inline-block;
      color: #65B867;
      font-size: 20px;
      margin-top: -6px
  }

  .detail-list .detail-list-element .s-content a.link {
      color: #0091ea
  }

  .novice-details {
      display: none
  }

  .detail-list h4.bids-title {
      height: 62px;
      border-bottom: 1px solid #F2F2F2;
      font-size: 18px;
      color: #333;
      line-height: 62px;
      padding-left: 40px
  }
  .iEasyTd-item {padding:0 20px 50px;}
  .package-composition .fre-msg {
      height: 20px;
      margin: 18px 0 0 20px;
      line-height: 20px;
      font-size: 14px;
      color: #65B867
  }

  .package-composition .fre-msg .pocket-icon {
      position: relative;
      top: 4px;
      margin-right: 10px
  }

  .package-qa ul,.transfer-qa ul {
      margin: 40px 40px 0
  }

  .package-qa ul li:nth-child(2n+1),.transfer-qa ul li:nth-child(2n+1) {
      margin-bottom: 15px;
      font-size: 16px;
      color: #313131
  }

  .package-qa ul li:nth-child(2n),.transfer-qa ul li:nth-child(2n) {
      margin-bottom: 25px;
      font-size: 14px;
      color: #999;
      line-height: 1.5
  }

  .transfer-qa ul li p {
      line-height: 24px
  }


  .iEasyTd .table {
      margin: 20px 0;
      width: 1140px;
      border-spacing: 0;
      border-collapse: collapse
  }

  .iEasyTd .table thead tr {
      background: #fafafa;
      height: 50px;
      color: #999;
      font-size: 14px
  }

  .iEasyTd .table tbody tr {
      height: 50px;
      color: #313131;
      font-size: 14px
  }

  .iEasyTd .table tbody tr:nth-child(even) {
      background: #fafafa
  }

  .iEasyTd .table thead tr th {
      font-weight: 400
  }

  .iEasyTd .table tbody tr td .pushstate {
      color: #313131
  }

  .iEasyTd .table tbody tr td,.iEasyTd .table thead tr th {
      text-align: left
  }

  .iEasyTd .table tbody tr td:last-child,.iEasyTd .table thead tr th:last-child {
      text-align: right;
      padding-right: 20px
  }

  .iEasyTd .table tbody tr td:first-child,.iEasyTd .table thead tr th:first-child {
      padding-left: 20px
  }

  .iEasyTd .credit-group {
      background: #fafafa;
      padding: 20px;
      overflow: hidden
  }

  .iEasyTd .table.table-credit {
      width: 540px;
      float: left;
      margin: 10px 20px 10px 0
  }

  .iEasyTd .table.table-credit:nth-child(even) {
      margin-right: 0
  }

  .iEasyTd .table.table-credit tbody tr td,.iEasyTd .table.table-credit thead tr th {
      border-right: 1px solid #e0e0e0
  }

  .iEasyTd .table.table-credit tbody tr td:last-child,.iEasyTd .table.table-credit thead tr th:last-child {
      text-align: center;
      border-right: 0
  }

  .iEasyTd .table.table-credit tbody tr td:last-child {
      color: #00c94c
  }

  .iEasyTd .table.table-credit tbody tr:last-child td {
      border-bottom: 0
  }

  .iEasyTd .table.table-credit tbody tr:nth-child(even) {
      background: #fff
  }

  .iEasyTd .table.table-credit tbody tr td,.iEasyTd .table.table-credit thead tr th {
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
      text-align: center;
      color: #333;
      font-size: 14px
  }

  .iEasyTd .table.table-credit tbody tr td:first-child,.iEasyTd .table.table-credit thead tr th:first-child {
      padding-left: 0
  }

  @media screen and (max-width:1200px){
      .iEasyHd-info{width:100%;border-right:0;margin-bottom:20px;clear:both;height:auto;padding-bottom:20px;}
      .iEasyHd-info .iEasyHd-brief-top{width:100%;}
      .iEasyHd-control{width:100%;height:auto;}
      .iEasyTd .table{width:100%;}
      .detail-list .detail-list-element .s-title{float:none;display: block;width:100%;text-align: left;}
      .detail-list .detail-list-element .s-content{float:none;display: block;width:100%;text-align: left;}
      .detail-list .detail-list-element{margin:0 -20px;padding:20px;width:auto;}
      .iEasyWd-warning{padding:20px; height:auto;line-height: 30px;}
  }

  @media screen and (max-width:992px){
      
  }

  @media screen and (max-width:768px){
      .iEasyHd-info .title{padding:15px 20px;line-height: 30px; height:auto;}
     .iEasyHd-info .iEasyHd-brief-top,
     .iEasyHd-info .iEasyHd-brief-bot{padding:0 20px;width:auto;}
     .iEasyHd-info .iEasyHd-brief-top.monthly dl,
     .iEasyHd-info .iEasyHd-brief-top.monthly dl.rate-box{width:33.333%;text-align: center;}
     .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd p,
     .iEasyHd-info .iEasyHd-brief-top dl dd p{font-size: 30px;}
     .iEasyHd-brief .progress-info{padding:20px 20px 0 100px;position: relative;}
     .progress-label{position: absolute;left:20px;top:20px;}
     .iEasyHd-brief .progress-info .progress{display: block;width:100%;top:auto;left:auto;position: relative;margin-top:12px;}

     .iEasyHd-info .iEasyHd-brief-bot ul li{min-width:10px;width:50%;}
  }

  @media screen and (max-width:480px){    
      .iEasyHd-info .title{padding:10px;}
     .iEasyHd-info .iEasyHd-brief-top,
     .iEasyHd-info .iEasyHd-brief-bot{padding:0 10px;}
     .iEasyHd-brief .progress-info{padding:20px 10px 0 90px;}
     .progress-label{left:10px;}
     .iEasyHd-info .iEasyHd-brief-top dl.rate-box dd p, .iEasyHd-info .iEasyHd-brief-top dl dd p{font-size:20px;word-wrap:break-word;}
     .iEasyHd-info .iEasyHd-brief{padding:30px 0 0;}
     .iEasyHd-info .iEasyHd-brief-top dl dd{height:64px;}
     .iEasyHd-info .iEasyHd-brief-bot ul li{width:100%;}
     .iEasyTd-nav li{width:50%;}
     .iEasyHd-control{padding:20px 10px;}
     .iEasyWd-warning{padding:20px 10px;}
     .iEasyTd-item { padding: 0 10px 30px;}
  }

</style>