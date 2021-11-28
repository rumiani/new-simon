import * as t from "../dataContext/types";

export const checkAuthHandler = (sortUsers,{dispatch}) => {
    let localObj = JSON.parse(localStorage.getItem('user'));
    if(!localObj)return;
    console.log(localObj);
    for(let user of sortUsers){
        if(user.name === localObj.name && user.pass === localObj.pass) {
            console.log(1);
            dispatch({type:t.SIGNEDIN,payload:true})
            dispatch({type:t.USERNAME,payload:user.name})
            // dispatch({type:t.DASHBOARD,payload:false})
        }
    }
    console.log(user.name, localObj.name);
}