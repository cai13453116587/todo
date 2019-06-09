import React, { Component } from 'react'
import axios from "axios"
import "../../../mock/countent/index"
import Item from "./item"

export default class task extends Component {
    state={
        rightdata:[],
        ind:-1
    }
    render() {
        let {rightdata,ind} = this.state;
        return (
            <div className="center">
                <div className="top">

                </div>
                <div className="bottom">
                    {
                        rightdata.map(item=><Item key={item.id} {...item} ind={ind} ck={(id)=>{
                                this.setState({ind:id}) 
                        }}/>)
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/api/rightdata").then(res=>{
            this.setState({rightdata:res.data})
        })
    }
}
