import { useContext } from "react";
import { DataContext } from "../../../../../dataContext/dataContext";
import { checkNameHandler } from "./checkNameHandler";

const InputName = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <>
            <label className='flex' htmlFor="username">Username</label>
            <input className='input' type="text" id='username' name='username' placeholder='Username' 
            onChange={(e) => checkNameHandler(e,{state,dispatch})}/>
            { state.nameError &&
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        4-10 characters ( A-Z , 0-9 )
                    </p>
            }

            { state.nameExist &&
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        Already exist.
                    </p>
            }
            { !state.nameExist && state.sign &&
                    <p className='text-red-700 font-bold text-sm -mt-2'>
                        Doesn't exist
                    </p>
            }

        </>
     );
}
 
export default InputName;