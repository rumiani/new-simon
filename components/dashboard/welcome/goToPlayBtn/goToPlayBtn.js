import * as t from '../../../../dataContext/types'
import { useContext } from "react";
import { DataContext } from '../../../../dataContext/dataContext';

const GoToPlayBtn = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
            <span className='btn bg-blue-600 m-auto' title='Play as a guest' 
                onClick={() => dispatch({type:t.DASHBOARD,payload:false})}>
                Go to play
            </span>
     );
}
 
export default GoToPlayBtn;