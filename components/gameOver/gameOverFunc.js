import * as t from '../../dataContext/types'
import * as d from '../../data/data'

export const gameOverFunc = ({state,dispatch}) => {

    let audioGmaeover = new Audio(d.otherSounds[1])
    if(!state.mute) audioGmaeover.play()

    dispatch({type:t.GAME_OVER,payload:true})
    dispatch({type:t.MY_TURN,pyload:false})
    dispatch({type:t.PC_ARR,payload:[]})
    dispatch({type:t.PLAY})
    dispatch({type:t.USER_ARR,payload:[]})
    // dispatch({type:t.SCORE,payload:0})
}