import { useContext } from "react";
import { DataContext } from "../../../../../dataContext/dataContext";
import { repeatPassHandler } from "../inputRepeatPass/repeatPassHandler";
import { passLengthHandler } from "./passLengthHandler";

const InputPass = () => {
    const {state,dispatch} = useContext(DataContext);    
    return ( 
        <>
            <label className='flex' htmlFor="password">Password</label>
                <input className='input' type="password" id='password' name='password' 
                    placeholder='Password' onChange={(e) => repeatPassHandler(e,{state,dispatch})}
                    onChange={(e) => passLengthHandler(e,{state,dispatch})}
                />
                { state.passLengthError &&
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        Please enter 4-10 characters
                    </p>
                }
        </>
     );
}
 
export default InputPass;