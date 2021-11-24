import { useContext } from "react";
import { DataContext } from "../../../../dataContext/dataContext";
import * as t from '../../../../dataContext/types'
const SignUp = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <div className='w-max m-auto'>
            <h2><strong>SIGN UP</strong></h2>
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