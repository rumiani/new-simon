import { useContext } from "react";
import { DataContext } from "../../../../../dataContext/dataContext";
import { repeatPassHandler } from "./repeatPassHandler";

const InputRepeatPass = () => {
    const {state,dispatch} = useContext(DataContext);
    return ( 
        <>
        <label className='flex' htmlFor="repeatPassword">Repeat Password</label>
                <input className='input' type="password" id='repeatPassword' name='repeatPassword' 
                placeholder='Repeat Password' onChange={(e) => repeatPassHandler(e,{state,dispatch})}/>
                { state.matchPassError && 
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        Password doesn't match!
                    </p>
                }
        </>
     );
}
 
export default InputRepeatPass;