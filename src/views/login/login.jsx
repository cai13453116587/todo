import React, { Component } from 'react'
import "../../mock/login"
import axios from "axios"

class Login extends Component {
    state={
        user:"",
        pwd:""
    }
    render() {
        let {history:{push}} = this.props;
        let {user,pwd} = this.state;
        return (
            <div className="login">
                <p>邮箱：<input type="text" placeholder="请输入邮箱" value={user} onChange={(e)=>{
                    this.setState({user:e.target.value})
                }}/></p>
                <p>密码：<input type="text" placeholder="请输入密码"  value={pwd} onChange={(e)=>{
                    this.setState({pwd:e.target.value})
                }}/></p>
                <p><span></span><span className="btn" onClick={()=>{
                    this.login()
                }}>登录</span></p>
                <p><span>十天之内免登陆</span><span>忘记密码</span></p>
                <p className="reg"  onClick={()=>{
                    push("/web/register")
                }}><span></span>木有账号？马上注册一个</p>
            </div>
        )
    }
    login=()=>{
        let {user,pwd} = this.state;
        let {history:{push}} = this.props;
        axios.post("/api/login",{user,pwd}).then(res=>{
            let {code,meg} = res.data;
            if(code){
                alert(meg)
            }else{
                localStorage.username = user
                push("/home")
            }
        })
    }
}
export default Login;