import Mock from "mockjs"

let users = [
    {
        user:"赵丽莹",
        pwd:"22"
    },{
        user:"王霞",
        pwd:"20"
    },{
        user:"胡瑞斌",
        pwd:"23"
    }
]

if(!localStorage.users){
    localStorage.users = JSON.stringify(users)
}
Mock.mock("/api/reg",({body})=>{
    let {user,pwd} = JSON.parse(body);
    let users = JSON.parse(localStorage.users);
    let my = users.find(item=>item.user === user);
    if(!my){
        users.push({user,pwd})
        localStorage.users = JSON.stringify(users);
        return{
            code:0,
            meg:"注册成功"
        }
    }else{
        return{
            code:2,
            meg:"账号已存在"
        }
    }
})
Mock.mock("/api/login",({body})=>{
    let {user,pwd} = JSON.parse(body);
    users = JSON.parse(localStorage.users);
   let my = users.find(item=>item.user === user);
   if(my){
       if(my.pwd === pwd){
            return {
                code:0,
                meg:"登录成功"
            }
       }else{
            return{
                code:1,
                meg:"密码有误，请新输入"
            }
       }
   }else{
        return{
            code:2,
            meg:"账号或密码错误，请重新输入"
        }
   }
})