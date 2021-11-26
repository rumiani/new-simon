import { useContext, useState } from "react";
import { DataContext } from "../../../../dataContext/dataContext";
import * as t from '../../../../dataContext/types'
import InputName from "./inputName/inputName";
import InputPass from "./InputPass/InputPass";
import InputRepeatPass from "./InputRepeatPass/InputRepeatPass";
import SignUpBtn from "./signUpBtn/signUpBtn";

const SignUp = () => {
    const {state,dispatch} = useContext(DataContext);
    return ( 
        <div className='w-max m-auto'>
            <h2><strong>SIGN UP</strong></h2>
            <form className=' w-min m-auto'>
                <InputName />                
                <InputPass/>
                <InputRepeatPass/>
                
                <SignUpBtn/>
            </form>
            <div >Already have an account? 
                <span onClick={() => dispatch({type:t.SIGN})}
                className='underline text-blue-800 font-bold cursor-pointer hover:scale-105 duration-500 m-2'>
                    Sign in
                </span>
            </div>
        </div>
     );
}
 
export default SignUp;