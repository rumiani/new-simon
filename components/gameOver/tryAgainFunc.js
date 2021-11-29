import * as t from '../../dataContext/types'
export const tryAgainFunc = ({dispatch}) =>{
    {dispatch({type:t.GAME_OVER,payload:false})}
    // {dispatch({type:t.SCORE,payload:0})}
}