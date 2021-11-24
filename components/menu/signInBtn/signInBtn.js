import * as t from '../../../dataContext/types'
import { useContext} from "react";
import { DataContext } from '../../../dataContext/dataContext';

const SignInBtn = () => {
    const {state,dispatch} = useContext(DataContext);

    
    return ( 
        <span className='btn bg-green-600 ' onClick={() => dispatch({type:t.DASHBOARD})}>Sign in</span>
     );
}
 
export default SignInBtn;