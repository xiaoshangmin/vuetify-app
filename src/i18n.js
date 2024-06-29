import { createI18n } from 'vue-i18n';

// 定义多语言消息
const messages = {
  en: {
    welcome: 'Welcome',
    button: 'Switch Language',
    // 添加更多的翻译
  },
  zh: {
    welcome: '欢迎',
    button: '切换语言',
    // 添加更多的翻译
  },
};

// 创建 i18n 实例
const i18n = createI18n({
  locale: 'en', // 设置默认语言
  fallbackLocale: 'en', // 设置回退语言
  messages,
});

export default i18n;
