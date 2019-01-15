import React from "react";
import "./home.css"
// import di18n from "../../asset/di18n.js"
var DI18n = require('di18n-translate')
var di18n = new DI18n({
    locale: 'en',       // 语言环境
    isReplace: false,   // 是否开启运行时功能(适用于没有使用任何构建工具开发流程)
    messages: {         // 语言映射表
        en: {
            hello: 'Hello, {xl}',
            home: 'Home',
            cutOverFlow: 'cutOverFlow',
            cutOverStep: 'cutOverStep',
            cutReport: 'cutReport'
        },
        zh: {
            hello: '你好, {xl}',
            home: '首页',
            cutOverFlow: '割接流',
            cutOverStep: '割接步骤',
            cutReport: '报告'
        }
    }
})

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            locale:di18n
        }
        this.changeToEn = this.changeToEn.bind(this);
        this.changeToZh = this.changeToZh.bind(this);
    }
    componentWillMount(){
    }
    componentDidMount(){
        var lanCoo = document.cookie;
        console.log(lanCoo)
        di18n.locale = lanCoo.split("=")[1]
        this.setState({
            locale:di18n
        })
    }
    componentWillUpdate(){
        document.cookie = `lan=${di18n.locale}`
    }
    changeToEn(){
        di18n.locale = "en";
        console.log(di18n)
        this.setState({
            locale:di18n
        })
    }
    changeToZh(){
        di18n.locale = "zh";
        console.log(di18n)
        this.setState({
            locale:di18n
        })
    }
    render(){
        return (
            <div>
                <header>
                    <ul>
                        <li>{this.state.locale.$t('hello', {person: 'xl'})}</li>
                        <li>{this.state.locale.$t('home')}</li>
                        <li>{this.state.locale.$t('cutOverFlow')}</li>
                        <li>{this.state.locale.$t('cutOverStep')}</li>
                        <li>{this.state.locale.$t('cutReport')}</li>
                        <li>
                            <span onClick={this.changeToEn}>English</span>&nbsp;&ensp;/&nbsp;&ensp;
                            <span onClick={this.changeToZh}>简体中文</span>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Home;