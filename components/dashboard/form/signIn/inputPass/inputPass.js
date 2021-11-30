import  * as t from '../../../../../dataContext/types'
import { useContext } from "react";
import { DataContext } from "../../../../../dataContext/dataContext";
// import { passCheckHandler } from "./passCheckHandler";

const InputPass = () => {
    const {state,dispatch} = useContext(DataContext);   
    const changeHandler = (e,{state,dispatch}) =>{
        dispatch({type:t.CURRECT_PASS,payload:false})
        dispatch({type:t.PASSWORD,payload:e.target.value})
    }
    return ( 
        <>
            <label className='flex' htmlFor="password">Password</label>
                <input className='input' type="password" id='password' name='password' 
                    placeholder='Password'
                    onChange={(e) => changeHandler(e,{state,dispatch})}
                />
                { state.currectPass &&
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        Wrong password
                    </p>
                }
        </>
     );
}
 
export default InputPass;