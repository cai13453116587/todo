
let countents=[
    {
        type:0,
        con:[]
    },{
        type:1,
        con:[]
    },{
        type:2,
        con:[]
    },{
        type:3,
        con:[]
    }
]

let countent=(state={countents,newdata:[]},action)=>{
    let newstate = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case "ADD":
        {let {val,id} = action;
        newstate.countents.find(item=>item.type===id).con.push({val});
    return newstate;}
        case "DIS":
            {
                let {index,id} = action;
                newstate.countents.find(item=>item.type===id).con.splice(index,1)
        return newstate; }
        case "BLOCK":
            {let {ind,id} = action;
            let arr = newstate.countents.find(item=>item.type===id).con[ind];
            newstate.newdata = {arr:arr.val,id,ind};
        return newstate;}
        case "END":
        newstate.newdata = [];   
        return newstate;
        case "DISDATA":
               { let {index,id} = action.obj;
                newstate.countents.find(item=>item.type===id).con.splice(index,1)  
                newstate.newdata = []; 
        return newstate;}
        case "CUT": 
               newstate.countents.find(item=>item.type===action.data.id).con.splice(action.data.ind,1)
              newstate.countents[action.ind].con.push({val:action.data.arr})
              newstate.newdata = {arr:action.data.arr,id:newstate.countents[action.ind].type,ind:newstate.countents[action.ind].con.length-1};
        return newstate;
        default:
        return state;
    }
    
}
export default countent;
