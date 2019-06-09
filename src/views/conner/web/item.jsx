import React, { Component } from 'react'
import {connect} from "react-redux"

class Item extends Component {
    state={
        val:"",
        open:false
    }
    render() {
        let {color,background,title,id,ck,ind,con,dis,block} = this.props;
        let {val} = this.state
        return (
            <div >
                {
                    ind===id ? <p  style={{color,background}}><input type="text"  value={val} style={{borderColor:color,background}}
                    placeholder="输入任务,按Enter键完成" autoFocus onChange={(e)=>{
                        this.setState({val:e.target.value})
                    }} onKeyUp={(e)=>{
                        this.keyelement(e,id)
                    }}/><span>*</span></p> : <p style={{color,background}} onClick={()=>{
                        ck(id)
                    }}><span>{title}</span><span className="size">+</span></p> 
                }
                <div className="con">
                    {
                          con[id].con.map((item,index)=><p key={index} onClick={(e)=>{
                              e.stopPropagation();
                            block(id,index)
                          }}> <span style={{borderColor:color}} onClick={(e)=>{
                            e.stopPropagation();
                            dis(id,index)
                          }}></span> {item.val}</p>)
                    }
                </div>
            </div>
        )
    }
    keyelement=(e,id)=>{
        if(e.keyCode === 13){
            this.props.add(this.state.val,id)
            this.setState({val:""})
            this.props.ck(-1)
        }
    }
}
export default connect(state=>{
    return {
        con:state.countent.countents
    }
},dispatch=>{
    return {
        add(val,id){
            dispatch ({
                type:"ADD",
                val,id
            })
        },
        dis(id,ind){
            dispatch ({
                type:"DIS",
                id,ind
            })
        },
        block(id,ind){
            dispatch ({
                type:"BLOCK",
                id,ind
            })
        }
    }
})(Item);