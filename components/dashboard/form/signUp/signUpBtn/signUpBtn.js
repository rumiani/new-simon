import { useContext } from "react";
import { DataContext } from "../../../../../dataContext/dataContext";
import { signUpHandler } from "./signUpFunc";

const SignUpBtn = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <>
            <button className='w-24   mx-auto bg-green-600 rounded-md py-1 hover:bg-green-500 cursor-pointer duration-700 hover:font-bold m-1'
                onClick={(e)=> signUpHandler(e,{state,dispatch})}>Sign Up</button>
        </>
     );
}
 
export default SignUpBtn;