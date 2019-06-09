import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let {history:{push}} = this.props
        return (
            <div className="warp">
                <div className="statr" onClick={()=>{
                    push("/web")
                }}>
                    开始使用>>
                </div>
                <div className="login"  onClick={()=>{
                    push("/web")
                }}>
                    登录
                </div>
                <div className="register"  onClick={()=>{
                    push("/web/register")
                }}>
                    注册
                </div>
            </div>
        )
    }
}
