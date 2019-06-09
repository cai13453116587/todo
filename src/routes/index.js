import React from "react"
import loadable from "react-loadable"

let Londing = () =>{
    return <div>正在加载中。。。... 。。。</div>
}

let Index=loadable({
    loader:()=>import("../views/index"),
    loading:Londing
})

let Web = loadable({
    loader:()=>import("../views/login/web"),
    loading:Londing
})

let Login = loadable({
    loader:()=>import("../views/login/login"),
    loading:Londing
})

let Register = loadable({
    loader:()=>import("../views/login/register"),
    loading:Londing
})

let Home = loadable({
    loader:()=>import("../views/conner/home"),
    loading:Londing
})
let Task = loadable({
    loader:()=>import("../views/conner/web/task"),
    loading:Londing
})
let Memo = loadable({
    loader:()=>import("../views/conner/web/memo"),
    loading:Londing
})
let Project = loadable({
    loader:()=>import("../views/conner/web/project"),
    loading:Londing
})
let Site = loadable({
    loader:()=>import("../views/conner/web/site"),
    loading:Londing
})
let Label = loadable({
    loader:()=>import("../views/conner/web/label"),
    loading:Londing
})

let reouer = [{
    path:"/index",
    component:Index
},
{
    path:"/home",
    component:Home,
    children:[{
        path:"/home/task",
        component:Task
    },{
        path:"/home/memo",
        component:Memo
    },{
        path:"/home/project",
        component:Project
    },{
        path:"/home/site",
        component:Site
    },{
        path:"/home/label",
        component:Label
    },{
        path:"/home",
        redirect:"/home/task"
    }]
},
{
    path:"/web",
    component:Web,
    children:[{
        path:"/web/login",
        component:Login,
    },{
        path:"/web/register",
        component:Register
    },{
        path:"/web",
        redirect:"/web/login"
    }]
},
{
    path:"/",
    redirect:"/index"
}]

export default reouer;