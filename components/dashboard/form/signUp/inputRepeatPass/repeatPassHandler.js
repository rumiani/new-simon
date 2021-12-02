import * as t from '../../../../../dataContext/types'

export const repeatPassHandler = (e,{state,dispatch})=>{
    dispatch({type:t.REPEAT_PASSWORD,payload:e.target.value})
    let match = !(state.password === e.target.value);
    if(!state.passLengthError)dispatch({type: t.MATCH_PASS_ERROR,payload:match})
}