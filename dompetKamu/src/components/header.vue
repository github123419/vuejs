<template> 
	<div class="iHed" id="iHed">
		<div class="iCom-inner">
	        <a href="./index.html" class="iHed-logo">
	            <img src="@/assets/images/logo.png" alt="logo">	       
	        </a>
	        <ul :class="['iHed-nav',activeLangItem.lang=='cn'?'addPadding':'']">
	            <li :class="['iHed-item','iHed-item1',activeNavPath==='/'?'active':'']">
	            	<a data-locale="nav.home" @click="navLinkClick('/')">{{ $t("nav.home") }}</a>
	            </li>
	            <li :class="['iHed-item','iHed-item2',activeNavPath==='/easy'?'active':'']">
	            	<a data-locale="nav.easy" @click="navLinkClick('/easy')">{{ $t("nav.easy") }}</a>
	           	</li>
	            <li :class="['iHed-item','iHed-item3',activeNavPath==='/stable'?'active':'']">
	            	<a data-locale="nav.stable" @click="navLinkClick('/stable')">{{ $t("nav.stable") }}</a>
	            </li>
	            <li :class="['iHed-item','iHed-item4',activeNavPath==='/about'?'active':'']">
	            	<a data-locale="nav.platform" @click="navLinkClick('/about')">{{ $t("nav.about") }}</a>
	            </li>
	            <!-- <li class="iHed-item iHed-item5">	            	
	            	<a href="https://play.google.com/store/apps/details?id=com.tupulian.walletpicker.indonesia" target="_blank" data-locale="nav.app">{{ $t("nav.app") }}</a>
	            </li> -->
	            <li class="logReg" v-if="(!isLogined)">
	            	<a data-locale="nav.login" @click="navLinkClick('/login')">{{ $t("nav.login") }}</a>
	            	/
	            	<a data-locale="nav.register" @click="navLinkClick('/reg')">{{ $t("nav.reg") }}</a>
	            </li>
	            <li class="account" v-if="isLogined">
	            	<a data-locale="nav.account" @click="navLinkClick('/account')">{{ $t("nav.account") }}</a>
	            	/
	            	<span class="logout" data-locale="nav.logout" @click="navLinkClick('/logout')">{{ $t("nav.exit") }}</span>
	            </li>
	            <li class="lang">
	                <div class="dropdown iHed-dropdown">
						<button type="button" class="btn dropdown-toggle" id="lang-sel" data-toggle="dropdown">{{activeLangItem.name}}</button>
						<ul class="dropdown-menu" role="menu" aria-labelledby="lang-sel">
							<li role="presentation" v-for="(langItem,key) in langList" :class="langItem.isSelected?'active':''">
								<a role="menuitem" :tabindex="key"  @click="setLang(langItem)">{{langItem.name}}</a>
							</li>
						</ul>
					</div>
	            </li>
	        </ul>
	        <span class="glyphicon glyphicon-align-justify iHed-menuBtn"></span>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'Header',
  data(){
  	return {
  		activeNavPath: '/',
  		activeLangItem: {},
  		langList:[
  			{lang: 'cn', name: '中文', isSelected: false},
  			{lang: 'en', name: 'English', isSelected: false}
  		]
  	}
  },
  computed: {
	isLogined: function () {
	    return this.$store.state.isLogined;
	}
  },
  created(){
  	//lang  	
  	let lang = this.$storage.getStorage('lang')||'cn';
  	console.log(lang)
	this.langList.forEach((obj)=>{
  		if(obj.lang===lang){
  			this.$set(this,'activeLangItem',obj)
  			this.$set(obj,'isSelected',true)
  		}else{
  			this.$set(obj,'isSelected',false)
  		}
  	})

  	//login
  	this.$store.commit('signIn');
  	this.$set(this,'activeNavPath',this.$route.path)
  },  
  methods:{
  	navLinkClick(paramPath){
  		if(paramPath=='' || !paramPath){
  			console.log('this link has no path!')

  		}else if(paramPath==='/logout'){
  			this.$storage.setStorage("isLogined",false,0); 
		    this.$store.commit('signOut');

  			this.$set(this,'activeNavPath','/')
  			this.$router.push({ path: '/'})	 

  		}else{
  			this.$set(this,'activeNavPath',paramPath)
  			this.$router.push({ path: paramPath})
  		}
  		
  	},
  	setLang(langItem){
  		let lang = langItem.lang||'cn';
  		this.$storage.setStorage('lang',lang,1000*60*60*24*7); //存7天；
  		this.$i18n.locale = lang;
  		this.langList.forEach((obj)=>{
	  		if(lang===obj.lang){
	  			this.$set(this,'activeLangItem',obj)
	  			this.$set(obj,'isSelected',true)
	  		}else{
	  			this.$set(obj,'isSelected',false)
	  		}
	  	})
  	}
  }
}
</script>

<style>

</style>
