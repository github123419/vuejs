import Vue from 'vue' 
import VueI18n from 'vue-i18n'  
Vue.use(VueI18n)  

import en from './langs/en';  
import cn from './langs/cn';  

import storage from '@/utils/storage'

let messages = {  
  en: en,  
  cn: cn  
} 

let lang = storage.getStorage('lang');

let i18n = new VueI18n({  
    locale: lang || 'cn',  
    messages
})  
  
export default i18n