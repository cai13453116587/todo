import React, { Component } from 'react'
import axios from "axios"
import "../../mock/countent/index"
import {NavLink} from "react-router-dom"
import Routeviews from "../../routes/route.views"
import {connect} from "react-redux"


class Home extends Component {
    state={
        leftdata:"",
        open:true,
        rightdata:""
    }
    render() {
        let {routes,open,end,disdata,cut} = this.props
        let {leftdata,rightdata} = this.state;
        let falg = open.arr ? true : false;
        return (
            <div className="togoweb">
                    <div className="left">
                        <p>
                            {
                                localStorage.username
                            }
                        </p>
                        {
                            leftdata && leftdata.map((item,index)=><NavLink key={index} to={item.url}>{item.title}</NavLink>)
                        }
                    </div>
                        <Routeviews routes={routes}/>   
                    {
                        falg && <div className="right">
                            <p>
                                <span onClick={()=>{
                                    disdata(open)
                                }}>删除</span><span onClick={()=>{
                                    end()
                                }}>关闭</span>
                            </p>
                            <h2>{open.arr}</h2>
                            {
                               rightdata && rightdata.map((item,index)=><p key={index} onClick={()=>{
                                 cut(index,open)
                               }}>{item.title}</p>)
                            }
                        </div> 
                    }       
            </div>
        )
    }
    componentDidMount(){
        axios.get("/api/leftdata").then(res=>{
            this.setState({leftdata:res.data})
        })
        axios.get("/api/rightdata").then(res=>{
            this.setState({rightdata:res.data})
        })
    }
}
export default connect(state=>{
    return {
        open:state.countent.newdata
    }
},dispatch=>{
    return {
        end(){
            dispatch({
                type:"END"
            })
        },
        disdata(obj){
            dispatch({
                type:"DISDATA",
                obj
            })
        },
        cut(ind,data){
            dispatch({
                type:"CUT",
                ind,data
            })
        }
    }
})(Home);