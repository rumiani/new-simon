import  * as t from '../../../../../dataContext/types'
import { useContext } from "react";
import { DataContext } from "../../../../../dataContext/dataContext";
const InputName = () => {
    const {state,dispatch} = useContext(DataContext);
    const nameChangeHandler = (e,{state,dispatch}) =>{
        dispatch({type:t.NAME_EXIST,payload:true})
        dispatch({type:t.USERNAME,payload:e.target.value})
    }
    return ( 
        <>
            <label className='flex' htmlFor="username">Username</label>
            <input className='input' type="text" id='username' name='username' placeholder='Username' 
            onChange={(e) => nameChangeHandler(e,{state,dispatch})}/>
            { !state.nameExist &&
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        Doesn't exist
                    </p>
            }

        </>
     );
}
 
export default InputName;