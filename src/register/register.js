import React from "react"
import "./register.css"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            userpass: this.props.userpass
        }
    }
    change_userName(){
        var userName = document.getElementById("userName");
        var userPass = document.getElementById("userPass");
        var msg = document.getElementsByClassName("msg")[0];
        userName.oninput = ()=>{
            msg.innerText = "username:" + userName.value +"\nuserpass:"+ userPass.value;
            if(userName.value === "" && userPass.value === ""){
                msg.innerText = "";
                console.log(1)
            }
        }
    }
    change_userPass(){
        var userName = document.getElementById("userName");
        var userPass = document.getElementById("userPass");
        var msg = document.getElementsByClassName("msg")[0];
        userPass.oninput = ()=>{
            msg.innerText = "username:" + userName.value +"\nuserpass:"+ userPass.value;
            if(userName.value === "" && userPass.value === ""){
                msg.innerText = "";
                console.log(2)
            }
        }
    }
    componentDidMount(){
        this.change_userName();
        this.change_userPass();
    }
    render() {
        return (
            <div className="registerBox">
                <div className="registerInnerBox">
                    <div className="userN">
                        用户名：<input id="userName" type="text" placeholder="请输入用户名" />
                    </div>
                    <div className="userP">
                        密&ensp;&nbsp;&nbsp;码：<input id="userPass" type="text" placeholder="请输入密码" />
                    </div>
                    <div className="register_login_botton">
                        <input className="loginButton" type="button" value="登录" />
                        <input className="rigsterButton" type="button" value="注册" />
                    </div>
                </div>
                <div className="msg"></div>
            </div>
        )
    }
};

export default Register;