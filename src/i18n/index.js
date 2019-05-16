import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as zh from './config/zh-CN-base.js'
import * as en from './config/en-US-base.js'
Vue.use(VueI18n);
const i18n = new VueI18n({
    // 设置默认语言
    locale: localStorage.getItem('locale') || 'zh', // 语言标识
    // 添加多语言（每一个语言标示对应一个语言文件）
    messages: {
        zh,
        en,
    }
})

export default i18n;
