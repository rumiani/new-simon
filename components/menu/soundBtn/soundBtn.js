import * as t from '../../../dataContext/types'
import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";

const SoundBtn = () => {
    const {state,dispatch} = useContext(DataContext);
    return ( 
        <span className='btn bg-yellow-500 xm:w-min' onClick={() => dispatch({type:t.MUTE})}
            title={state.mute?'Unmute':'Mute'}>
            <i className={`fas fa-volume-${state.mute?'mute':'up'} text-lg`}></i>
        </span>
     );
}
 
export default SoundBtn;