import React from "react";
import "./home.css";
import di18n from "../asset/di18n.js";//用export default di18n（es6方法）导出，用import（es6方法）引入
// const di18n = require("../asset/di18n.js")//用module.exports=di18n（node模块导出方法）导出，用require（node和es6方法）引入

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            lan:di18n
        }
        this.changeToEn = this.changeToEn.bind(this);
        this.changeToZh = this.changeToZh.bind(this);
    }
    componentDidMount(){
        var lanCoo = document.cookie.split("=")[1] || di18n.locale;
        console.log(lanCoo)
        di18n.setLocale(lanCoo,()=>{
            this.setState({
                lan:di18n
            })
        });
    }
    changeToEn(){
        di18n.setLocale("en",()=>{
            document.cookie = `lan=${di18n.locale}`
            // console.log(di18n)
            this.setState({
                lan:di18n
            })
        });
    }
    changeToZh(){
        di18n.setLocale("zh",()=>{
            document.cookie = `lan=${di18n.locale}`
            // console.log(di18n)
            this.setState({
                lan:di18n
            })
        });
    }
    render(){
        return (
            <div>
                <header>
                    <ul>
                        <li>{this.state.lan.$t('hello', {person: 'fbq'})}</li>
                        <li>{this.state.lan.$t('home')}</li>
                        <li>{this.state.lan.$t('cutOverFlow')}</li>
                        <li>{this.state.lan.$t('cutOverStep')}</li>
                        <li>{this.state.lan.$t('cutReport')}</li>
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