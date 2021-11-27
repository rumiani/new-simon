import * as t from "../dataContext/types";

export const checkAuthHandler = (sortUsers,{dispatch}) => {
    let localObj = JSON.parse(localStorage.getItem('user'));
    console.log(localObj);
console.log(sortUsers);
    for(let user of sortUsers){
        if(user.name === localObj.name && user.pass === localObj.pass) {
            console.log(1);
            dispatch({type:t.SIGNEDIN,payload:true})
            dispatch({type:t.USERNAME,payload:user.name})
        }
    }
    console.log(user.name, localObj.name);
}