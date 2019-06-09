import Mock from "mockjs"

let left = [{
    title:"任务",
    url:"/home/task"
},{
    title:"便签",
    url:"/home/memo"
},{
    title:"项目",
    url:"/home/project"
},{
    title:"地点",
    url:"/home/site"
},{
    title:"标签",
    url:"/home/label"
}]
Mock.mock("/api/leftdata",left)

let right=[{
    title:"很重要-很紧急",
    background:"#FFEDE7",
    color:"#F76333",
    id:0
},{
    title:"重要-不紧急",
    background:"#FFEFCB",
    color:"#FEAE6A",
    id:1
},{
    title:"不重要-紧急",
    background:"#D6F4FE",
    color:"#3FB6DA",
    id:2
},{
    title:"不重要-不紧急",
    background:"#EFD",
    color:"#89C557",
    id:3
}]
Mock.mock("/api/rightdata",right)