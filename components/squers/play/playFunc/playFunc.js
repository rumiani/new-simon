import * as d from '../../../../data/data'
import * as t from '../../../../dataContext/types'
import { pcPlayFunc } from '../pcPlayFunc/pcPlayFunc'
export const playFunc = ({state,dispatch}) => {
  dispatch({type:t.SCORE,payload:0})
  state.score = 0
  dispatch({type:t.PLAY,payload:true})
  state.play = true
  dispatch({type:t.MY_TURN,pyload:false})
  state.myTurn = false
  dispatch({type:t.PC_ARR,payload:[]})
  state.pcArr = []
  dispatch({type:t.USER_ARR,payload:[]})
  state.userArr = []

  
  let audio = new Audio()
  audio.src = d.otherSounds[0]
    if(!state.mute) audio.play()   
    setTimeout(() => {
      // console.log(state);
      pcPlayFunc({state,dispatch});
    }, 1000);
}