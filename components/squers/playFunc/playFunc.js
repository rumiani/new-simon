import * as d from '../../../data/data'
import * as t from '../../../dataContext/types'
import { pcPlayFunc } from '../../squers/pcPlayFunc/pcPlayFunc'
export const playFunc = ({state,dispatch}) => {
  dispatch({type:t.PLAY})
  let audio = new Audio()
  audio.src = d.otherSounds[0]
    if(!state.mute) audio.play()
    // if(state.mute){audio.volume=0} 
    setTimeout(() => {
      pcPlayFunc({state,dispatch});
    }, 1000);
}