import * as t from '../../../../../dataContext/types'

export const checkNameHandler = (e,{state,dispatch})=>{
    dispatch({type:t.NAME_ERROR,payload:true})
    dispatch({type:t.NAME_EXIST,payload:false})
    
    const re=/^[a-z A-Z 0-9]{4,10}$/i;
    if(re.test(e.target.value)){
        console.log(5);
        dispatch({type:t.NAME_ERROR,payload:false})
        dispatch({type:t.USERNAME,payload:e.target.value})
        if(e.target.value){
            for(let i of state.sortUsers){
                if(i.name.toUpperCase() === e.target.value.toUpperCase()){
                    console.log(i);
                    dispatch({type:t.NAME_EXIST,payload:true})
                }
            }
        }
    }    
}