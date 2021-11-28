import * as t from '../../../dataContext/types'
import * as d from '../../../data/data'
import { pcPlayFunc } from '../../squers/pcPlayFunc/pcPlayFunc'
let num;
export const userPlayFunc=(e,{state,dispatch})=>{
    num = 0
    if(!state.play) return alert('You should hit the PLAY button first.')
     if(!state.myTurn) return alert ("It's not your turn!")


     // create the user Array
        clickSquer(e,{state,dispatch})
        state.userArr.push(+e.target.id)
        dispatch({type: t.USER_ARR,payload:state.userArr})

// check if the user is folowing the cequence
    if(state.pcArr[num] === state.userArr[num] && state.pcArr.length === state.userArr.length){
    dispatch({type:t.SCORE,payload:state.score+1})
    setTimeout(() => {
        pcPlayFunc({state,dispatch})
        dispatch({type:t.MY_TURN})
        dispatch({type:t.USER_ARR,payload:[]})
    }, 1000);
}
            // return
            // }
        if(state.pcArr[num] !== state.userArr[num]){
        console.log('state.pcArr: ',num,state.pcArr);
        console.log('state.userArr: ',num,state.userArr);
        let audioGmaeover = new Audio(d.otherSounds[1])
        if(!state.mute) audioGmaeover.play()
        dispatch({type:t.GAME_OVER})
    }

    num++;
  }





  const clickSquer = (e,{state,dispatch}) =>{
    let audio = new Audio()
    audio.src = d.srcSound[e.target.id]
  audio.play()
  if(state.muteMode){audio.volume=0}
  e.target.classList.add('border-4')
  // }
  setTimeout(() => {
      e.target.classList.remove('border-4')
    }, 100);
  }