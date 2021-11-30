import * as t from '../../../../dataContext/types'
import { useContext } from 'react';
import { DataContext } from '../../../../dataContext/dataContext';
import InputName from './inputName/inputName';
import InputPass from './inputPass/inputPass';
import { signInFunc } from './signInFunc';
const SignIn = () => {
    const {state,dispatch} = useContext(DataContext);
    return ( 
        <div className='pt-12'>
            <h2><strong>SIGN IN</strong></h2>
            <form className=' w-min m-auto'>
               <InputName/> 
               <InputPass/>
                <button className='w-24 mx-auto bg-green-600 rounded-md py-1 hover:bg-green-500 cursor-pointer duration-700 hover:font-bold m-1'
                onClick={(e) => signInFunc(e,{state,dispatch})}
                >
                    Sign in</button>
                <div className='underline text-blue-800 font-bold cursor-pointer hover:scale-105 duration-500'
                onClick={() => dispatch({type:t.SIGN})} >
                    Create an account</div>
            </form>
        </div>
     );
}
 
export default SignIn;