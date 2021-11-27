import * as t from '../../../../../dataContext/types'

export const checkNameHandler = (e,{state,dispatch})=>{
    dispatch({type:t.NAME_ERROR,payload:true})
    dispatch({type:t.NAME_EXIST,payload:false})
    dispatch({type:t.USERNAME,payload:e.target.value})

const re=/^[a-z A-Z 0-9]{4,10}$/i;
    if(re.test(e.target.value)){
        dispatch({type:t.NAME_ERROR,payload:false})
        if(e.target.value !== null){
            for(let i of state.sortUsers){
                if(i.name.toUpperCase() === e.target.value.toUpperCase()){
                    dispatch({type:t.NAME_EXIST,payload:true})
                }
            }
        }
    }    
}