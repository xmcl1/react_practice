import zh_ from "./zh_CH.js"//import必须放在最顶部
import en_ from "./en_US.js"//import必须放在最顶部
const DI18n = require('di18n-translate')
// const zh_ = require("./zh_CH.js")
// const en_ = require("./en_US.js")
const di18n = new DI18n({
    locale: 'en',       // 语言环境
    isReplace: false,   // 是否开启运行时功能(适用于没有使用任何构建工具开发流程)
    messages: {         // 语言映射表
        en: en_,
        zh: zh_
    }
})
export default di18n;//用export default di18n（es6方法）导出，用import（es6方法）引入
// module.exports=di18n//用module.exports=di18n（node模块导出方法）导出，用require（node和es6方法）引入