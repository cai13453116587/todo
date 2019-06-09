import React, { Component } from 'react'
import "../../mock/login"
import axios from "axios"
class Register extends Component {
    state={
        user:"",
        pwd:"",
        pwds:""
    }
    render() {
        let {history:{push}} = this.props;
        let {user,pwd,pwds} = this.state;
        return (
            <div className="register">
            <p>邮箱：<input type="text" placeholder="请输入邮箱" value={user} onChange={(e)=>{
                    this.setState({user:e.target.value})
                }}/></p>
            <p>密码：<input type="text" placeholder="请输入密码"  value={pwd} onChange={(e)=>{
                    this.setState({pwd:e.target.value})
                }}/></p>
            <p>确认密码：<input type="text" placeholder="请输入密码"  value={pwds} onChange={(e)=>{
                    this.setState({pwds:e.target.value})
                }}/></p>
            <p><span></span><span className="btn" onClick={()=>{
                    this.login()
                }}> 注册</span></p>
            <p><span>我同意</span><span className="reg"  onClick={()=>{
                    push("/web")
                }}>已有账号</span></p>
        </div>
        )
    }
    login=()=>{
        let {user,pwd,pwds} = this.state;
        let {history:{push}} = this.props;
        if(pwd===pwds){
            axios.post("/api/reg",{user,pwd}).then(res=>{
                let {code,meg} = res.data;
                if(code){
                    alert(meg)
                    push("/login")
                }else{
                    alert(meg)
                }
            })
        }else{
            alert("两次密码不一致")
        }
        this.setState({
            user:"",
            pwd:"",
            pwds:""
        })
        }
    
    }

export default Register;