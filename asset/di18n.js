const LOCALE = 'en'
const DI18n = require('di18n-translate')
const di18n = new DI18n({
    locale: LOCALE,       // 语言环境
    isReplace: false,   // 是否开启运行时功能(适用于没有使用任何构建工具开发流程)
    messages: {         // 语言映射表
        en: {
            hello: 'Hello, {xl}'
        },
        zh: {
            hello: '你好, {xl}'
        }
    }
})
module.export = di18n;