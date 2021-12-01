import * as t from '../../../../../dataContext/types'
import { fetchData } from "../../../../../fetchData/fetchData";

export const signUpHandler = (e,{state,dispatch})=>{
    e.preventDefault()
    let valide = state.nameExist || state.nameError || state.passLengthError || state.matchPassError;
    // console.log(valide);
    console.log(state);
    if(state.nameExist ) return console.log('state.nameExist: ',state.nameExist);
    if(state.nameError) return console.log('state.nameError: ',state.nameError);
    if(state.passLengthError) return console.log('state.passLengthError: ',state.passLengthError);
    if(state.matchPassError) return console.log('state.matchPassError: ',state.matchPassError);
console.log(state);
    if(state.username === null ) return dispatch({type:t.NAME_ERROR,payload:true})
if(state.password !== state.repeatPassword ) return dispatch({type:t.NAME_ERROR,payload:true})
        // props.menuHandler()
        fetch('https://highestscores-7983d-default-rtdb.firebaseio.com/users.json', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:state.username,score:0,pass:state.password})      
        }).then( res => {
            // if(res.status === 200){
                localStorage.setItem('user',JSON.stringify({name:state.username,pass:state.password}))
                fetchData({dispatch})
            // }
        }).catch (()=> {
            dispatch({type:t.ERROR})
            dispatch({type:t.LOADING})
        })
}