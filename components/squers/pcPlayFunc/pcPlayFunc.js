import * as t from '../../../dataContext/types'
import * as d from '../../../data/data'
let i;
export const pcPlayFunc = ({state,dispatch}) => {
  i = 0;
  // put a number between 0-3 in pcArr
  state.pcArr.push(Math.floor(Math.random()*4))
  dispatch({type: t.PC_ARR, payload: state.pcArr})
  // run the pc arr
  setTimeout(() => squerAction({state,dispatch}) , 500);

}
  
  // play sound for each squer and add then remover border for it
const squerAction = ({state,dispatch}) => {
  let audio = new Audio()
  if(i<state.pcArr.length){
    let squerID = state.pcArr[i]

    audio.src=d.srcSound[squerID]
    if(!state.mute) audio.play();
    document.getElementById(squerID).classList.add('border-4')
    setTimeout(() => {
      document.getElementById(squerID).classList.remove('border-4')
    }, 300);
  } 
  audio.addEventListener('ended', () => squerAction({state,dispatch}));
  i++;

// determine the who's turn it is
  if(i===state.pcArr.length){
    dispatch({type:t.MY_TURN})
    }
}