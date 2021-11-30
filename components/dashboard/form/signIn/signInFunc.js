import * as t from '../../../../dataContext/types'
export const signInFunc = (e,{state,dispatch}) =>{
    e.preventDefault()
    console.log(state);
    let user = state.sortUsers.filter ( user =>  user.name.toUpperCase() === state.username.toUpperCase() )[0]
    // user validation
    // check if the name exist
    if(user){
        // check if the pass is wrong 
        if(user.pass !== state.password) {
            dispatch({type:t.CURRECT_PASS,payload:false})  
            return
        }  
    } 
    else {
        dispatch({type:t.NAME_EXIST,payload:false})
            return;
    }

    dispatch({type:t.SIGNEDIN,payload:true})
    localStorage.setItem('user',JSON.stringify({name:state.username,pass:state.password}))
}