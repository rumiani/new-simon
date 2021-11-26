import { useContext } from "react";
import { DataContext } from "../../../dataContext/dataContext";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";

const Form = () => {
    const {state,dispatch} = useContext(DataContext);

    return ( 
        <div className='h-2/3 bg-blue-400'>
            {state.sign? <SignIn/>: <SignUp/>}
            
        </div>
     );
}
 
export default Form;