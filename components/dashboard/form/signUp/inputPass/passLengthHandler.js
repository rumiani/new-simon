import * as t from '../../../../../dataContext/types'
export const passLengthHandler = (e,{state,dispatch})=>{
    dispatch({type:t.PASS_LENGTH_ERROR,payload:true})
    dispatch({type:t.PASSWORD,payload:e.target.value.trim()})
    
    const re=/^[a-z A-Z 0-9 \- _]{4,10}$/i;

    if(re.test(e.target.value)) dispatch({type:t.PASS_LENGTH_ERROR,payload:false})
}