import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";
import { playFunc } from "./playFunc/playFunc";

const Play = () => {
  const {state,dispatch} = useContext(DataContext);
    return (
            <button className='play' onClick = {() => playFunc({state, dispatch})}>
              <strong>{state.play?'Restart':'Start'}</strong> <br />
              <p className=' text-sm'>{state.play && state.myTurn && 'Your turn'}
              {state.play && !state.myTurn && 'App turn'}</p>
            </button>
    );
}
 
export default Play;