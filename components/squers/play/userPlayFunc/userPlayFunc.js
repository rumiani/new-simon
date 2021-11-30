import * as t from '../../../../dataContext/types'
import * as d from '../../../../data/data'
import { pcPlayFunc } from '../pcPlayFunc/pcPlayFunc'
import { postHandler } from '../../../../fetchData/postHandler';
import { gameOverFunc } from '../../../gameOver/gameOverFunc';
export const userPlayFunc=(e,{state,dispatch})=>{
  let num = state.userArr.length
  console.log(num);
    if(!state.play || !state.myTurn) {
      // console.log('state.play: ', state.play);
      // console.log('state.myTurn: ', state.myTurn);
      document.querySelector('.play').classList.add('alert')
      setTimeout(() => {
        document.querySelector('.play').classList.remove('alert')
      }, 300);
      return }


     // create the user Array
        clickSquer(e,{state,dispatch})
        state.userArr.push(+e.target.id)
        dispatch({type: t.USER_ARR,payload:state.userArr})

// check if the user is folowing the cequence
    if(state.pcArr.join('') === state.userArr.join('') && state.pcArr.length === state.userArr.length){
      dispatch({type:t.SCORE,payload:state.score+1})
      setTimeout(() => {
          pcPlayFunc({state,dispatch})
          dispatch({type:t.MY_TURN,payload:false})
          dispatch({type:t.USER_ARR,payload:[]})
      }, 1000);
    }

    if(state.pcArr[num] !== state.userArr[num]){
      postHandler({state,dispatch})
      gameOverFunc({state,dispatch})
    }

    num++;
}





  const clickSquer = (e,{state,dispatch}) =>{
    let audio = new Audio()
    audio.src = d.srcSound[e.target.id]
  audio.play()
  if(state.mute){audio.volume=0}
  e.target.classList.add('border-4')
  // }
  setTimeout(() => {
      e.target.classList.remove('border-4')
    }, 100);
  }