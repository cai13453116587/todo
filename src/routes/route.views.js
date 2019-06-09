import React from "react";
import {Switch,Redirect,Route} from "react-router-dom"

let routes = (props) =>{
    let {routes} = props;
    let arr = routes.filter(item=>!item.redirect);
    let redirect = routes.filter(item=>item.redirect).map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}>
    </Redirect>)
    return <Switch>
        {
            arr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                return <item.component routes={item.children} {...props}></item.component>
            }}>
            </Route>).concat(redirect)
        }
    </Switch>
}
export default routes;