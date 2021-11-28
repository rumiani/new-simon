import { useContext } from "react";
import { DataContext } from "../../../../dataContext/dataContext";
import { signOutFunc } from "./signOutFunc";

const SignOutBtn = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <span className='btn bg-red-500 m-auto' onClick={() => signOutFunc({dispatch})}>
            Sign out
        </span>
     );
}
 
export default SignOutBtn;