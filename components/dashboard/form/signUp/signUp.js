import { useContext, useState } from "react";
import { DataContext } from "../../../../dataContext/dataContext";
import * as t from '../../../../dataContext/types'
import InputName from "./inputName/inputName";
import InputPass from "./inputPass/inputPass";
import InputRepeatPass from "./inputRepeatPass/inputRepeatPass";
import SignUpBtn from "./signUpBtn/signUpBtn";

const SignUp = () => {
    const {state,dispatch} = useContext(DataContext);
    const switchSignHandler = () =>{
        dispatch({type:t.SIGN})
        dispatch({type:t.USERNAME,payload:null})
        dispatch({type:t.PASSWORD,payload:null})
        dispatch({type:t.REPEAT_PASSWORD,payload:null})
        dispatch({type:t.NAME_EXIST,payload:false})

    }
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
                <span onClick={() => switchSignHandler({state,dispatch})}
                className='underline text-blue-800 font-bold cursor-pointer hover:scale-105 duration-500 m-2'>
                    Sign in
                </span>
            </div>
        </div>
     );
}
 
export default SignUp;